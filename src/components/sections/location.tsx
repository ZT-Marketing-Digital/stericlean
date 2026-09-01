import { useState } from "react";
import { useLanguage } from "@/i18n/LanguageProvider";
import { DropMark } from "@/components/brand";
import { MapPin, Building2, Navigation, ArrowUpRight, Map as MapIcon } from "lucide-react";

const MAPS_QUERY = "Rua dos Manacás-da-Serra, 354, Biopark, Toledo - PR, 85920-268";

const EMBED_SRC = `https://maps.google.com/maps?q=${encodeURIComponent(
  MAPS_QUERY,
)}&z=15&output=embed`;
const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  MAPS_QUERY,
)}`;
const ROUTE_URL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  MAPS_QUERY,
)}`;

export function Location() {
  const { t } = useLanguage();
  // O iframe do Google só entra depois do clique: evita carregar script de
  // terceiro em toda visita e mantém o peso inicial da página baixo.
  const [showMap, setShowMap] = useState(false);

  const rows = [
    { icon: MapPin, label: t.location.addressLabel, value: t.location.address },
    { icon: Building2, label: t.location.parkLabel, value: t.location.park },
    { icon: Navigation, label: t.location.cityLabel, value: t.location.city },
  ];

  return (
    <section id="localizacao" className="py-24">
      <div className="section-shell">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            {t.location.eyebrow}
          </span>
          <h2 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">{t.location.title}</h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">{t.location.lead}</p>
        </div>

        <div className="mt-12 overflow-hidden rounded-3xl border border-border bg-card lg:grid lg:grid-cols-[0.85fr_1.15fr]">
          {/* Coluna de dados */}
          <div className="relative overflow-hidden bg-[linear-gradient(150deg,color-mix(in_oklab,var(--brand-deep)_94%,transparent),color-mix(in_oklab,var(--ink)_92%,transparent))] p-8 text-primary-foreground md:p-10">
            <DropMark className="pointer-events-none absolute -right-10 -top-12 h-56 w-56 text-primary-foreground/5" />

            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-accent">
                <MapIcon className="h-3.5 w-3.5" aria-hidden="true" />
                Toledo / PR
              </span>

              <dl className="mt-8 space-y-7">
                {rows.map((row) => (
                  <div key={row.label} className="flex items-start gap-3.5">
                    <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary-foreground/10 text-accent">
                      <row.icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <div>
                      <dt className="text-[11px] font-semibold uppercase tracking-widest text-primary-foreground/65">
                        {row.label}
                      </dt>
                      <dd className="mt-1 font-display text-base font-semibold leading-snug">
                        {row.value}
                      </dd>
                    </div>
                  </div>
                ))}
              </dl>

              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href={ROUTE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5"
                >
                  <Navigation className="h-4 w-4" aria-hidden="true" />
                  {t.location.ctaRoute}
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-primary-foreground/30 px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-primary-foreground/10"
                >
                  {t.location.ctaMaps}
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>

          {/* Mapa */}
          <div className="relative min-h-[22rem] lg:min-h-[30rem]">
            {showMap ? (
              <iframe
                src={EMBED_SRC}
                title={t.location.title}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full border-0"
              />
            ) : (
              <button
                type="button"
                onClick={() => setShowMap(true)}
                className="group absolute inset-0 flex h-full w-full flex-col items-center justify-center gap-4 bg-brand-soft transition-colors hover:bg-[color-mix(in_oklab,var(--brand)_18%,var(--brand-soft))]"
              >
                {/* Malha de ruas estilizada, só decorativa */}
                <svg
                  className="pointer-events-none absolute inset-0 h-full w-full text-primary/15"
                  aria-hidden="true"
                  preserveAspectRatio="xMidYMid slice"
                  viewBox="0 0 400 300"
                  fill="none"
                >
                  <path
                    d="M-20 90h440M-20 190h440M80-20v340M200-20v340M310-20v340"
                    stroke="currentColor"
                    strokeWidth="10"
                    strokeLinecap="round"
                  />
                  <path
                    d="M-20 240 140 140 260 210 420 120"
                    stroke="currentColor"
                    strokeWidth="6"
                    strokeLinecap="round"
                  />
                </svg>

                <span className="relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[0_14px_30px_-12px_color-mix(in_oklab,var(--brand-deep)_80%,transparent)] transition-transform group-hover:-translate-y-1">
                  <MapPin className="h-6 w-6" aria-hidden="true" />
                  <span className="absolute inset-0 animate-ping rounded-full bg-primary/30" />
                </span>

                <span className="relative font-display text-base font-semibold text-primary">
                  {t.location.mapCta}
                </span>
                <span className="relative max-w-56 text-center text-xs leading-relaxed text-muted-foreground">
                  {t.location.mapNote}
                </span>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
