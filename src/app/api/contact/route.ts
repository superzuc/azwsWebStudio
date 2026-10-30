import { Resend } from "resend";
import { autoReplyEmail, notificationEmail, type Lead } from "@/app/lib/emails";

export const runtime = "nodejs";

const TO = process.env.CONTACT_TO || "webstudio.azws@gmail.com";
const FROM = process.env.RESEND_FROM || "Antonio Zuccon Ghiotto <hello@azws.it>";
const pathOf = (u: string) => {
  try {
    return new URL(u).pathname;
  } catch {
    return "";
  }
};
const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "invalid_body" }, { status: 400 });
  }

  // Honeypot: real people never fill this hidden field.
  if (typeof body.company === "string" && body.company.trim() !== "") {
    return Response.json({ ok: true });
  }

  const page = String(body.page ?? "").slice(0, 300);
  const lead: Lead = {
    name: String(body.name ?? "").trim().slice(0, 120),
    email: String(body.email ?? "").trim().slice(0, 200),
    message: String(body.message ?? "").trim().slice(0, 5000),
    page,
    lang: pathOf(page).startsWith("/it") ? "it" : "en",
  };

  if (!lead.name || !emailRe.test(lead.email) || lead.message.length < 2) {
    return Response.json({ error: "invalid_fields" }, { status: 422 });
  }

  const key = process.env.RESEND_API_KEY;
  if (!key) {
    console.error("contact: RESEND_API_KEY missing");
    return Response.json({ error: "not_configured" }, { status: 500 });
  }
  const resend = new Resend(key);

  // 1. Notifica a me: se fallisce, il messaggio è perso, quindi è un errore.
  const note = notificationEmail(lead);
  const sent = await resend.emails.send({
    from: FROM,
    to: TO,
    replyTo: lead.email,
    subject: note.subject,
    html: note.html,
    text: note.text,
  });
  if (sent.error) {
    console.error("contact: notification failed", sent.error);
    return Response.json({ error: "send_failed" }, { status: 502 });
  }

  // 2. Risposta automatica: se fallisce, il messaggio mi è comunque arrivato.
  const reply = autoReplyEmail(lead);
  const auto = await resend.emails.send({
    from: FROM,
    to: lead.email,
    replyTo: TO,
    subject: reply.subject,
    html: reply.html,
    text: reply.text,
  });
  if (auto.error) console.error("contact: auto-reply failed", auto.error);

  return Response.json({ ok: true });
}
