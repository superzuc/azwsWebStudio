"use client";

import { useEffect, useState } from "react";
import type { Lang } from "../lib/content";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const KEY = "azws-consent-v1";
type Choice = "granted" | "denied";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function readChoice(): Choice | null {
  try {
    const v = localStorage.getItem(KEY);
    return v === "granted" || v === "denied" ? v : null;
  } catch {
    return null;
  }
}

function loadAnalytics() {
  if (!GA_ID || window.gtag) return;
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer.push(arguments);
  };
  window.gtag("consent", "default", {
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    analytics_storage: "granted",
  });
  window.gtag("js", new Date());
  window.gtag("config", GA_ID, { anonymize_ip: true, allow_google_signals: false, allow_ad_personalization_signals: false });
  const s = document.createElement("script");
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(s);
}

function clearAnalyticsCookies() {
  document.cookie.split(";").forEach((c) => {
    const name = c.split("=")[0].trim();
    if (name.startsWith("_ga")) {
      const host = location.hostname.replace(/^www\./, "");
      for (const domain of ["", `; domain=.${host}`, `; domain=${host}`]) {
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${domain}`;
      }
    }
  });
}

const copy = {
  en: {
    text: "I use Google Analytics to see how visitors use this site, only if you allow it. No advertising, no profiling.",
    accept: "Allow",
    reject: "Reject",
    more: "Privacy & cookies",
    href: "/privacy",
  },
  it: {
    text: "Uso Google Analytics per capire come viene usato il sito, solo se lo permetti. Niente pubblicità, niente profilazione.",
    accept: "Accetta",
    reject: "Rifiuta",
    more: "Privacy e cookie",
    href: "/it/privacy",
  },
};

export const OPEN_EVENT = "azws:open-consent";
//for new consent mechanism
export default function Consent({ lang }: { lang: Lang }) {
  const [open, setOpen] = useState(false);
  const t = copy[lang];

  useEffect(() => {
    const choice = readChoice();
    if (choice === "granted") loadAnalytics();
    if (!choice) setOpen(true);
    const reopen = () => setOpen(true);
    window.addEventListener(OPEN_EVENT, reopen);
    return () => window.removeEventListener(OPEN_EVENT, reopen);
  }, []);

  function decide(choice: Choice) {
    try {
      localStorage.setItem(KEY, choice);
    } catch {}
    if (choice === "granted") {
      loadAnalytics();
      window.gtag?.("consent", "update", { analytics_storage: "granted" });
    } else {
      window.gtag?.("consent", "update", { analytics_storage: "denied" });
      clearAnalyticsCookies();
    }
    setOpen(false);
  }

  if (!open) return null;

  return (
    <div role="dialog" aria-live="polite" aria-label={t.more} className="fixed inset-x-0 bottom-0 z-50 p-4 sm:bottom-4 sm:left-auto sm:right-4 sm:max-w-md">
      <div className="rounded-2xl border border-line bg-panel p-5 shadow-[0_12px_40px_-12px_rgba(16,26,46,0.35)]">
        <p className="text-sm leading-relaxed text-ink">
          {t.text}{" "}
          <a href={t.href} className="font-semibold text-variant underline underline-offset-2">
            {t.more}
          </a>
        </p>
        <div className="mt-4 grid grid-cols-2 gap-2">
          <button onClick={() => decide("denied")} className="rounded-full border border-line px-4 py-2.5 text-sm font-semibold text-ink hover:border-ink">
            {t.reject}
          </button>
          <button onClick={() => decide("granted")} className="rounded-full border border-line px-4 py-2.5 text-sm font-semibold text-ink hover:border-ink">
            {t.accept}
          </button>
        </div>
      </div>
    </div>
  );
}

export function ConsentSettingsButton({ label }: { label: string }) {
  return (
    <button type="button" onClick={() => window.dispatchEvent(new Event(OPEN_EVENT))} className="hover:text-ink hover:underline">
      {label}
    </button>
  );
}
