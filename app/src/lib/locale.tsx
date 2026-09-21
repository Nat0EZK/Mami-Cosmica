import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import { content, type ContentShape, type Locale } from "@/content";

const STORAGE_KEY = "mami-cosmica-locale";

function readStoredLocale(): Locale {
    if (typeof window === "undefined") return "es";
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored === "en" ? "en" : "es";
}

const LocaleContext = createContext<{
    locale: Locale;
    setLocale: (locale: Locale) => void;
} | null>(null);

export function LocaleProvider({ children }: { children: ReactNode }) {
    const [locale, setLocaleState] = useState<Locale>(readStoredLocale);

    useEffect(() => {
        document.documentElement.lang = locale;
        window.localStorage.setItem(STORAGE_KEY, locale);
    }, [locale]);

    const setLocale = useCallback((next: Locale) => setLocaleState(next), []);

    return <LocaleContext.Provider value={{ locale, setLocale }}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
    const ctx = useContext(LocaleContext);
    if (!ctx) throw new Error("useLocale debe usarse dentro de <LocaleProvider>");
    return ctx;
}

/** El diccionario completo del idioma activo. */
export function useContent(): ContentShape {
    const { locale } = useLocale();
    return content[locale];
}
