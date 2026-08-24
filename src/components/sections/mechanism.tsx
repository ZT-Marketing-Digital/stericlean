import { useLanguage } from "@/i18n/LanguageProvider";
import { icone_molecula_verde_jpg as moleculaImg } from "@/assets/images";
import { placas_penicillium_placas_jpg as placasImg } from "@/assets/images";

export function Mechanism() {
  const { t } = useLanguage();

  return (
    <section id="mecanismo" className="bg-brand-soft py-24">
      <div className="section-shell">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">
              {t.mechanism.eyebrow}
            </span>
            <h2 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
              {t.mechanism.title}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              {t.mechanism.lead}
            </p>

            <blockquote className="mt-7 border-l-4 border-accent pl-5 font-display text-xl font-semibold leading-snug md:text-2xl">
              {t.mechanism.punch}
            </blockquote>

            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              {t.mechanism.body}
            </p>
          </div>

          <div className="relative">
            
            <figure className="mt-5 overflow-hidden rounded-2xl border border-border bg-card">
              <img
                src={placasImg}
                alt={t.mechanism.figureTitle}
                className="w-full object-cover"
                loading="lazy"
              />
              <figcaption className="border-t border-border p-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                  {t.mechanism.figureTitle}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {t.mechanism.figureCaption}
                </p>
              </figcaption>
            </figure>
          </div>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {t.mechanism.cards.map((c) => (
            <div
              key={c.title}
              className="rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-[0_18px_40px_-28px_color-mix(in_oklab,var(--brand-deep)_60%,transparent)]"
            >
              <h3 className="font-display text-base font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {c.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
