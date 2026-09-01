import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { translations, type Dict, type Lang } from "./translations";

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: Dict };

const LanguageContext = createContext<Ctx>({
  lang: "pt",
  setLang: () => {},
  t: translations.pt,
});

const STORAGE_KEY = "stericlean-lang";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("pt");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as Lang | null;
    if (stored && stored in translations) {
      setLangState(stored);
      return;
    }
    const nav = window.navigator.language.toLowerCase();
    if (nav.startsWith("es")) setLangState("es");
    else if (nav.startsWith("en")) setLangState("en");
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang === "pt" ? "pt-BR" : lang === "es" ? "es" : "en";
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    window.localStorage.setItem(STORAGE_KEY, l);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
