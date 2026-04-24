import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { translations, type Locale, type TranslationKey } from "./translations";

type Ctx = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (key: TranslationKey) => string;
};

const LanguageContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("vi");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = window.localStorage.getItem("locale") as Locale | null;
    if (saved === "vi" || saved === "en") setLocaleState(saved);
  }, []);

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    if (typeof window !== "undefined") window.localStorage.setItem("locale", l);
  };

  const t = (key: TranslationKey) => translations[locale][key] ?? key;

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { locale, setLocale } = useLanguage();
  return (
    <div className={`inline-flex items-center rounded-full bg-secondary/40 p-0.5 text-xs ${className}`}>
      <button
        onClick={() => setLocale("vi")}
        className={`px-2.5 py-1 rounded-full transition ${locale === "vi" ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`}
        aria-label="Tiếng Việt"
      >
        VI
      </button>
      <button
        onClick={() => setLocale("en")}
        className={`px-2.5 py-1 rounded-full transition ${locale === "en" ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`}
        aria-label="English"
      >
        EN
      </button>
    </div>
  );
}