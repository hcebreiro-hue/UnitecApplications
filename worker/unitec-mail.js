// Worker "unitec-mail": recibe el formulario de unitecapplications.com y lo envía por Cloudflare Email Service.
//
// Requisitos en el Worker (Configuración):
//   - Binding de tipo "Servicio de correo electrónico" con nombre de variable: EMAIL
//   - Variable de texto TO = dirección que recibe las consultas (destino verificado)
//   - Dominio unitecapplications.com incorporado en Email Service (Onboard Domain)
// Opcionales:
//   - Secreto TURNSTILE_SECRET = clave secreta de Cloudflare Turnstile. Si existe, se exige y valida el token.
//   - Variable AUTOREPLY = "1" para enviar un aviso de recepción al cliente.
//     Requiere plan Workers Paid (enviar a destinatarios arbitrarios). Si falla, la consulta igual se envía.
// Este Worker NO debe tener binding Assets ni compilaciones conectadas a un repo.

const ALLOWED_ORIGINS = ["https://unitecapplications.com", "https://www.unitecapplications.com"];
const FROM = { email: "contacto@unitecapplications.com", name: "Unitec Applications" };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const TYPES = {
  es: { app: "Aplicación Android nueva", maint: "Mantenimiento o mejoras", publish: "Publicación en Google Play", other: "Otro" },
  en: { app: "New Android app", maint: "Maintenance or improvements", publish: "Google Play publishing", other: "Other" },
};

const REPLY_TEXTS = {
  es: {
    subject: "Recibimos tu consulta | Unitec Applications",
    greeting: (name) => `Hola ${name},`,
    body: "Recibimos tu consulta y te vamos a responder a la brevedad. Si necesitás algo urgente, también podés escribirnos por WhatsApp.",
    copy: "Este es un aviso automático; no hace falta que lo respondas. Copia de tu mensaje:",
    signature: "Equipo de Unitec Applications",
  },
  en: {
    subject: "We received your inquiry | Unitec Applications",
    greeting: (name) => `Hi ${name},`,
    body: "We received your inquiry and will get back to you shortly. If it is urgent, you can also message us on WhatsApp.",
    copy: "This is an automatic notice; you don't need to reply. A copy of your message:",
    signature: "The Unitec Applications team",
  },
};

function corsHeaders(origin) {
  return {
    "Access-Control-Allow-Origin": ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0],
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400",
    "Vary": "Origin",
  };
}

function json(body, status, origin) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", ...corsHeaders(origin) },
  });
}

function escapeHtml(s) {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

function oneLine(s) {
  return s.replace(/[\r\n]+/g, " ");
}

// Valida el token de Cloudflare Turnstile contra la API Siteverify.
async function verifyTurnstile(secret, token, ip) {
  if (!token || typeof token !== "string" || token.length > 2048) return false;
  const body = new FormData();
  body.append("secret", secret);
  body.append("response", token);
  if (ip) body.append("remoteip", ip);
  try {
    const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", { method: "POST", body });
    const result = await res.json();
    return result.success === true;
  } catch (e) {
    console.log("turnstile_verify_error", e && e.message);
    return false;
  }
}

export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin") || "";

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: corsHeaders(origin) });
    }
    if (request.method !== "POST") {
      return json({ ok: false, error: "method_not_allowed" }, 405, origin);
    }
    if (!ALLOWED_ORIGINS.includes(origin)) {
      return json({ ok: false, error: "origin_not_allowed" }, 403, origin);
    }

    let data;
    try {
      data = await request.json();
    } catch (e) {
      return json({ ok: false, error: "invalid_json" }, 400, origin);
    }

    // Honeypot: los bots rellenan este campo; respondemos OK sin enviar nada.
    if (typeof data.website === "string" && data.website.trim() !== "") {
      return json({ ok: true }, 200, origin);
    }

    const lang = data.lang === "en" ? "en" : "es";
    const name = String(data.name || "").trim().slice(0, 100);
    const email = String(data.email || "").trim().slice(0, 200);
    const message = String(data.message || "").trim().slice(0, 5000);
    const type = TYPES[lang][data.type] || String(data.type || "").slice(0, 60) || "-";

    if (!name) return json({ ok: false, error: "invalid_name" }, 400, origin);
    if (!EMAIL_RE.test(email)) return json({ ok: false, error: "invalid_email" }, 400, origin);
    if (message.length < 10) return json({ ok: false, error: "invalid_message" }, 400, origin);

    // Anti-spam con Turnstile (solo si el secreto está configurado).
    if (env.TURNSTILE_SECRET) {
      const ip = request.headers.get("CF-Connecting-IP");
      const human = await verifyTurnstile(env.TURNSTILE_SECRET, data.turnstileToken, ip);
      if (!human) return json({ ok: false, error: "captcha_failed" }, 403, origin);
    }

    if (!env.EMAIL || !env.TO) {
      return json({ ok: false, error: "worker_not_configured" }, 500, origin);
    }

    const text = `Nombre: ${name}\nEmail: ${email}\nTipo: ${type}\n\n${message}`;
    const html =
      `<p><strong>Nombre:</strong> ${escapeHtml(name)}<br>` +
      `<strong>Email:</strong> ${escapeHtml(email)}<br>` +
      `<strong>Tipo:</strong> ${escapeHtml(type)}</p>` +
      `<p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>`;

    try {
      await env.EMAIL.send({
        to: env.TO,
        from: FROM,
        replyTo: { email, name: oneLine(name) },
        subject: `Consulta web: ${oneLine(name)}`,
        text,
        html,
      });
    } catch (e) {
      console.log("email_send_failed", e && e.code, e && e.message);
      return json({ ok: false, error: "send_failed", code: (e && e.code) || null }, 502, origin);
    }

    // Aviso de recepción al cliente (opcional). Nunca hace fallar la consulta ya enviada.
    if (env.AUTOREPLY === "1") {
      const t = REPLY_TEXTS[lang];
      const greeting = t.greeting(oneLine(name));
      try {
        await env.EMAIL.send({
          to: email,
          from: FROM,
          replyTo: { email: FROM.email, name: FROM.name },
          subject: t.subject,
          text: `${greeting}\n\n${t.body}\n\n${t.copy}\n\n${message}\n\n${t.signature}`,
          html:
            `<p>${escapeHtml(greeting)}</p>` +
            `<p>${escapeHtml(t.body)}</p>` +
            `<p style="color:#5b6270">${escapeHtml(t.copy)}</p>` +
            `<blockquote style="margin:0;padding-left:12px;border-left:3px solid #d1121b">${escapeHtml(message).replace(/\n/g, "<br>")}</blockquote>` +
            `<p>${escapeHtml(t.signature)}</p>`,
        });
      } catch (e) {
        console.log("autoreply_failed", e && e.code, e && e.message);
      }
    }

    return json({ ok: true }, 200, origin);
  },
};
