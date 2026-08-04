import { useLanguage } from "@/i18n/LanguageProvider";
import { DropMark } from "@/components/brand";

export function Sustainability() {
  const { t } = useLanguage();

  return (
    <section
      id="sustentabilidade"
      className="relative overflow-hidden bg-[linear-gradient(120deg,color-mix(in_oklab,var(--brand-deep)_92%,transparent),color-mix(in_oklab,var(--ink)_88%,transparent))] py-24 text-primary-foreground"
    >
      <DropMark className="pointer-events-none absolute -right-16 -top-16 h-80 w-80 text-primary-foreground/5" />
      <div className="section-shell relative">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            {t.sustainability.eyebrow}
          </span>
          <h2 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
            {t.sustainability.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-primary-foreground/75">
            {t.sustainability.lead}
          </p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl bg-primary-foreground/15 sm:grid-cols-2 lg:grid-cols-4">
          {t.sustainability.items.map((item) => (
            <div
              key={item.title}
              className="bg-[color-mix(in_oklab,var(--ink)_72%,transparent)] p-7"
            >
              <h3 className="font-display text-lg font-semibold text-accent">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-primary-foreground/75">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
