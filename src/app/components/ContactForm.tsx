"use client";

import { useState } from "react";
import type { Content } from "../lib/content";

type Props = { form: Content["contactSection"]["form"]; email: string };
type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm({ form, email }: Props) {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formEl = e.currentTarget;
    const data = Object.fromEntries(new FormData(formEl));

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, page: window.location.href }),
      });
      setStatus(res.ok ? "sent" : "error");
      if (res.ok) {
        formEl.reset();
        window.gtag?.("event", "generate_lead", { method: "contact_form" });
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div role="status" className="rounded-2xl border border-line bg-panel p-8">
        <p className="font-display text-2xl font-bold text-win">{form.sent}</p>
        <p className="mt-2 text-muted">{form.sentBody}</p>
      </div>
    );
  }

  const field = "mt-2 w-full rounded-xl border border-line bg-panel px-4 py-3 text-ink placeholder:text-control focus:border-variant focus:outline-none";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <label className="block">
        <span className="text-sm font-semibold">{form.name}</span>
        <input name="name" type="text" required autoComplete="name" className={field} />
      </label>
      <label className="block">
        <span className="text-sm font-semibold">{form.email}</span>
        <input name="email" type="email" required autoComplete="email" className={field} />
      </label>
      <label className="block">
        <span className="text-sm font-semibold">{form.message}</span>
        <textarea name="message" required rows={5} className={field} />
      </label>
      <input type="text" name="company" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
      {status === "error" && (
        <p role="alert" className="text-sm font-semibold text-red-600 dark:text-red-400">
          {form.error}{" "}
          <a href={`mailto:${email}`} className="underline">{email}</a>
        </p>
      )}
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-full bg-variant px-6 py-3 font-semibold text-white transition-colors hover:bg-ink disabled:opacity-60 dark:text-paper sm:w-auto"
      >
        {status === "sending" ? form.sending : form.send}
      </button>
    </form>
  );
}
