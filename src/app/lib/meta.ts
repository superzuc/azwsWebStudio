import type { Metadata, Viewport } from "next";
import { content, type Lang } from "./content";

export function buildMetadata(lang: Lang): Metadata {
  const c = content[lang].meta;
  const url = lang === "en" ? "/" : "/it";
  return {
    metadataBase: new URL("https://azws.it"),
    title: c.title,
    description: c.description,
    authors: [{ name: "Antonio Zuccon Ghiotto" }],
    alternates: { canonical: url, languages: { en: "/", it: "/it", "x-default": "/" } },
    openGraph: { title: c.title, description: c.description, url, siteName: "Antonio Zuccon Ghiotto", locale: lang === "it" ? "it_IT" : "en_GB", type: "website" },
  };
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f2f4f6" },
    { media: "(prefers-color-scheme: dark)", color: "#0e1524" },
  ],
};
