/* ==========================================================
   Unitec Applications | Idioma, contacto y utilidades
   ========================================================== */

// ---------- CONFIGURACIÓN: reemplazá estos valores ----------
const CONFIG = {
  whatsappNumber: "5491166391260",          // Código de país + área + número, sin + ni espacios (número de Unitec)
  contactEmail: "contacto@unitecapplications.com",
  mailEndpoint: "https://unitec-mail.hcebreiro.workers.dev", // Worker que envía el formulario por Email Service
  turnstileSiteKey: "0x4AAAAAAFV9QGRjMqgA5FJy",                       // Clave pública (sitekey) de Cloudflare Turnstile. Vacía = sin verificación anti-spam
  companyName: "Unitec Applications",
};

// ---------- Traducciones ----------
const TEXTS = {
  es: {
    nav_services: "Servicios",
    nav_process: "Proceso",
    nav_projects: "Proyectos",
    nav_about: "Nosotros",
    nav_contact: "Contacto",
    nav_cta: "Pedir presupuesto",
    menu_open: "Abrir menú",
    menu_close: "Cerrar menú",

    hero_eyebrow: "Desarrollo de apps Android",
    hero_title_pre: "Apps Android ",
    hero_title_hl: "a medida",
    hero_title_post: ", pensadas para tu negocio",
    hero_lead: "Diseñamos, desarrollamos y publicamos aplicaciones móviles con tecnología moderna, código mantenible y acompañamiento real en cada etapa.",
    hero_cta_primary: "Pedir presupuesto",
    hero_cta_secondary: "Ver servicios",
    stat1_value: "Kotlin",
    stat1_label: "Lenguaje oficial de Android",
    stat2_value: "Compose",
    stat2_label: "Interfaces modernas y fluidas",
    stat3_value: "Google Play",
    stat3_label: "Publicación y mantenimiento",

    services_eyebrow: "Servicios",
    services_title: "Todo lo que necesitás para tener tu app",
    svc1_title: "Desarrollo de apps",
    svc1_text: "Aplicaciones nativas para Android con Kotlin y Jetpack Compose, a medida de tus procesos.",
    svc2_title: "Diseño de interfaz",
    svc2_text: "Pantallas claras, consistentes y pensadas para que cualquier usuario las entienda.",
    svc3_title: "Backend y datos",
    svc3_text: "Bases de datos, usuarios, sincronización y servicios en la nube, con seguridad desde el diseño.",
    svc4_title: "Publicación y soporte",
    svc4_text: "Publicamos en Google Play y te acompañamos con actualizaciones y mantenimiento.",

    process_eyebrow: "Cómo trabajamos",
    process_title: "Un proceso claro, con entregas parciales",
    step1_title: "Consulta",
    step1_text: "Entendemos tu idea, tus usuarios y tus objetivos.",
    step2_title: "Propuesta",
    step2_text: "Definimos alcance, plazos y presupuesto a medida.",
    step3_title: "Desarrollo",
    step3_text: "Avanzamos por etapas y te mostramos versiones de prueba durante todo el proceso.",
    step4_title: "Publicación",
    step4_text: "Subimos la app a Google Play y dejamos todo documentado.",

    projects_eyebrow: "Proyectos",
    projects_title: "Lo que estamos construyendo",
    badge_app: "App Android",
    badge_dev: "En desarrollo",
    proj1_title: "Mi Chofer Privado",
    proj1_text: "Aplicación para gestionar viajes privados, clientes, tarifas, gastos del vehículo y reportes.",
    proj1_cover_alt: "Portada del manual de Mi Chofer Privado",
    proj1_show: "Ver pantallas",
    proj1_hide: "Ocultar pantallas",
    proj1_gallery_label: "Pantallas de Mi Chofer Privado",
    proj1_home_alt: "Pantalla de inicio con resumen mensual y próximos viajes",
    proj1_trips_alt: "Pantalla de calendario y gestión de viajes",
    proj1_rates_alt: "Pantalla de calculadora de tarifas",
    proj1_expenses_alt: "Pantalla de mantenimiento, gastos y combustible",
    proj1_home_cap: "Inicio",
    proj1_trips_cap: "Viajes",
    proj1_rates_cap: "Tarifas",
    proj1_expenses_cap: "Auto",
    proj1_link: "Descargar manual completo (PDF)",
    proj2_title: "Reservas de turnos médicos",
    proj2_text: "Aplicación para reservar y administrar los turnos de un consultorio médico.",
    proj3_title: "Gestión de consorcios",
    proj3_text: "Aplicación para la administración de consorcios.",

    about_eyebrow: "Nosotros",
    about_title: "Unitec Applications",
    about_text: "Somos un equipo dedicado al desarrollo de software. Creemos en la comunicación directa, los plazos cumplidos y el código que se puede mantener en el tiempo.",
    value1: "Comunicación directa con quien desarrolla",
    value2: "Presupuestos claros, sin sorpresas",
    value3: "Código ordenado y documentado",
    value4: "Acompañamiento después de publicar",

    contact_eyebrow: "Contacto",
    contact_title: "Contanos tu idea",
    contact_text: "Respondemos con una propuesta inicial sin cargo. Podés escribirnos por WhatsApp o completar el formulario.",
    contact_whatsapp: "Escribir por WhatsApp",
    contact_email_btn: "Enviar un email",
    contact_direct: "Email directo:",
    form_name: "Nombre",
    form_email: "Email",
    form_type: "Tipo de proyecto",
    type_app: "Aplicación Android nueva",
    type_maint: "Mantenimiento o mejoras",
    type_publish: "Publicación en Google Play",
    type_other: "Otro",
    form_msg: "Contanos tu proyecto",
    form_submit: "Enviar consulta",
    mail_help: "¿No se abre tu app de correo?",
    mail_gmail: "Abrir en Gmail",
    mail_copy: "Copiar email",
    mail_copied: "¡Copiado!",
    form_sent: "No pudimos enviar el mensaje desde el sitio. Podés enviarlo desde Gmail o copiar el mensaje.",
    form_copy: "Copiar mensaje",
    form_sending: "Enviando...",
    form_ok: "¡Gracias! Recibimos tu consulta y te respondemos a la brevedad.",
    form_fail: "No pudimos enviar tu consulta. Probá de nuevo o usá una de las alternativas.",
    form_note: "Tu consulta se envía a nuestro correo. No guardamos nada en este sitio.",
    form_error: "Revisá los campos marcados antes de enviar.",
    form_error_name: "Ingresá tu nombre.",
    form_error_email: "Ingresá un email válido.",
    form_error_message: "Contanos un poco más: el mensaje debe tener al menos 10 caracteres.",
    form_error_captcha: "Completá la verificación de seguridad antes de enviar.",
    form_privacy_prefix: "Al enviar, aceptás la",
    form_privacy_link: "Política de privacidad",

    footer_rights: "Todos los derechos reservados.",
    footer_privacy: "Política de privacidad",
    footer_top: "Volver arriba",

    privacy_eyebrow: "Legal",
    privacy_title: "Política de privacidad",
    privacy_intro: "En Unitec Applications respetamos tu privacidad y minimizamos el tratamiento de datos.",
    privacy_data_title: "Datos del formulario",
    privacy_data_text: "Al enviar el formulario, tu nombre, email y mensaje se transmiten a un servicio propio de Unitec Applications alojado en Cloudflare, que los reenvía por correo electrónico a nuestra casilla. No los guardamos en una base de datos ni en este sitio, y los usamos únicamente para responder tu consulta.",
    privacy_providers_title: "Proveedores y servicios de terceros",
    privacy_providers_text: "El sitio y el envío del formulario funcionan sobre Cloudflare, que puede registrar datos técnicos de conexión (como la dirección IP) por motivos de seguridad y funcionamiento. Las tipografías se cargan desde Google Fonts, por lo que tu navegador se conecta a los servidores de Google al abrir el sitio.",
    privacy_spam_text: "Para evitar envíos automáticos de spam, el formulario puede usar Cloudflare Turnstile, que verifica que quien envía es una persona sin pedirte resolver acertijos y puede procesar datos técnicos de tu navegador.",
    privacy_tracking_title: "Cookies y analítica",
    privacy_tracking_text: "No usamos cookies de analítica, publicidad ni seguimiento de terceros.",
    privacy_contact_title: "Contacto",
    privacy_contact_text: "Si nos escribís por email o WhatsApp, usaremos tus datos únicamente para responder tu consulta.",
    privacy_meta_title: "Unitec Applications | Política de privacidad",
    privacy_meta_description: "Política de privacidad de Unitec Applications.",

    notfound_eyebrow: "Error 404",
    notfound_title: "No encontramos esa página",
    notfound_text: "La dirección que buscás no existe o fue movida. Podés volver al inicio o escribirnos desde la sección de contacto.",
    notfound_cta: "Volver al inicio",
    notfound_meta_title: "Unitec Applications | Página no encontrada",
    notfound_meta_description: "La página que buscás no existe.",

    wa_message: "Hola, quisiera pedir un presupuesto para una app Android.",
    mail_subject_prefix: "Consulta desde el sitio",
    mail_type: "Tipo de proyecto",
    mail_from: "Nombre",
    mail_reply: "Email",
  },

  en: {
    nav_services: "Services",
    nav_process: "Process",
    nav_projects: "Projects",
    nav_about: "About",
    nav_contact: "Contact",
    nav_cta: "Request a quote",
    menu_open: "Open menu",
    menu_close: "Close menu",

    hero_eyebrow: "Android app development",
    hero_title_pre: "",
    hero_title_hl: "Custom",
    hero_title_post: " Android apps, built for your business",
    hero_lead: "We design, develop and publish mobile applications with modern technology, maintainable code and real support at every stage.",
    hero_cta_primary: "Request a quote",
    hero_cta_secondary: "View services",
    stat1_value: "Kotlin",
    stat1_label: "Android's official language",
    stat2_value: "Compose",
    stat2_label: "Modern, fluid interfaces",
    stat3_value: "Google Play",
    stat3_label: "Publishing and maintenance",

    services_eyebrow: "Services",
    services_title: "Everything you need to launch your app",
    svc1_title: "App development",
    svc1_text: "Native Android apps built with Kotlin and Jetpack Compose, tailored to your processes.",
    svc2_title: "Interface design",
    svc2_text: "Clear, consistent screens designed so any user can understand them.",
    svc3_title: "Backend and data",
    svc3_text: "Databases, users, sync and cloud services, with security built in from the start.",
    svc4_title: "Publishing and support",
    svc4_text: "We publish to Google Play and support you with updates and maintenance.",

    process_eyebrow: "How we work",
    process_title: "A clear process, with partial deliveries",
    step1_title: "Discovery",
    step1_text: "We understand your idea, your users and your goals.",
    step2_title: "Proposal",
    step2_text: "We define scope, timelines and a tailored budget.",
    step3_title: "Development",
    step3_text: "We build in stages and show you test versions throughout the process.",
    step4_title: "Publishing",
    step4_text: "We release the app on Google Play and leave everything documented.",

    projects_eyebrow: "Projects",
    projects_title: "What we are building",
    badge_app: "Android app",
    badge_dev: "In development",
    proj1_title: "My Private Driver",
    proj1_text: "An app to manage private trips, clients, rates, vehicle expenses and reports.",
    proj1_cover_alt: "Cover of the My Private Driver manual",
    proj1_show: "View screens",
    proj1_hide: "Hide screens",
    proj1_gallery_label: "My Private Driver screens",
    proj1_home_alt: "Home screen with a monthly summary and upcoming trips",
    proj1_trips_alt: "Calendar and trip management screen",
    proj1_rates_alt: "Rate calculator screen",
    proj1_expenses_alt: "Maintenance, expenses and fuel screen",
    proj1_home_cap: "Home",
    proj1_trips_cap: "Trips",
    proj1_rates_cap: "Rates",
    proj1_expenses_cap: "Car",
    proj1_link: "Download full manual (PDF)",
    proj2_title: "Medical appointment booking",
    proj2_text: "An app to book and manage appointments for a medical practice.",
    proj3_title: "Building management",
    proj3_text: "An app for managing residential buildings and condominiums.",

    about_eyebrow: "About",
    about_title: "Unitec Applications",
    about_text: "We are a team dedicated to software development. We value direct communication, deadlines we keep and code that lasts over time.",
    value1: "Direct communication with the people building your app",
    value2: "Clear budgets, no surprises",
    value3: "Organized, documented code",
    value4: "Support after launch",

    contact_eyebrow: "Contact",
    contact_title: "Tell us about your idea",
    contact_text: "We reply with an initial proposal at no cost. You can message us on WhatsApp or fill in the form.",
    contact_whatsapp: "Message on WhatsApp",
    contact_email_btn: "Send an email",
    contact_direct: "Direct email:",
    form_name: "Name",
    form_email: "Email",
    form_type: "Project type",
    type_app: "New Android app",
    type_maint: "Maintenance or improvements",
    type_publish: "Google Play publishing",
    type_other: "Other",
    form_msg: "Tell us about your project",
    form_submit: "Send inquiry",
    mail_help: "Your email app doesn't open?",
    mail_gmail: "Open in Gmail",
    mail_copy: "Copy email",
    mail_copied: "Copied!",
    form_sent: "We couldn't send the message from the site. You can send it from Gmail or copy the message.",
    form_copy: "Copy message",
    form_sending: "Sending...",
    form_ok: "Thank you! We received your inquiry and will get back to you shortly.",
    form_fail: "We couldn't send your inquiry. Please try again or use one of the alternatives.",
    form_note: "Your inquiry is sent to our email. We don't store anything on this site.",
    form_error: "Please review the highlighted fields before sending.",
    form_error_name: "Enter your name.",
    form_error_email: "Enter a valid email address.",
    form_error_message: "Tell us a little more: the message must be at least 10 characters long.",
    form_error_captcha: "Complete the security check before sending.",
    form_privacy_prefix: "By submitting, you accept the",
    form_privacy_link: "Privacy policy",

    footer_rights: "All rights reserved.",
    footer_privacy: "Privacy policy",
    footer_top: "Back to top",

    privacy_eyebrow: "Legal",
    privacy_title: "Privacy policy",
    privacy_intro: "At Unitec Applications, we respect your privacy and minimize data processing.",
    privacy_data_title: "Form data",
    privacy_data_text: "When you submit the form, your name, email and message are sent to a Unitec Applications service hosted on Cloudflare, which forwards them by email to our inbox. We do not store them in a database or on this site, and we use them only to reply to your inquiry.",
    privacy_providers_title: "Providers and third-party services",
    privacy_providers_text: "The site and the form delivery run on Cloudflare, which may log technical connection data (such as the IP address) for security and operational reasons. Fonts are loaded from Google Fonts, so your browser connects to Google's servers when the site opens.",
    privacy_spam_text: "To prevent automated spam, the form may use Cloudflare Turnstile, which checks that the sender is a person without asking you to solve puzzles, and may process technical data from your browser.",
    privacy_tracking_title: "Cookies and analytics",
    privacy_tracking_text: "We do not use analytics, advertising or third-party tracking cookies.",
    privacy_contact_title: "Contact",
    privacy_contact_text: "If you contact us by email or WhatsApp, we will use your data only to reply to your inquiry.",
    privacy_meta_title: "Unitec Applications | Privacy policy",
    privacy_meta_description: "Privacy policy for Unitec Applications.",

    notfound_eyebrow: "Error 404",
    notfound_title: "We couldn't find that page",
    notfound_text: "The address you are looking for doesn't exist or has moved. You can go back to the home page or write to us from the contact section.",
    notfound_cta: "Back to home",
    notfound_meta_title: "Unitec Applications | Page not found",
    notfound_meta_description: "The page you are looking for does not exist.",

    wa_message: "Hi, I would like a quote for an Android app.",
    mail_subject_prefix: "Inquiry from the website",
    mail_type: "Project type",
    mail_from: "Name",
    mail_reply: "Email",
  },
};

