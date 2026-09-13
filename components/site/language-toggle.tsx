"use client";

import { useSyncExternalStore } from "react";

type Lang = "en" | "es";

const STORAGE_KEY = "adora-lang";

/**
 * The active language lives on `<html data-lang>`, not in React state.
 *
 * Reading it through useSyncExternalStore (rather than useState + useEffect)
 * keeps the server render and the first client render in agreement, and means
 * the button stays correct even if something else changes the attribute.
 */
function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-lang"],
  });
  return () => observer.disconnect();
}

function getSnapshot(): Lang {
  return document.documentElement.getAttribute("data-lang") === "es"
    ? "es"
    : "en";
}

/** The server has no DOM to read, and English is the document default. */
function getServerSnapshot(): Lang {
  return "en";
}

/**
 * EN | ES switch shown in the top-right of every page.
 *
 * Switching costs one attribute write: CSS in `app/globals.css` reveals the
 * matching half of every `<T>` pair. No re-render of page content, no
 * refetch, no navigation — and the URL never changes.
 *
 * The visible active/inactive styling is also driven by CSS off the same
 * attribute, so the correct language is highlighted on first paint rather
 * than after React hydrates. The choice is remembered in localStorage and
 * re-applied by the inline script in `app/layout.tsx`.
 */
export function LanguageToggle() {
  const lang = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  function choose(next: Lang) {
    const root = document.documentElement;
    root.setAttribute("data-lang", next);
    // Keep the document language honest for screen readers and browser
    // translation tools, not just for our own CSS.
    root.setAttribute("lang", next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Private browsing or blocked storage: the switch still works for this
      // page view, it just will not be remembered on the next one.
    }
  }

  return (
    <div
      className="flex shrink-0 items-center gap-1.5 text-[11px] font-medium uppercase tracking-[0.24em]"
      role="group"
      aria-label="Language / Idioma"
    >
      {(["en", "es"] as const).map((code, i) => (
        <span key={code} className="flex items-center gap-1.5">
          {i > 0 && (
            <span aria-hidden className="text-border">
              |
            </span>
          )}
          <button
            type="button"
            onClick={() => choose(code)}
            aria-pressed={lang === code}
            data-lang-btn={code}
            className="transition-colors"
          >
            {code === "en" ? "EN" : "ES"}
            <span className="sr-only">
              {code === "en" ? " — English" : " — Español"}
            </span>
          </button>
        </span>
      ))}
    </div>
  );
}
