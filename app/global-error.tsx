"use client";

import { useSyncExternalStore } from "react";

/**
 * Last-resort screen, shown only when the root layout itself fails.
 *
 * It renders its own <html> and deliberately pulls in no stylesheet and no
 * shared modules, so that a failure anywhere else on the site cannot stop it
 * from rendering. That also means the site-wide CSS language swap is not
 * available here, so this screen picks a language in JS instead and inlines
 * its own copy rather than importing the shared dictionary.
 */

const STORAGE_KEY = "adora-lang";

function subscribe() {
  // Nothing can change the language while this screen is up — there is no
  // toggle here — so there is nothing to subscribe to.
  return () => {};
}

function getSnapshot(): "en" | "es" {
  try {
    return localStorage.getItem(STORAGE_KEY) === "es" ? "es" : "en";
  } catch {
    return "en";
  }
}

function getServerSnapshot(): "en" | "es" {
  return "en";
}

const COPY = {
  en: {
    heading: "Something went wrong",
    body: "Sorry about that. Please try again, or reach Dora directly on Instagram @adora.lashesandbrows.",
    tryAgain: "Try Again",
    backHome: "Back to Home",
  },
  es: {
    heading: "Algo salió mal",
    body: "Lo sentimos. Por favor inténtalo de nuevo, o escríbele a Dora directamente en Instagram @adora.lashesandbrows.",
    tryAgain: "Intentar de Nuevo",
    backHome: "Volver al Inicio",
  },
} as const;

export default function GlobalError({ reset }: { error: Error; reset: () => void }) {
  const lang = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const t = COPY[lang];

  return (
    <html lang={lang}>
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "1.5rem",
          padding: "2rem",
          textAlign: "center",
          backgroundColor: "#100a14",
          color: "#f3eef6",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <h1 style={{ fontSize: "1.75rem", fontWeight: 300, letterSpacing: "0.08em" }}>
          {t.heading}
        </h1>
        <p style={{ maxWidth: "28rem", fontSize: "0.9rem", color: "#b9a9c6", lineHeight: 1.6 }}>
          {t.body}
        </p>
        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", justifyContent: "center" }}>
          <button
            onClick={() => reset()}
            style={{
              cursor: "pointer",
              borderRadius: "9999px",
              border: "none",
              padding: "0.65rem 1.75rem",
              backgroundColor: "#9a5cff",
              color: "#ffffff",
              fontSize: "0.9rem",
            }}
          >
            {t.tryAgain}
          </button>
          {/* A plain anchor, not next/link: the router is not trustworthy on
              this screen, and a full document load is the reliable escape. */}
          {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
          <a
            href="/"
            style={{
              borderRadius: "9999px",
              border: "1px solid rgba(154,92,255,0.5)",
              padding: "0.65rem 1.75rem",
              color: "#f3eef6",
              fontSize: "0.9rem",
              textDecoration: "none",
            }}
          >
            {t.backHome}
          </a>
        </div>
      </body>
    </html>
  );
}
