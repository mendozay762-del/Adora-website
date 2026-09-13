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
        days: { en: "Monday", es: "Lunes" },
        value: { en: "8:00 AM & 1:00 PM & 5:00 PM", es: "8:00 AM & 1:00 PM & 5:00 PM" },
        note: { en: "Three appointments daily", es: "Tres citas al día" },
      },
      {
        days: { en: "Tuesday – Friday", es: "Martes – Viernes" },
        value: { en: "7:30 PM", es: "7:30 PM" },
        note: { en: "One appointment daily", es: "Una cita al día" },
      },
      {
        days: { en: "Saturday", es: "Sábado" },
        value: { en: "3:00 PM & 6:00 PM", es: "3:00 PM & 6:00 PM" },
        note: { en: "Two appointments daily", es: "Dos citas al día" },
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
