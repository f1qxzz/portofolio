"use client";

import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import { translations, type Lang } from "./translations";

type LangContext = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
};

const Context = createContext<LangContext | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("id");

  const t = useCallback(
    (key: string) => translations[lang]?.[key] ?? key,
    [lang],
  );

  return (
    <Context.Provider value={{ lang, setLang, t }}>
      {children}
    </Context.Provider>
  );
}

export function useLang() {
  const ctx = useContext(Context);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}
