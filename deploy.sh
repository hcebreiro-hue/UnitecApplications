#!/usr/bin/env bash
# Publica el sitio en https://unitecapplications.com (Worker "sweet-bar-05ae").
# Uso: ./deploy.sh           valida, arma dist/, despliega y verifica
#      ./deploy.sh --dry-run valida y arma dist/ sin desplegar
set -euo pipefail

cd "$(dirname "$0")"
SITE_URL="https://unitecapplications.com"
ZIP_PATH="../unitec-applications-publicar.zip"
DRY_RUN=0
[ "${1:-}" = "--dry-run" ] && DRY_RUN=1

echo "1/5 Validando script.js..."
node --check script.js

if [ -n "$(git status --porcelain 2>/dev/null)" ]; then
  echo "Aviso: hay cambios sin commitear; se publicará el estado actual de los archivos."
fi

echo "2/5 Armando dist/ (solo archivos del sitio)..."
rm -rf dist
mkdir dist
cp index.html privacidad.html 404.html styles.css script.js robots.txt sitemap.xml _headers dist/
mkdir dist/assets
rsync -a --exclude 'LEEME.txt' --exclude '.DS_Store' assets/ dist/assets/

if [ "$DRY_RUN" = "1" ]; then
  echo "Dry run: dist/ listo, no se desplegó nada."
  exit 0
fi

echo "3/5 Desplegando con wrangler..."
npx --yes wrangler deploy

echo "4/5 Verificando producción..."
sleep 5
FAIL=0
for f in index.html styles.css script.js; do
  url="$SITE_URL/$f"
  [ "$f" = "index.html" ] && url="$SITE_URL/"
  if curl -fsS -H 'Cache-Control: no-cache' "$url" | cmp -s - "dist/$f"; then
    echo "  OK  $f"
  else
    echo "  DIFERENTE  $f (puede ser caché; reintentá en un minuto)"
    FAIL=1
  fi
done
code=$(curl -s -o /dev/null -w '%{http_code}' "$SITE_URL/ruta-que-no-existe")
[ "$code" = "404" ] && echo "  OK  página 404 ($code)" || { echo "  ERROR  404 devolvió $code"; FAIL=1; }

echo "5/5 Regenerando ZIP de respaldo para subida manual..."
rm -f "$ZIP_PATH"
(cd dist && zip -qr "../$ZIP_PATH" . -x '.DS_Store')
echo "  $ZIP_PATH"

[ "$FAIL" = "0" ] && echo "Publicación completada." || { echo "Publicado, pero hay verificaciones con aviso."; exit 1; }
