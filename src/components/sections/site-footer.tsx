import { useLanguage } from "@/i18n/LanguageProvider";
import { Wordmark } from "@/components/brand";
import { MapPin, ArrowRight } from "lucide-react";
import { logo_ferticerto_png as logoFerticerto } from "@/assets/images";
import { logo_sanfer_jpg as logoSanfer } from "@/assets/images";

const partners = [
  { src: logoFerticerto, name: "Ferticerto" },
  { src: logoSanfer, name: "Sanfer" },
];

export function SiteFooter() {
  const { t } = useLanguage();

  const navLinks = [
    { href: "#mecanismo", label: t.nav.mechanism },
    { href: "#culturas", label: t.nav.results },
    { href: "#linhas", label: t.nav.lines },
    { href: "#sustentabilidade", label: t.nav.sustainability },
    { href: "#contato", label: t.nav.contact },
  ];

  const colTitle = "text-xs font-semibold uppercase tracking-[0.18em] text-accent";
  const link =
    "text-sm text-primary-foreground/75 transition-colors hover:text-accent focus-visible:text-accent focus-visible:outline-none focus-visible:underline";

  return (
    <footer className="bg-ink text-primary-foreground">
      <div className="section-shell py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.3fr] lg:gap-10">
          {/* Marca */}
          <div>
            <Wordmark variant="white" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-primary-foreground/70">
              {t.footer.tagline}
            </p>

            <p className={`${colTitle} mt-8`}>{t.footer.partners}</p>
            <div className="mt-3 flex flex-wrap items-center gap-3">
              {partners.map((p) => (
                <span
                  key={p.name}
                  className="inline-flex items-center rounded-lg bg-white px-3 py-2"
                >
                  <img
                    src={p.src}
                    alt={p.name}
                    width={120}
                    height={36}
                    className="h-7 w-auto object-contain"
                    loading="lazy"
                    decoding="async"
                  />
                </span>
              ))}
            </div>
          </div>

          {/* Navegação */}
          <nav aria-label={t.footer.navTitle}>
            <p className={colTitle}>{t.footer.navTitle}</p>
            <ul className="mt-4 space-y-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className={link}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Culturas atendidas */}
          <div>
            <p className={colTitle}>{t.footer.cropsLabel}</p>
            <p className="mt-4 text-sm leading-relaxed text-primary-foreground/70">
              {t.crops.items.map((c) => c.name).join(" · ")}
            </p>
          </div>

          {/* Unidades + contato */}
          <div>
            <p className={colTitle}>{t.footer.unitsTitle}</p>
            <ul className="mt-4 space-y-4">
              {t.contact.units.map((u) => (
                <li key={u.label} className="flex items-start gap-2.5">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-widest text-primary-foreground/65">
                      {u.label}
                    </p>
                    <p className="text-sm text-primary-foreground/85">{u.value}</p>
                  </div>
                </li>
              ))}
            </ul>

            <p className={`${colTitle} mt-8`}>{t.footer.contactTitle}</p>
            <a
              href="#contato"
              className="mt-3 inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2.5 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5"
            >
              {t.footer.contactCta}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Aviso regulatório */}
        <p className="mt-14 max-w-4xl text-xs leading-relaxed text-primary-foreground/65">
          {t.footer.disclaimer}
        </p>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="section-shell flex flex-col gap-4 py-6 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-primary-foreground/70">
            © {new Date().getFullYear()} SteriClean. {t.footer.rights}
          </p>
          <span className="inline-flex w-fit items-center rounded-md border border-accent/40 px-2.5 py-1 text-[11px] font-medium text-accent">
            {t.footer.badge}
          </span>
        </div>
      </div>
    </footer>
  );
}
