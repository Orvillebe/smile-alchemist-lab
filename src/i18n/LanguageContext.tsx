import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import type { Locale, Translations } from "./types";
import { nl } from "./nl";
import { en } from "./en";

const translations: Record<Locale, Translations> = { nl, en };

interface LanguageContextType {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType>({
  locale: "nl",
  setLocale: () => {},
  t: nl,
});

function detectLocale(): Locale {
  const stored = localStorage.getItem("locale");
  if (stored === "nl" || stored === "en") return stored;
  const lang = navigator.language?.toLowerCase() ?? "";
  if (lang.startsWith("nl")) return "nl";
  return "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(detectLocale);

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    localStorage.setItem("locale", l);
  };

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return (
    <LanguageContext.Provider
      value={{ locale, setLocale, t: translations[locale] }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
