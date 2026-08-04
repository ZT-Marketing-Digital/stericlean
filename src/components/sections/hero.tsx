import { useLanguage } from "@/i18n/LanguageProvider";
import { DropMark } from "@/components/brand";
import { aplicacao_campo_jpg as heroImg } from "@/assets/images";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section id="top" className="relative overflow-hidden">
      <img
        src={heroImg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(100deg,color-mix(in_oklab,var(--ink)_92%,transparent)_18%,color-mix(in_oklab,var(--ink)_62%,transparent)_62%,color-mix(in_oklab,var(--brand-deep)_45%,transparent)_100%)]" />

      <div className="section-shell relative py-24 md:py-32">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-accent">
            <DropMark className="h-3.5 w-3.5" />
            {t.hero.eyebrow}
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-[1.05] text-primary-foreground sm:text-5xl md:text-6xl">
            {t.hero.title}{" "}
            <span className="text-accent">{t.hero.highlight}</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-primary-foreground/80 md:text-lg">
            {t.hero.subtitle}
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#contato"
              className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5"
            >
              {t.hero.ctaPrimary}
            </a>
            <a
              href="#resultados"
              className="rounded-full border border-primary-foreground/35 px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              {t.hero.ctaSecondary}
            </a>
          </div>
        </div>

        <dl className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-primary-foreground/15 bg-primary-foreground/15 sm:grid-cols-3">
          {t.hero.stats.map((s) => (
            <div
              key={s.label}
              className="bg-[color-mix(in_oklab,var(--ink)_78%,transparent)] px-6 py-7 backdrop-blur-sm"
            >
              <dt className="stat-figure text-3xl text-accent md:text-4xl">
                {s.value}
              </dt>
              <dd className="mt-2 text-sm leading-snug text-primary-foreground/70">
                {s.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
