import { useState } from "react";
import { useLanguage } from "@/i18n/LanguageProvider";
import type { Lang } from "@/i18n/translations";
import { Wordmark } from "@/components/brand";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const LANG_OPTIONS: { code: Lang; region: string; short: string; name: string }[] = [
  { code: "pt", region: "br", short: "PT", name: "Português" },
  { code: "en", region: "us", short: "EN", name: "English" },
  { code: "es", region: "es", short: "ES", name: "Español" },
];

export function SiteHeader() {
  const { t, lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const current = LANG_OPTIONS.find((l) => l.code === lang) ?? LANG_OPTIONS[0];


  const links = [
    { href: "#mecanismo", label: t.nav.mechanism },
    { href: "#resultados", label: t.nav.results },
    { href: "#linhas", label: t.nav.lines },
    { href: "#sustentabilidade", label: t.nav.sustainability },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="section-shell flex h-16 items-center justify-between gap-4">
        <a href="#top" aria-label="SteriClean">
          <Wordmark />
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1.5 text-xs font-semibold text-foreground transition-colors hover:bg-secondary focus:outline-none focus-visible:ring-2 focus-visible:ring-ring">
              <span className="text-[10px] font-bold uppercase text-primary">
                {current.region}
              </span>
              <span>{current.short}</span>
              <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="min-w-44 p-1.5">
              {LANG_OPTIONS.map((l) => (
                <DropdownMenuItem
                  key={l.code}
                  onSelect={() => setLang(l.code)}
                  className={`gap-3 rounded-md px-2.5 py-2 text-sm ${
                    lang === l.code ? "font-semibold text-primary" : "text-foreground"
                  }`}
                >
                  <span className="w-6 text-[10px] font-bold uppercase text-muted-foreground">
                    {l.region}
                  </span>
                  {l.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>


          <a
            href="#contato"
            className="hidden rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 sm:inline-flex"
          >
            {t.nav.contact}
          </a>

          <button
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-background lg:hidden">
          <div className="section-shell flex flex-col py-3">
            {[...links, { href: "#contato", label: t.nav.contact }].map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2.5 text-sm font-medium text-foreground"
              >
                {l.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