// ---------- Idioma ----------
const LANG_KEY = "unitec-lang";

function detectLang() {
  const saved = localStorage.getItem(LANG_KEY);
  if (saved && TEXTS[saved]) return saved;
  return (navigator.language || "es").toLowerCase().startsWith("en") ? "en" : "es";
}

function applyLang(lang) {
  const dict = TEXTS[lang];
  if (!dict) return;

  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) el.textContent = dict[key];
  });
  document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
    const key = el.getAttribute("data-i18n-alt");
    if (dict[key] !== undefined) el.setAttribute("alt", dict[key]);
  });
  document.querySelectorAll("[data-i18n-aria-label]").forEach((el) => {
    const key = el.getAttribute("data-i18n-aria-label");
    if (dict[key] !== undefined) el.setAttribute("aria-label", dict[key]);
  });

  document.getElementById("lang-select").value = lang;
  const metadata = getPageMetadata(lang);
  document.title = metadata.title;
  document.querySelector('meta[name="description"]')?.setAttribute("content", metadata.description);

  updateSocialMetadata(lang);
  updateOrganizationSchema();

  localStorage.setItem(LANG_KEY, lang);
  updateContactLinks(lang);
}

// Mantiene los metadatos de SEO alineados con el idioma elegido.
function updateSocialMetadata(lang) {
  const { title, description } = getPageMetadata(lang);

  ["og:title", "twitter:title"].forEach((property) => {
    const selector = property.startsWith("og:") ? `meta[property="${property}"]` : `meta[name="${property}"]`;
    document.querySelector(selector)?.setAttribute("content", title);
  });
  ["og:description", "twitter:description"].forEach((property) => {
    const selector = property.startsWith("og:") ? `meta[property="${property}"]` : `meta[name="${property}"]`;
    document.querySelector(selector)?.setAttribute("content", description);
  });
}

