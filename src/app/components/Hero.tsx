"use client";

import { useState } from "react";
import type { Content } from "../lib/content";

type Props = { hero: Content["hero"] };

export default function Hero({ hero }: Props) {
  const [arm, setArm] = useState<"A" | "B">("B");
  const isB = arm === "B";

  return (
    <section className="mx-auto max-w-page px-4 pb-20 pt-12 sm:px-8 sm:pt-20">
      <p className="text-base text-muted">{hero.kicker}</p>

      <div className="mt-6 min-h-[9rem] sm:min-h-[14rem] lg:min-h-[19rem]" aria-live="polite">
        <h1
          key={arm}
          className={`hero-swap max-w-[16ch] font-display font-extrabold leading-[0.95] tracking-[-0.035em] ${isB ? "text-ink" : "text-control"} text-[2.9rem] sm:text-7xl lg:text-[6.25rem]`}
        >
          {isB ? hero.title : hero.exp.controlTitle}
        </h1>
      </div>

      <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-end">
        <div>
          <p key={arm} className={`hero-swap max-w-[60ch] text-lg leading-relaxed sm:text-xl ${isB ? "text-ink" : "text-control"}`}>
            {isB ? hero.lede : hero.exp.controlLede}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
            <a
              href="#contact"
              className="rounded-full bg-variant px-6 py-3 font-semibold text-white transition-colors hover:bg-ink dark:text-paper"
            >
              {hero.cta}
            </a>
            <a href="#work" className="font-semibold text-ink underline decoration-line decoration-2 underline-offset-[6px] hover:decoration-variant">
              {hero.secondary}
            </a>
          </div>
        </div>

        <aside className="rounded-2xl border border-line bg-panel p-5">
          <p className="font-display text-lg font-semibold">{hero.exp.caption}</p>
          <div role="radiogroup" aria-label={hero.exp.caption} className="mt-4 grid grid-cols-2 gap-1 rounded-xl bg-paper p-1">
            {(["A", "B"] as const).map((k) => {
              const active = arm === k;
              return (
                <button
                  key={k}
                  role="radio"
                  aria-checked={active}
                  onClick={() => setArm(k)}
                  className={`rounded-lg px-3 py-2 text-left text-sm font-semibold transition-colors ${
                    active ? (k === "B" ? "bg-variant text-white dark:text-paper" : "bg-control text-white dark:text-paper") : "text-muted hover:text-ink"
                  }`}
                >
                  {k === "A" ? hero.exp.control : hero.exp.variant}
                </button>
              );
            })}
          </div>
          <p className="mt-4 text-sm leading-relaxed text-muted">{hero.exp.note}</p>
        </aside>
      </div>
    </section>
  );
}
