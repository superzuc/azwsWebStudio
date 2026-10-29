import { content, contact, type Lang } from "../lib/content";
import { ConsentSettingsButton } from "./Consent";

export default function Footer({ lang }: { lang: Lang }) {
  const f = content[lang].footer;
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-page flex-col gap-3 px-4 py-8 text-sm text-muted sm:flex-row sm:flex-wrap sm:justify-between sm:px-8">
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          <p>© {new Date().getFullYear()} Antonio Zuccon Ghiotto</p>
          <a href={f.privacyHref} className="hover:text-ink hover:underline">{f.privacy}</a>
          <ConsentSettingsButton label={f.cookies} />
        </div>
        <p>{f.vat} {contact.vat} – {f.legal}: {contact.legal}</p>
      </div>
    </footer>
  );
}