function getPageMetadata(lang) {
  const dict = TEXTS[lang];
  if (document.body.dataset.page === "privacy") {
    return {
      title: dict.privacy_meta_title,
      description: dict.privacy_meta_description,
    };
  }
  if (document.body.dataset.page === "notfound") {
    return {
      title: dict.notfound_meta_title,
      description: dict.notfound_meta_description,
    };
  }

  return lang === "en"
    ? {
      title: "Unitec Applications | Android App Development",
      description: "Unitec Applications builds custom Android apps for your business. No-cost quote.",
    }
    : {
      title: "Unitec Applications | Desarrollo de apps Android",
      description: "Unitec Applications desarrolla aplicaciones Android a medida para tu negocio. Presupuesto sin cargo.",
    };
}

// Genera los datos estructurados desde CONFIG para evitar datos de contacto desactualizados.
function updateOrganizationSchema() {
  const schema = document.getElementById("organization-schema");
  if (!schema) return;

  schema.textContent = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Organization",
    name: CONFIG.companyName,
    url: "https://unitecapplications.com/",
    email: CONFIG.contactEmail,
    telephone: `+${CONFIG.whatsappNumber}`,
  });
}

// ---------- Enlaces de contacto ----------
function updateContactLinks(lang) {
  const dict = TEXTS[lang];

  const wa = document.getElementById("whatsapp-link");
  if (wa) wa.href = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(dict.wa_message)}`;

  const emailLink = document.getElementById("email-link");
  if (emailLink) emailLink.href = `mailto:${CONFIG.contactEmail}?subject=${encodeURIComponent(dict.mail_subject_prefix)}`;

  const direct = document.getElementById("email-direct");
  if (direct) {
    direct.href = `mailto:${CONFIG.contactEmail}`;
    direct.textContent = CONFIG.contactEmail;
  }

  const gmail = document.getElementById("gmail-link");
  if (gmail) gmail.href = gmailUrl(dict.mail_subject_prefix, "");
}

function gmailUrl(subject, body) {
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(CONFIG.contactEmail)}` +
    `&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

// Copia texto al portapapeles y cambia un momento la etiqueta del botón.
async function copyText(text, button) {
  try {
    await navigator.clipboard.writeText(text);
  } catch (e) {
    const area = document.createElement("textarea");
    area.value = text;
    document.body.appendChild(area);
    area.select();
    document.execCommand("copy");
    area.remove();
  }
  const lang = document.documentElement.lang || "es";
  const original = button.textContent;
  button.textContent = TEXTS[lang].mail_copied;
  setTimeout(() => { button.textContent = original; }, 2000);
}

function setupCopyEmail() {
  const btn = document.getElementById("copy-email");
  if (btn) btn.addEventListener("click", () => copyText(CONFIG.contactEmail, btn));
}

// ---------- Formulario ----------
function setupForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;
  const status = document.getElementById("form-status");

  function setFieldError(field, message) {
    const error = document.getElementById(`${field.id}-error`);
    field.classList.toggle("error", Boolean(message));
    field.setAttribute("aria-invalid", String(Boolean(message)));
    error.textContent = message;
  }

  const submitBtn = form.querySelector('button[type="submit"]');
  const fallback = document.getElementById("form-fallback");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const lang = document.documentElement.lang || "es";
    const dict = TEXTS[lang];

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    // Validación accesible: cada campo informa su propio error.
    setFieldError(form.name, name ? "" : dict.form_error_name);
    setFieldError(form.email, /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? "" : dict.form_error_email);
    setFieldError(form.message, message.length >= 10 ? "" : dict.form_error_message);
    const valid = [form.name, form.email, form.message].every((field) => field.getAttribute("aria-invalid") === "false");

    if (!valid) {
      status.classList.remove("is-ok");
      status.textContent = dict.form_error;
      form.querySelector('[aria-invalid="true"]').focus();
      return;
    }

    // Verificación anti-spam (solo si hay clave de Turnstile configurada).
    if (CONFIG.turnstileSiteKey && !turnstileState.token) {
      status.classList.remove("is-ok");
      status.textContent = dict.form_error_captcha;
      return;
    }

    const typeSelect = form.type;
    const typeLabel = typeSelect.options[typeSelect.selectedIndex].text;

    // Respaldo manual (Gmail / copiar) por si el envío automático falla.
    const body = [
      `${dict.mail_from}: ${name}`,
      `${dict.mail_reply}: ${email}`,
      `${dict.mail_type}: ${typeLabel}`,
      "",
      message,
    ].join("\n");

    const subject = `${dict.mail_subject_prefix}: ${name}`;
    document.getElementById("form-gmail").href = gmailUrl(subject, body);
    const copyBtn = document.getElementById("form-copy");
    copyBtn.onclick = () => copyText(`${CONFIG.contactEmail}\n${subject}\n\n${body}`, copyBtn);

    fallback.hidden = true;
    status.classList.remove("is-ok");
    status.textContent = dict.form_sending;
    submitBtn.disabled = true;

    try {
      const response = await fetch(CONFIG.mailEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          type: typeSelect.value,
          message,
          website: form.website.value,
          lang,
          turnstileToken: turnstileState.token,
        }),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok || !result.ok) throw new Error(result.error || `http_${response.status}`);

      form.reset();
      status.classList.add("is-ok");
      status.textContent = dict.form_ok;
    } catch (error) {
      const captchaFailed = error.message === "captcha_failed";
      status.textContent = captchaFailed ? dict.form_error_captcha : dict.form_fail;
      fallback.hidden = captchaFailed;
    } finally {
      submitBtn.disabled = false;
      resetTurnstile();
    }
  });
}

// ---------- Anti-spam: Cloudflare Turnstile ----------
// Solo se activa si CONFIG.turnstileSiteKey tiene valor y existe el contenedor #turnstile-box.
const turnstileState = { widgetId: null, token: "", loading: false };

function renderTurnstile() {
  const box = document.getElementById("turnstile-box");
  if (!CONFIG.turnstileSiteKey || !box || !window.turnstile) return;

  if (turnstileState.widgetId !== null) {
    window.turnstile.remove(turnstileState.widgetId);
    turnstileState.widgetId = null;
  }
  turnstileState.token = "";
  turnstileState.widgetId = window.turnstile.render(box, {
    sitekey: CONFIG.turnstileSiteKey,
    language: document.documentElement.lang || "es",
    theme: "light",
    callback: (token) => { turnstileState.token = token; },
    "expired-callback": () => { turnstileState.token = ""; },
    "error-callback": () => { turnstileState.token = ""; },
  });
}

function resetTurnstile() {
  turnstileState.token = "";
  if (window.turnstile && turnstileState.widgetId !== null) {
    window.turnstile.reset(turnstileState.widgetId);
  }
}

function setupTurnstile() {
  const box = document.getElementById("turnstile-box");
  if (!CONFIG.turnstileSiteKey || !box || turnstileState.loading) return;
  turnstileState.loading = true;
  const script = document.createElement("script");
  script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
  script.async = true;
  script.onload = renderTurnstile;
  document.head.appendChild(script);
}

// ---------- Menú móvil ----------
function setupMobileMenu() {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.getElementById("primary-nav");
  if (!toggle || !nav) return;

  function closeMenu() {
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("data-i18n-aria-label", "menu_open");
    toggle.querySelector(".visually-hidden").setAttribute("data-i18n", "menu_open");
    toggle.querySelector(".visually-hidden").textContent = TEXTS[document.documentElement.lang].menu_open;
    toggle.setAttribute("aria-label", TEXTS[document.documentElement.lang].menu_open);
  }

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
    const key = isOpen ? "menu_close" : "menu_open";
    toggle.setAttribute("data-i18n-aria-label", key);
    toggle.querySelector(".visually-hidden").setAttribute("data-i18n", key);
    toggle.querySelector(".visually-hidden").textContent = TEXTS[document.documentElement.lang][key];
    toggle.setAttribute("aria-label", TEXTS[document.documentElement.lang][key]);
  });

  nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && nav.classList.contains("is-open")) {
      closeMenu();
      toggle.focus();
    }
  });
}

// ---------- Proyecto: pantallas desplegables ----------
function setupProjectPanel() {
  const toggle = document.querySelector(".project-cover-btn");
  if (!toggle) return;
  const panel = document.getElementById(toggle.getAttribute("aria-controls"));
  const label = toggle.querySelector(".project-cover-label");
  const card = toggle.closest(".project-featured");
  if (!panel || !label || !card) return;

  function render() {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    const key = isOpen ? "proj1_hide" : "proj1_show";
    panel.hidden = !isOpen;
    card.classList.toggle("is-open", isOpen);
    label.setAttribute("data-i18n", key);
    label.textContent = TEXTS[document.documentElement.lang][key];
  }

  toggle.addEventListener("click", () => {
    toggle.setAttribute("aria-expanded", String(toggle.getAttribute("aria-expanded") !== "true"));
    render();
  });
}

// ---------- Inicio ----------
document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const select = document.getElementById("lang-select");
  if (select) {
    select.addEventListener("change", (e) => {
      applyLang(e.target.value);
      renderTurnstile(); // vuelve a dibujar el widget en el idioma elegido
    });
  }

  applyLang(detectLang());
  setupForm();
  setupCopyEmail();
  setupMobileMenu();
  setupProjectPanel();
  setupTurnstile();
});
