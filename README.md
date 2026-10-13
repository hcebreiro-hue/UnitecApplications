# Unitec Applications

Sitio web estático bilingüe (español e inglés) para los servicios de desarrollo de aplicaciones Android de Unitec Applications.

## Abrir el sitio localmente

Podés abrir `index.html` directamente en el navegador. Para una vista previa con recarga automática en VS Code:

1. Instalá la extensión **Live Server** de Ritwick Dey desde la vista **Extensiones** (`⇧⌘X`) si todavía no la tenés.
2. Abrí la carpeta del proyecto en VS Code.
3. Abrí `index.html` y elegí **Open with Live Server** desde el menú contextual, o usá el botón **Go Live**.
4. La dirección local habitual es `http://127.0.0.1:5500/index.html` (el puerto puede cambiar si está ocupado).

## Configurar WhatsApp y email

Editá el objeto `CONFIG` al inicio de `script.js`:

```js
const CONFIG = {
  whatsappNumber: "5491166391260",
  contactEmail: "contacto@unitecapplications.com",
  mailEndpoint: "https://unitec-mail.hcebreiro.workers.dev",
  turnstileSiteKey: "",
  companyName: "Unitec Applications",
};
```

- `whatsappNumber`: número completo con código de país y área, sin `+`, espacios ni guiones.
- `contactEmail`: email de contacto utilizado en los enlaces y como respaldo (Gmail / copiar).
- `mailEndpoint`: URL del Worker `unitec-mail` que envía el formulario (código en `worker/unitec-mail.js`).
- `turnstileSiteKey`: clave pública de Cloudflare Turnstile. Vacía = sin verificación anti-spam.
- `companyName`: nombre utilizado en los datos estructurados de SEO.

## Worker del formulario (`worker/unitec-mail.js`)

Se pega en el Worker `unitec-mail` de Cloudflare. Configuración:

- Binding **Servicio de correo electrónico** con nombre `EMAIL`.
- Variable `TO`: casilla que recibe las consultas.
- Secreto opcional `TURNSTILE_SECRET`: si existe, el Worker exige y valida el token de Turnstile.
- Variable opcional `AUTOREPLY` = `1`: envía un aviso de recepción al cliente (requiere plan Workers Paid).

## Archivos de publicación

- `_headers`: cabeceras de seguridad (CSP, nosniff, etc.) y caché de `/assets/*`. Si agregás un dominio externo (analítica, otro Worker), sumalo a la CSP.
- `404.html`: página de error propia. Cloudflare la usa solo con `not_found_handling = "404-page"` en la configuración de assets del Worker.
- Al publicar con **Direct Upload** subí solo el sitio: `index.html`, `privacidad.html`, `404.html`, `styles.css`, `script.js`, `robots.txt`, `sitemap.xml`, `_headers` y `assets/`. No subas `worker/`, `Logo/` ni `README.md`.

El JSON-LD de tipo `Organization` se genera desde este bloque al cargar la página, por lo que email, teléfono y nombre quedan sincronizados.

## Agregar o modificar textos bilingües

1. En `script.js`, agregá la misma clave dentro de `TEXTS.es` y `TEXTS.en`.
2. En el HTML, usá esa clave mediante `data-i18n="mi_clave"`.
3. Para una etiqueta accesible que no se ve, usá `data-i18n-aria-label="mi_clave"`.
4. Probá el selector **ES / EN** para confirmar que no queda texto visible sin traducir.

Ejemplo:

```html
<p data-i18n="example_text">Texto en español</p>
```

```js
es: { example_text: "Texto en español" },
en: { example_text: "Text in English" },
```

## Publicar en Cloudflare Pages

1. Subí esta carpeta a un repositorio Git remoto (GitHub, GitLab o similar).
2. En Cloudflare Dashboard, entrá a **Workers & Pages** y elegí **Create application** → **Pages** → **Connect to Git**.
3. Seleccioná el repositorio y la rama de publicación.
4. Usá estas opciones de compilación:
   - **Framework preset:** `None`.
   - **Build command:** dejalo vacío.
   - **Build output directory:** `/`.
5. Confirmá el despliegue.
6. En **Custom domains**, asociá `unitecapplications.com` y verificá que el DNS apunte a Cloudflare.
7. Después de publicar, comprobá que estén disponibles `https://unitecapplications.com/robots.txt` y `https://unitecapplications.com/sitemap.xml`.

## Archivos principales

- `index.html`: página principal.
- `privacidad.html`: política de privacidad bilingüe.
- `styles.css`: estilos responsivos y accesibilidad visual.
- `script.js`: idiomas, enlaces de contacto, menú móvil, validación del formulario y SEO dinámico.
- `assets/og-image.png`: imagen de 1200×630 para compartir en redes.