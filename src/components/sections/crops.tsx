import { useState } from "react";
import { useLanguage } from "@/i18n/LanguageProvider";
import type { CropKey } from "@/i18n/translations";
import mangaCaixa from "@/assets/manga_caixa.jpg";
import mangaEsteira from "@/assets/manga_esteira.jpg";
import morangoBandeja from "@/assets/morango_bandeja.jpg";
import cevadaMao from "@/assets/cevada_mao.jpg";
import cevadaBrotos from "@/assets/cevada_brotos.jpg";

const cropPhotos: Partial<Record<CropKey, string[]>> = {
  manga: [mangaEsteira, mangaCaixa],
  morango: [morangoBandeja],
  cevada: [cevadaMao, cevadaBrotos],
};

export function Crops() {
  const { t } = useLanguage();
  const [active, setActive] = useState<CropKey>("maca");
  const crop = t.crops.items.find((c) => c.key === active) ?? t.crops.items[0]!;
  const photos = cropPhotos[crop.key] ?? [];

  return (
    <section id="resultados" className="bg-brand-soft py-24">
      <div className="section-shell">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            {t.crops.eyebrow}
          </span>
          <h2 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
            {t.crops.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            {t.crops.lead}
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          {t.crops.items.map((c) => (
            <button
              key={c.key}
              onClick={() => setActive(c.key)}
              aria-pressed={active === c.key}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                active === c.key
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground"
              }`}
            >
              {c.name}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-8 rounded-3xl border border-border bg-card p-6 md:p-10 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <p className="stat-figure text-6xl text-primary md:text-7xl">{crop.stat}</p>
            <p className="mt-3 max-w-sm text-sm font-medium uppercase tracking-wide text-muted-foreground">
              {crop.statLabel}
            </p>

            <dl className="mt-9 space-y-6">
              {[
                { label: t.crops.labels.results, value: crop.results },
                { label: t.crops.labels.environment, value: crop.environment },
                { label: t.crops.labels.conclusion, value: crop.conclusion },
              ].map((row) => (
                <div key={row.label} className="border-l-2 border-accent pl-4">
                  <dt className="text-xs font-semibold uppercase tracking-widest text-primary">
                    {row.label}
                  </dt>
                  <dd className="mt-1.5 text-sm leading-relaxed text-foreground/85">
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {photos.length > 0 ? (
              photos.map((src) => (
                <img
                  key={src}
                  src={src}
                  alt={crop.name}
                  className="aspect-4/3 w-full rounded-2xl object-cover"
                  loading="lazy"
                />
              ))
            ) : (
              <div className="flex aspect-4/3 items-center justify-center rounded-2xl bg-[linear-gradient(140deg,color-mix(in_oklab,var(--brand)_35%,transparent),color-mix(in_oklab,var(--brand-deep)_25%,transparent))]">
                <span className="font-display text-2xl font-semibold text-primary/70">
                  {crop.name}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
