/* ==========================================================
   Unitec Applications | Idioma, contacto y utilidades
   ========================================================== */

// ---------- CONFIGURACIÓN: reemplazá estos valores ----------
const CONFIG = {
  whatsappNumber: "5491166391260",          // Código de país + área + número, sin + ni espacios (número de Unitec)
  contactEmail: "contacto@unitecapplications.com",
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

    hero_eyebrow: "Desarrollo de apps Android",
    hero_title: "Apps Android a medida, pensadas para tu negocio",
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
    badge_dev: "En desarrollo",
    proj1_title: "Proyecto 1",
    proj1_text: "Descripción breve del proyecto. Reemplazá este texto con los detalles reales.",
    proj2_title: "Proyecto 2",
    proj2_text: "Descripción breve del proyecto. Reemplazá este texto con los detalles reales.",
    proj3_title: "Proyecto 3",
    proj3_text: "Descripción breve del proyecto. Reemplazá este texto con los detalles reales.",

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
    form_note: "Al enviar, se abre tu programa de correo con los datos completados. No guardamos nada en este sitio.",
    form_error: "Completá los campos obligatorios con datos válidos.",

    footer_rights: "Todos los derechos reservados.",
    footer_top: "Volver arriba",

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

    hero_eyebrow: "Android app development",
    hero_title: "Custom Android apps, built for your business",
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
    badge_dev: "In development",
    proj1_title: "Project 1",
    proj1_text: "Short project description. Replace this text with the real details.",
    proj2_title: "Project 2",
    proj2_text: "Short project description. Replace this text with the real details.",
    proj3_title: "Project 3",
    proj3_text: "Short project description. Replace this text with the real details.",

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
    form_note: "Submitting opens your email app with the details filled in. We don't store anything on this site.",
    form_error: "Please fill in the required fields with valid data.",

    footer_rights: "All rights reserved.",
    footer_top: "Back to top",

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

  document.getElementById("lang-select").value = lang;
  document.title = lang === "en"
    ? "Unitec Applications | Android App Development"
    : "Unitec Applications | Desarrollo de apps Android";
  document.querySelector('meta[name="description"]').setAttribute(
    "content",
    lang === "en"
      ? "Unitec Applications builds custom Android apps for your business. No-cost quote."
      : "Unitec Applications desarrolla aplicaciones Android a medida para tu negocio. Presupuesto sin cargo."
  );

  localStorage.setItem(LANG_KEY, lang);
  updateContactLinks(lang);
}

// ---------- Enlaces de contacto ----------
function updateContactLinks(lang) {
  const dict = TEXTS[lang];

  const wa = document.getElementById("whatsapp-link");
  wa.href = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(dict.wa_message)}`;

  const emailLink = document.getElementById("email-link");
  emailLink.href = `mailto:${CONFIG.contactEmail}?subject=${encodeURIComponent(dict.mail_subject_prefix)}`;

  const direct = document.getElementById("email-direct");
  direct.href = `mailto:${CONFIG.contactEmail}`;
  direct.textContent = CONFIG.contactEmail;
}

// ---------- Formulario ----------
function setupForm() {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const lang = document.documentElement.lang || "es";
    const dict = TEXTS[lang];

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    // Validación básica
    let valid = true;
    [form.name, form.email, form.message].forEach((field) => field.classList.remove("error"));

    if (!name) { form.name.classList.add("error"); valid = false; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { form.email.classList.add("error"); valid = false; }
    if (message.length < 10) { form.message.classList.add("error"); valid = false; }

    if (!valid) {
      alert(dict.form_error);
      return;
    }

    const typeSelect = form.type;
    const typeLabel = typeSelect.options[typeSelect.selectedIndex].text;

    const body = [
      `${dict.mail_from}: ${name}`,
      `${dict.mail_reply}: ${email}`,
      `${dict.mail_type}: ${typeLabel}`,
      "",
      message,
    ].join("\n");

    const mailto =
      `mailto:${CONFIG.contactEmail}` +
      `?subject=${encodeURIComponent(`${dict.mail_subject_prefix}: ${name}`)}` +
      `&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
  });
}

// ---------- Inicio ----------
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();

  const select = document.getElementById("lang-select");
  select.addEventListener("change", (e) => applyLang(e.target.value));

  applyLang(detectLang());
  setupForm();
});
