# Mastro Sgombero - sito web

Sgomberi e ritiro ferro a Firenze ed Empoli. React + Vite + Tailwind, pubblicato con GitHub Pages.

## Cose da fare prima di andare online
1. **Modulo preventivi:** crea la chiave gratuita su https://web3forms.com e incollala in `src/components/Contact.tsx` (`WEB3FORMS_KEY`).
2. **Dominio:** quando lo hai, aggiungi `public/CNAME` con il dominio e cambia l'indirizzo in `index.html`, `public/sitemap.xml` e `public/robots.txt`.
3. **Dati dell'attività** (telefono, email, indirizzo, P.IVA): `src/data/site.ts`.
4. **Domande frequenti:** `src/data/faq.ts`.
5. **Privacy e cookie:** `public/privacy.html` e `public/cookie.html` sono testi base, da far verificare.

## Comandi
```
npm install
npm run dev      # anteprima su http://localhost:3000
npm run build    # crea la cartella dist
```
Il deploy parte da solo a ogni push su `main` (`.github/workflows/deploy.yml`).
