import { contact, type Lang } from "./content";

export type Lead = { name: string; email: string; message: string; page: string; lang: Lang };

const SITE = "https://azws.it";
const c = {
  paper: "#f2f4f6",
  panel: "#ffffff",
  ink: "#101a2e",
  muted: "#586276",
  line: "#d5dae1",
  variant: "#2747f5",
};
const font = "-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif";

export const esc = (s: string) =>
  s.replace(/[&<>"']/g, (ch) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[ch]!);

const nl2br = (s: string) => esc(s).replace(/\r?\n/g, "<br>");

function layout(preheader: string, inner: string) {
  return `<!doctype html>
<html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="color-scheme" content="light only"></head>
<body style="margin:0;padding:0;background:${c.paper};">
<div style="display:none;max-height:0;overflow:hidden;opacity:0;">${esc(preheader)}</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${c.paper};">
  <tr><td align="center" style="padding:32px 16px;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;">
      <tr><td style="padding:0 4px 20px;">
        <a href="${SITE}" style="text-decoration:none;color:${c.ink};font:700 16px ${font};">
          <img src="${SITE}/email-logo.png" width="28" height="28" alt="" style="vertical-align:middle;border-radius:6px;margin-right:10px;">Antonio Zuccon Ghiotto
        </a>
      </td></tr>
      <tr><td style="background:${c.panel};border:1px solid ${c.line};border-radius:16px;padding:32px;font:16px/1.6 ${font};color:${c.ink};">
        ${inner}
      </td></tr>
      <tr><td style="padding:20px 4px 0;font:12px/1.6 ${font};color:${c.muted};">
        Antonio Zuccon Ghiotto · <a href="${SITE}" style="color:${c.muted};">azws.it</a> · P.IVA ${contact.vat}
      </td></tr>
    </table>
  </td></tr>
</table>
</body></html>`;
}

const quote = (message: string) =>
  `<div style="margin:16px 0;padding:16px 20px;border-left:3px solid ${c.variant};background:${c.paper};border-radius:0 10px 10px 0;color:${c.ink};">${nl2br(message)}</div>`;

const button = (href: string, label: string) =>
  `<a href="${href}" style="display:inline-block;background:${c.variant};color:#ffffff;text-decoration:none;font:600 15px ${font};padding:12px 22px;border-radius:999px;">${esc(label)}</a>`;

/* ---------- Notifica a me ---------- */
export function notificationEmail(l: Lead) {
  const subject = `Nuovo messaggio da azws.it – ${l.name}`;
  const html = layout(
    `${l.name}: ${l.message.slice(0, 90)}`,
    `<p style="margin:0 0 4px;font-size:13px;color:${c.muted};">Nuovo messaggio dal sito (${l.lang.toUpperCase()})</p>
     <h1 style="margin:0;font-size:22px;line-height:1.3;">${esc(l.name)}</h1>
     <p style="margin:4px 0 0;"><a href="mailto:${esc(l.email)}" style="color:${c.variant};">${esc(l.email)}</a></p>
     ${quote(l.message)}
     <p style="margin:24px 0 0;">${button(`mailto:${encodeURIComponent(l.email)}?subject=${encodeURIComponent("Re: il tuo messaggio su azws.it")}`, "Rispondi")}</p>
     <p style="margin:20px 0 0;font-size:12px;color:${c.muted};">Inviato da ${esc(l.page)}. Puoi anche rispondere direttamente a questa mail.</p>`,
  );
  const text = `Nuovo messaggio da azws.it\n\n${l.name} <${l.email}>\n\n${l.message}\n\nPagina: ${l.page}`;
  return { subject, html, text };
}

/* ---------- Risposta automatica a chi scrive ---------- */
const auto = {
  en: {
    subject: "Thanks for your message",
    preheader: "I've got your message and I'll reply within one working day.",
    hi: (n: string) => `Hi ${n},`,
    body: "thanks for writing. I've received your message and I'll get back to you within one working day.",
    copy: "Here's a copy of what you sent:",
    meanwhile: "In the meantime you can look at my work and side projects on the site.",
    cta: "See my work",
    sign: "Front-end developer & CRO specialist",
    note: "This is an automatic confirmation. Just reply to this email if you want to add anything.",
  },
  it: {
    subject: "Grazie per il tuo messaggio",
    preheader: "Ho ricevuto il tuo messaggio e ti rispondo entro un giorno lavorativo.",
    hi: (n: string) => `Ciao ${n},`,
    body: "grazie per avermi scritto. Ho ricevuto il tuo messaggio e ti rispondo entro un giorno lavorativo.",
    copy: "Ecco una copia di quello che mi hai inviato:",
    meanwhile: "Nel frattempo puoi dare un'occhiata ai miei lavori e progetti sul sito.",
    cta: "Guarda i lavori",
    sign: "Front-end developer e CRO specialist",
    note: "Questa è una conferma automatica. Se vuoi aggiungere qualcosa, rispondi pure a questa mail.",
  },
};

export function autoReplyEmail(l: Lead) {
  const t = auto[l.lang];
  const first = l.name.split(/\s+/)[0] || l.name;
  const home = l.lang === "it" ? `${SITE}/it#work` : `${SITE}/#work`;
  const html = layout(
    t.preheader,
    `<p style="margin:0 0 12px;">${esc(t.hi(first))}</p>
     <p style="margin:0 0 16px;">${t.body}</p>
     <p style="margin:0;font-size:14px;color:${c.muted};">${t.copy}</p>
     ${quote(l.message)}
     <p style="margin:16px 0 20px;">${t.meanwhile}</p>
     <p style="margin:0 0 28px;">${button(home, t.cta)}</p>
     <p style="margin:0;">Antonio Zuccon Ghiotto<br><span style="color:${c.muted};font-size:14px;">${t.sign}</span><br>
       <a href="${contact.linkedin}" style="color:${c.variant};font-size:14px;">LinkedIn</a> &nbsp;·&nbsp; <a href="${contact.github}" style="color:${c.variant};font-size:14px;">GitHub</a></p>
     <p style="margin:24px 0 0;font-size:12px;color:${c.muted};">${t.note}</p>`,
  );
  const text = `${t.hi(first)}\n\n${t.body}\n\n${t.copy}\n\n${l.message}\n\n${t.meanwhile}\n${home}\n\nAntonio Zuccon Ghiotto\n${t.sign}\n${contact.linkedin}\n\n${t.note}`;
  return { subject: t.subject, html, text };
}
