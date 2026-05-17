export type Locale = "en" | "es";

export const COPY = {
  brand: {
    pillars: {
      en: ["Soft", "Luxurious", "Elevated"],
      es: ["Suave", "Lujosa", "Elevada"],
    },
    tagline: {
      en: "An experience, not a service.",
      es: "Una experiencia, no un servicio.",
    },
  },
  hero: {
    eyebrow: {
      en: "Lashes & Brows · Dallas, Texas",
      es: "Pestañas y Cejas · Dallas, Texas",
    },
    sub: {
      en: "A wispy cat-eye crafted for the luxury client who wants an experience, not a service. Your exclusive lash experience awaits.",
      es: "Un cat-eye delicado, hecho para la clienta de lujo que busca una experiencia, no un servicio. Tu experiencia exclusiva te espera.",
    },
    ctaPrimary: { en: "Book Your Set", es: "Reserva tu Set" },
    ctaSecondary: {
      en: "DM “LASHES” on Instagram",
      es: "Envía “LASHES” por Instagram",
    },
  },
  promo: {
    banner: {
      en: "$50 lash sets · Rest of the year ✨",
      es: "Pestañas a $50 · Resto del año ✨",
    },
  },
  nav: {
    services: { en: "Services", es: "Servicios" },
    about: { en: "About", es: "Sobre" },
    gallery: { en: "Gallery", es: "Galería" },
    book: { en: "Book", es: "Reservar" },
  },
  footer: {
    visit: { en: "Visit", es: "Visita" },
    connect: { en: "Connect", es: "Conecta" },
    hours: {
      en: "By appointment only",
      es: "Solo con cita previa",
    },
    rights: {
      en: "All rights reserved.",
      es: "Todos los derechos reservados.",
    },
  },
} as const;

export function t<T extends { en: string; es: string }>(
  field: T,
  locale: Locale = "en",
): string {
  return field[locale];
}
