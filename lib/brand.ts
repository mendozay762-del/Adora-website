export const BRAND = {
  name: "Adora Lashes and Brows",
  shortName: "Adora || L&B",
  artist: "Dora",

  pillars: ["Soft", "Luxurious", "Elevated"] as const,

  booking: {
    method: "instagram-dm" as const,
    // Profile URL, not ig.me/m/ — the ig.me DM deep link renders a blank
    // page on desktop / when logged out. The profile reliably loads and
    // its "Message" button is one tap from a DM.
    dmUrl: "https://instagram.com/adora.lashesandbrows",
    keyword: "LASHES",
    zelle: "469-685-2351",
  },

  contact: {
    instagram: "adora.lashesandbrows",
    instagramUrl: "https://instagram.com/adora.lashesandbrows",
    tiktok: "adora.lashesandbrows",
    tiktokUrl: "https://tiktok.com/@adora.lashesandbrows",
  },

  address: {
    line1: "8500 N. Stemmons Fwy",
    suite: "Suite 4015H",
    city: "Dallas",
    state: "TX",
    zip: "75247",
  },

  deposit: 20,

  languages: {
    default: "en" as const,
    supported: ["en", "es"] as const,
  },

  // Bookable appointment times. Both the homepage "Business Hours" panel and
  // the /contact "Hours" panel read this array, so a change here updates
  // every hours display on the site. Times themselves are language-neutral;
  // only the day names and notes are translated.
  hours: {
    schedule: [
      {
        days: { en: "Monday – Saturday", es: "Lunes – Sábado" },
        value: { en: "Open all day", es: "Abierto todo el día" },
        note: { en: "By appointment only", es: "Solo con cita previa" },
      },
      {
        days: { en: "Sunday", es: "Domingo" },
        value: { en: "By request", es: "Por solicitud" },
        note: {
          en: "$20 surcharge on any service",
          es: "$20 de recargo en cualquier servicio",
        },
      },
    ],
  },
} as const;
