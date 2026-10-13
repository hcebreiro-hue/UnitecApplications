// Worker "unitec-mail": recibe el formulario de unitecapplications.com y lo envía por Cloudflare Email Service.
// Requisitos en el Worker:
//   - Binding de tipo Servicio de correo electrónico con nombre de variable: EMAIL
//   - Variable de texto TO = dirección que recibe las consultas (ej. hcebreiro@gmail.com)
//   - Dominio unitecapplications.com incorporado en Email Service (Onboard Domain)
// Este Worker NO debe tener binding Assets ni compilaciones conectadas a un repo.

const ALLOWED_ORIGINS = ["https://unitecapplications.com", "https://www.unitecapplications.com"];
const FROM = { email: "contacto@unitecapplications.com", name: "Unitec Applications" };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const TYPES = { app: "Aplicación Android nueva", maint: "Mantenimiento o mejoras", publish: "Publicación en Google Play", other: "Otro" };

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

    const name = String(data.name || "").trim().slice(0, 100);
    const email = String(data.email || "").trim().slice(0, 200);
    const message = String(data.message || "").trim().slice(0, 5000);
    const type = TYPES[data.type] || String(data.type || "").slice(0, 60) || "-";

    if (!name) return json({ ok: false, error: "invalid_name" }, 400, origin);
    if (!EMAIL_RE.test(email)) return json({ ok: false, error: "invalid_email" }, 400, origin);
    if (message.length < 10) return json({ ok: false, error: "invalid_message" }, 400, origin);

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
        replyTo: { email, name },
        subject: `Consulta web: ${name.replace(/[\r\n]+/g, " ")}`,
        text,
        html,
      });
    } catch (e) {
      console.log("email_send_failed", e && e.code, e && e.message);
      return json({ ok: false, error: "send_failed", code: (e && e.code) || null }, 502, origin);
    }

    return json({ ok: true }, 200, origin);
  },
};
