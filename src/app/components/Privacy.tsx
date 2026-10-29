import { contact, type Lang } from "../lib/content";
import Footer from "./Footer";

const updated = { it: "29 ottobre 2026", en: "29 October 2026" };

const sections: Record<Lang, { title: string; back: string; intro: string; blocks: { h: string; p: string[] }[] }> = {
  it: {
    title: "Privacy e cookie",
    back: "Torna al sito",
    intro: "Questa informativa spiega quali dati raccoglie questo sito, perché e quali sono i tuoi diritti (Regolamento UE 2016/679, GDPR).",
    blocks: [
      {
        h: "Titolare del trattamento",
        p: [`Antonio Zuccon Ghiotto, P.IVA ${contact.vat}, ${contact.legal}. Email: ${contact.email}.`],
      },
      {
        h: "Modulo di contatto",
        p: [
          "Quando mi scrivi dal modulo raccolgo nome, email e messaggio, solo per risponderti. La base giuridica è la tua richiesta (art. 6.1.b GDPR).",
          "Il modulo è gestito da Formspree (Formspree Inc., USA), che trasferisce i dati negli Stati Uniti con le garanzie previste dal GDPR (EU-US Data Privacy Framework o clausole contrattuali standard). Conservo i messaggi per il tempo necessario a gestire la richiesta e al massimo 24 mesi.",
        ],
      },
      {
        h: "Cookie tecnici",
        p: ["Il sito salva nel tuo browser solo la tua scelta sul banner dei cookie. Non serve consenso perché è necessario al funzionamento del sito."],
      },
      {
        h: "Google Analytics (solo con il tuo consenso)",
        p: [
          "Se clicchi \"Accetta analytics\", il sito carica Google Analytics 4 (Google Ireland Ltd.) per contare le visite e capire quali sezioni vengono lette. Indirizzo IP anonimizzato, nessun uso pubblicitario, nessuna condivisione con altri prodotti Google, segnali Google disattivati.",
          "Cookie usati: _ga e _ga_<ID>, durata massima 14 mesi. La base giuridica è il consenso (art. 6.1.a GDPR), che puoi ritirare in ogni momento da \"Preferenze cookie\" in fondo alla pagina. Se rifiuti, Google Analytics non viene caricato.",
        ],
      },
      {
        h: "I tuoi diritti",
        p: [
          `Puoi chiedere accesso, rettifica, cancellazione, limitazione, portabilità dei dati o opporti al trattamento scrivendo a ${contact.email}. Hai anche il diritto di presentare reclamo al Garante per la protezione dei dati personali (garanteprivacy.it).`,
        ],
      },
    ],
  },
  en: {
    title: "Privacy & cookies",
    back: "Back to the site",
    intro: "This notice explains what data this site collects, why, and what your rights are under the EU General Data Protection Regulation (GDPR).",
    blocks: [
      {
        h: "Data controller",
        p: [`Antonio Zuccon Ghiotto, VAT ${contact.vat}, ${contact.legal}, Italy. Email: ${contact.email}.`],
      },
      {
        h: "Contact form",
        p: [
          "When you write to me through the form I collect your name, email and message, only to reply. The legal basis is your request (Art. 6(1)(b) GDPR).",
          "The form is run by Formspree (Formspree Inc., USA), which transfers data to the United States under GDPR safeguards (EU-US Data Privacy Framework or standard contractual clauses). I keep messages as long as needed to handle your request, and no longer than 24 months.",
        ],
      },
      {
        h: "Technical storage",
        p: ["The site only stores your cookie banner choice in your browser. This is strictly necessary and needs no consent."],
      },
      {
        h: "Google Analytics (only with your consent)",
        p: [
          "If you click \"Allow analytics\", the site loads Google Analytics 4 (Google Ireland Ltd.) to count visits and see which sections are read. IP addresses are anonymized, there is no advertising use, no sharing with other Google products and Google signals are off.",
          "Cookies used: _ga and _ga_<ID>, lasting up to 14 months. The legal basis is your consent (Art. 6(1)(a) GDPR), which you can withdraw at any time from \"Cookie settings\" at the bottom of the page. If you reject, Google Analytics is never loaded.",
        ],
      },
      {
        h: "Your rights",
        p: [
          `You can ask for access, correction, deletion, restriction or portability of your data, or object to processing, by writing to ${contact.email}. You can also lodge a complaint with the Italian data protection authority (garanteprivacy.it).`,
        ],
      },
    ],
  },
};

export default function Privacy({ lang }: { lang: Lang }) {
  const c = sections[lang];
  return (
    <>
      <main className="mx-auto max-w-page px-4 py-12 sm:px-8 sm:py-20">
        <a href={lang === "en" ? "/" : "/it"} className="text-sm font-semibold text-variant hover:underline">
          {c.back}
        </a>
        <h1 className="mt-6 font-display text-4xl font-extrabold tracking-[-0.03em] sm:text-6xl">{c.title}</h1>
        <p className="mt-2 text-sm text-muted">{lang === "it" ? "Aggiornata il" : "Last updated"} {updated[lang]}</p>
        <div className="mt-10 max-w-[68ch] space-y-10">
          <p className="text-lg leading-relaxed">{c.intro}</p>
          {c.blocks.map((b) => (
            <section key={b.h}>
              <h2 className="font-display text-2xl font-bold">{b.h}</h2>
              {b.p.map((t) => (
                <p key={t} className="mt-3 leading-relaxed text-muted">{t}</p>
              ))}
            </section>
          ))}
        </div>
      </main>
      <Footer lang={lang} />
    </>
  );
}
