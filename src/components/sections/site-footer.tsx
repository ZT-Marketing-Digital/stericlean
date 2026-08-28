import { useLanguage } from "@/i18n/LanguageProvider";
import { Wordmark } from "@/components/brand";
import { logo_ferticerto_png as logoFerticerto } from "@/assets/images";
import { logo_sanfer_jpg as logoSanfer } from "@/assets/images";

export function SiteFooter() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="section-shell flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div>
          <Wordmark />
          <p className="mt-3 text-sm text-muted-foreground">
            © {new Date().getFullYear()} SteriClean. {t.footer.rights}
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            {t.footer.partners}
          </p>
          <div className="mt-3 flex items-center gap-6">
            <img
              src={logoFerticerto}
              alt="Ferticerto"
              className="h-9 w-auto object-contain"
              loading="lazy"
            />
            <img
              src={logoSanfer}
              alt="Sanfer"
              className="h-9 w-auto object-contain"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <div className="section-shell mt-10 border-t border-border pt-6">
        <p className="max-w-4xl text-xs leading-relaxed text-muted-foreground">
          {t.footer.disclaimer}
        </p>
      </div>
    </footer>
  );
}
