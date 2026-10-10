# Coolify CI/CD Test

Eine kleine statisch exportierte Next.js-Website zum Testen einer CI/CD-Pipeline.

## Lokal starten

```bash
npm install
npm run dev
```

Die Seite ist anschließend unter `http://localhost:3000` erreichbar.

## Produktions-Build

```bash
npm run build
```

Next.js schreibt den statischen Export nach `out/`. Das enthaltene `Dockerfile`
baut die App und liefert sie anschließend über nginx auf Port `80` aus.
