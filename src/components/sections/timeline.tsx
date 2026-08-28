import { useLanguage } from "@/i18n/LanguageProvider";
import { foto_palacio_iguacu_2023_jpg as img2023 } from "@/assets/images";
import { foto_agroleite_castro_2025_jpg as img2025 } from "@/assets/images";
import { foto_inauguracao_biopark_2026_jpg as img2026 } from "@/assets/images";

const photos = [img2023, img2025, img2026];

export function Timeline() {
  const { t } = useLanguage();

  return (
    <section className="py-24">
      <div className="section-shell">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            {t.timeline.eyebrow}
          </span>
          <h2 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
            {t.timeline.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            {t.timeline.lead}
          </p>
        </div>

        <ol className="mt-14 grid gap-6 md:grid-cols-3">
          {t.timeline.items.map((item, i) => (
            <li
              key={item.year}
              className="group overflow-hidden rounded-3xl border border-border bg-card"
            >
              <img
                src={photos[i]}
                alt={item.title}
                className="aspect-16/10 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="p-6">
                <span className="stat-figure text-2xl text-primary">{item.year}</span>
                <h3 className="mt-3 font-display text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.text}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <p className="mt-8 max-w-3xl text-xs leading-relaxed text-muted-foreground">
          {t.timeline.note}
        </p>
      </div>
    </section>
  );
}
