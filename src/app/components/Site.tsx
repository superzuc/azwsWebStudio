import { content, contact, type Lang } from "../lib/content";
import Hero from "./Hero";
import ContactForm from "./ContactForm";

function GitHubMark() {
  return (
    <svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
    </svg>
  );
}

function Tags({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 flex flex-wrap gap-2">
      {items.map((t) => (
        <li key={t} className="rounded-full border border-line px-3 py-1 text-sm text-muted">
          {t}
        </li>
      ))}
    </ul>
  );
}

function Section({ id, title, intro, children }: { id: string; title: string; intro?: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-page scroll-mt-20 px-4 py-16 sm:px-8 sm:py-24">
      <div className="grid gap-10 lg:grid-cols-[16rem_minmax(0,1fr)] lg:gap-16">
        <div>
          <h2 className="font-display text-3xl font-bold tracking-[-0.02em] sm:text-4xl">{title}</h2>
          {intro && <p className="mt-4 max-w-[40ch] leading-relaxed text-muted">{intro}</p>}
        </div>
        <div>{children}</div>
      </div>
    </section>
  );
}

export default function Site({ lang }: { lang: Lang }) {
  const c = content[lang];
  const year = new Date().getFullYear();

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-panel focus:px-4 focus:py-2"
      >
        {lang === "it" ? "Vai al contenuto" : "Skip to content"}
      </a>

      <header className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur">
        <nav className="mx-auto flex max-w-page items-center justify-between gap-4 px-4 py-3 sm:px-8">
          <a
            href={lang === "en" ? "/" : "/it"}
            className="flex items-center gap-3 font-display text-lg font-bold tracking-tight"
          >
            <svg width="28" height="28" viewBox="0 0 64 64" aria-hidden="true">
              <rect width="64" height="64" rx="14" className="fill-ink" />
              <rect
                x="12"
                y="16"
                width="16"
                height="32"
                rx="3"
                className="fill-control"
              />
              <rect
                x="36"
                y="10"
                width="16"
                height="38"
                rx="3"
                className="fill-variant"
              />
            </svg>
            <span>Antonio Zuccon Ghiotto</span>
          </a>
          <div className="flex items-center gap-5 text-sm font-semibold">
            <a
              href="#work"
              className="hidden text-muted hover:text-ink md:inline"
            >
              {c.nav.work}
            </a>
            <a
              href="#projects"
              className="hidden text-muted hover:text-ink md:inline"
            >
              {c.nav.projects}
            </a>
            <a
              href="#method"
              className="hidden text-muted hover:text-ink md:inline"
            >
              {c.nav.method}
            </a>
            <a
              href={c.nav.switchHref}
              hrefLang={lang === "it" ? "en" : "it"}
              className="text-muted hover:text-ink"
            >
              {c.nav.switchTo}
            </a>
            <a
              href="#contact"
              className="rounded-full bg-ink px-4 py-2 text-paper hover:bg-variant"
            >
              {c.nav.contact}
            </a>
          </div>
        </nav>
      </header>

      <main id="main">
        <Hero hero={c.hero} />

        <Section id="services" title={c.services.title}>
          <dl className="grid gap-x-12 gap-y-10 sm:grid-cols-2">
            {c.services.items.map((s) => (
              <div key={s.name}>
                <dt className="font-display text-xl font-semibold">{s.name}</dt>
                <dd className="mt-2 leading-relaxed text-muted">{s.body}</dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section id="work" title={c.work.title} intro={c.work.intro}>
          <ul className="divide-y divide-line border-y border-line">
            {c.work.cases.map((w) => (
              <li
                key={w.title}
                className="grid gap-4 py-8 sm:grid-cols-[minmax(0,1fr)_11rem] sm:gap-10"
              >
                <div>
                  <p className="text-sm font-semibold text-variant">
                    {w.sector}
                  </p>
                  <h3 className="mt-1 font-display text-2xl font-bold tracking-[-0.01em]">
                    {w.title}
                  </h3>
                  <p className="mt-3 max-w-[62ch] leading-relaxed text-muted">
                    {w.body}
                  </p>
                  <Tags items={w.stack} />
                </div>
                {w.metric && (
                  <div className="sm:text-right">
                    <p className="font-display text-5xl font-extrabold tracking-[-0.03em] text-win">
                      {w.metric}
                    </p>
                    <p className="mt-1 text-sm text-muted">{w.metricLabel}</p>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </Section>

        <Section
          id="projects"
          title={c.projects.title}
          intro={c.projects.intro}
        >
          <article className="rounded-3xl bg-ink p-6 text-paper sm:p-10">
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <h3 className="font-display text-3xl font-extrabold tracking-[-0.02em] sm:text-4xl">
                {c.projects.featured.name}
              </h3>
              <span className="rounded-full bg-variant px-3 py-1 text-sm font-semibold text-white dark:text-ink">
                {c.projects.featured.status}
              </span>
            </div>
            <p className="mt-1 text-paper/70">{c.projects.featured.kind}</p>
            <p className="mt-6 max-w-[64ch] text-lg leading-relaxed">
              {c.projects.featured.body}
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {c.projects.featured.stack.map((t) => (
                <li
                  key={t}
                  className="rounded-full border border-paper/25 px-3 py-1 text-sm text-paper/80"
                >
                  {t}
                </li>
              ))}
            </ul>
            {c.projects.featured.repo && (
              <a
                href={c.projects.featured.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-paper px-5 py-2.5 font-semibold text-ink hover:bg-variant hover:text-white"
              >
                <GitHubMark />{" "}
                {lang === "it" ? "Codice su GitHub" : "Code on GitHub"}
              </a>
            )}
          </article>

          <div className="mt-10 grid gap-10 md:grid-cols-2">
            {c.projects.others.map((p) => (
              <article key={p.name}>
                <p className="text-sm text-muted">
                  {p.kind} · {p.status}
                </p>
                <h3 className="mt-1 font-display text-2xl font-bold">
                  {p.name}
                </h3>
                <p className="mt-3 leading-relaxed text-muted">{p.body}</p>
                <Tags items={p.stack} />
                {p.store && (
                  <a
                    href={p.store}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 font-semibold text-variant hover:underline"
                  >
                    {lang === "it"
                      ? "Scarica su Google Play"
                      : "Get it on Google Play"}
                  </a>
                )}
                {p.repo && (
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 font-semibold text-variant hover:underline"
                  >
                    <GitHubMark /> GitHub
                  </a>
                )}
                {p.store && (
                  <a
                    href={p.store}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 font-semibold text-variant hover:underline"
                  >
                   
                  </a>
                )}
              </article>
            ))}
          </div>
        </Section>

        <Section id="method" title={c.method.title}>
          <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {c.method.steps.map((s, i) => (
              <li key={s.name} className="relative">
                <span className="font-display text-sm font-bold text-variant">
                  {i + 1}
                  {i === c.method.steps.length - 1 ? " ↺" : ""}
                </span>
                <p className="mt-2 font-display text-xl font-semibold">
                  {s.name}
                </p>
                <p className="mt-2 leading-relaxed text-muted">{s.body}</p>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="stack" title={c.stack.title}>
          <div className="grid gap-8 sm:grid-cols-2">
            {c.stack.groups.map((g) => (
              <div key={g.name}>
                <h3 className="font-display text-lg font-semibold">{g.name}</h3>
                <Tags items={g.items} />
              </div>
            ))}
          </div>
        </Section>

        <Section
          id="contact"
          title={c.contactSection.title}
          intro={c.contactSection.body}
        >
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_16rem]">
            <ContactForm form={c.contactSection.form} email={contact.email} />
            <div className="space-y-6">
              <ul className="space-y-2 text-muted">
                {c.contactSection.availability.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
              <div>
                <p className="text-sm text-muted">{c.contactSection.direct}</p>
                <a
                  href={`mailto:${contact.email}`}
                  className="mt-1 block break-all font-semibold text-variant hover:underline"
                >
                  {contact.email}
                </a>
                <a
                  href={`tel:${contact.phone.replace(/\s/g, "")}`}
                  className="mt-1 block font-semibold hover:underline"
                >
                  {contact.phone}
                </a>
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 block font-semibold hover:underline"
                >
                  LinkedIn
                </a>
                <a
                  href={contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 block font-semibold hover:underline"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </Section>
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-page flex-col gap-2 px-4 py-8 text-sm text-muted sm:flex-row sm:justify-between sm:px-8">
          <p>© {year} Antonio Zuccon Ghiotto</p>
          <p>
            {c.footer.vat} {contact.vat} – {c.footer.legal}: {contact.legal}
          </p>
        </div>
      </footer>
    </>
  );
}
