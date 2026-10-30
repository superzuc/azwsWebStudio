import { Resend } from "resend";
import { esc } from "@/app/lib/emails";

export const runtime = "nodejs";

// Inoltra a Gmail ogni mail ricevuta su hello@azws.it (Resend Receiving → webhook "email.received").
const FORWARD_TO = process.env.FORWARD_TO || process.env.CONTACT_TO || "webstudio.azws@gmail.com";
const FROM = process.env.RESEND_FROM || "Antonio Zuccon Ghiotto <hello@azws.it>";

export async function POST(req: Request) {
  const key = process.env.RESEND_API_KEY;
  const secret = process.env.RESEND_WEBHOOK_SECRET;
  if (!key || !secret) {
    console.error("inbound: RESEND_API_KEY or RESEND_WEBHOOK_SECRET missing");
    return Response.json({ error: "not_configured" }, { status: 500 });
  }

  const id = req.headers.get("svix-id");
  const timestamp = req.headers.get("svix-timestamp");
  const signature = req.headers.get("svix-signature");
  if (!id || !timestamp || !signature) return Response.json({ error: "missing_headers" }, { status: 400 });

  const resend = new Resend(key);
  const payload = await req.text(); // il body grezzo serve per verificare la firma

  let event;
  try {
    event = resend.webhooks.verify({ payload, headers: { id, timestamp, signature }, webhookSecret: secret });
  } catch {
    return Response.json({ error: "invalid_signature" }, { status: 401 });
  }

  if (event.type !== "email.received") return Response.json({ ok: true, skipped: event.type });

  const emailId = event.data.email_id;
  const { data: mail, error } = await resend.emails.receiving.get(emailId);
  if (error || !mail) {
    console.error("inbound: cannot fetch email", error);
    return Response.json({ error: "fetch_failed" }, { status: 502 });
  }

  // Allegati: Resend li scarica dai link firmati
  const { data: list } = await resend.emails.receiving.attachments.list({ emailId });
  const attachments = (list?.data ?? []).map((a) => ({
    filename: a.filename || "allegato",
    path: a.download_url,
    contentType: a.content_type,
  }));

  const from = mail.from;
  const subject = mail.subject || "(senza oggetto)";
  const header = `<div style="font:13px/1.5 -apple-system,Segoe UI,Arial,sans-serif;color:#586276;border-bottom:1px solid #d5dae1;padding:0 0 12px;margin:0 0 16px">
    Ricevuta su <b>${esc(mail.to.join(", "))}</b><br>Da: <b>${esc(from)}</b><br>Oggetto: ${esc(subject)}</div>`;
  const body = mail.html ?? `<pre style="white-space:pre-wrap;font:15px/1.5 sans-serif">${esc(mail.text ?? "")}</pre>`;

  const sent = await resend.emails.send({
    from: FROM,
    to: FORWARD_TO,
    replyTo: mail.reply_to?.length ? mail.reply_to : from,
    subject: `[azws.it] ${subject}`,
    html: header + body,
    text: `Ricevuta su ${mail.to.join(", ")}\nDa: ${from}\nOggetto: ${subject}\n\n${mail.text ?? ""}`,
    attachments: attachments.length ? attachments : undefined,
  });
  if (sent.error) {
    console.error("inbound: forward failed", sent.error);
    return Response.json({ error: "forward_failed" }, { status: 502 });
  }

  return Response.json({ ok: true });
}
