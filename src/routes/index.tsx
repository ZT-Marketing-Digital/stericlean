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
import { translations } from "@/i18n/translations";

const meta = translations.pt.meta;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: meta.title },
      { name: "description", content: meta.description },
      { property: "og:title", content: meta.title },
      { property: "og:description", content: meta.description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function PageMeta() {
  const { t } = useLanguage();
  return (
    <>
      <title>{t.meta.title}</title>
      <meta name="description" content={t.meta.description} />
    </>
  );
}

function Index() {
  return (
    <LanguageProvider>
      <PageMeta />
      <SiteHeader />
      <main>
        <Hero />
        <Mechanism />
        <Timeline />
        <Crops />
        <ProductLines />
        <Sustainability />
        <Contact />
      </main>
      <SiteFooter />
    </LanguageProvider>
  );
}
