# azws.it – sito personale di Antonio Zuccon Ghiotto

Next.js 14 (App Router), Tailwind, nessun CMS: tutti i testi stanno in `src/app/lib/content.ts` (italiano e inglese).

- `/` inglese, `/it` italiano, `/projects` reindirizza a `/#projects`
- Form contatti: Formspree tramite `NEXT_PUBLIC_FORMSPREE_URL` (senza variabile apre l'email)

## Sviluppo
    npm install
    npm run dev

## Pubblicazione su Vercel
1. Push del repo su GitHub
2. vercel.com → Add New Project → importa il repo (preset Next.js)
3. Environment Variables: `NEXT_PUBLIC_FORMSPREE_URL` e `NEXT_PUBLIC_GA_ID` (ID di misurazione GA4, `G-XXXXXXX`)
4. Settings → Domains → aggiungi `azws.it` e `www.azws.it`, poi imposta i DNS indicati da Vercel presso il registrar

## Analytics e cookie
Google Analytics 4 si carica solo dopo il consenso dal banner (`src/app/components/Consent.tsx`). Senza `NEXT_PUBLIC_GA_ID` il banner compare ma non viene caricato nulla. Informativa: `/privacy` e `/it/privacy`.
