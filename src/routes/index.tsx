import { useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { LanguageProvider, useLanguage } from "@/i18n/LanguageProvider";
import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/sections/hero";
import { Mechanism } from "@/components/sections/mechanism";
import { Timeline } from "@/components/sections/timeline";
import { Crops } from "@/components/sections/crops";
import { ProductLines } from "@/components/sections/product-lines";
import { Sustainability } from "@/components/sections/sustainability";
import { Contact } from "@/components/sections/contact";
import { SiteFooter } from "@/components/sections/site-footer";

export const Route = createFileRoute("/")({
  component: Index,
});

/**
 * O SSR já entrega o <head> em pt-BR (ver __root.tsx). Aqui só reagimos à
 * troca de idioma no cliente, sem duplicar as tags no HTML servido.
 */
function usePageMeta() {
  const { t } = useLanguage();

  useEffect(() => {
    document.title = t.meta.title;
    for (const sel of ['meta[name="description"]', 'meta[property="og:description"]']) {
      document.querySelector(sel)?.setAttribute("content", t.meta.description);
    }
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", t.meta.title);
  }, [t]);
}

function Page() {
  usePageMeta();

  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-primary-foreground"
      >
        Ir para o conteúdo
      </a>
      <SiteHeader />
      <main id="conteudo">
        <Hero />
        <Mechanism />
        <Timeline />
        <Crops />
        <ProductLines />
        <Sustainability />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}

function Index() {
  return (
    <LanguageProvider>
      <Page />
    </LanguageProvider>
  );
}
