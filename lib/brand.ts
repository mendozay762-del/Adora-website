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

  hours: {
    effectiveDate: "June 1, 2026",
    schedule: [
      {
        days: "Monday – Thursday",
        value: "5:00 PM & 8:00 PM",
        note: "Two appointments daily",
      },
      {
        days: "Friday – Saturday",
        value: "7:00 AM – 8:00 PM",
        note: "Flexible booking window",
      },
      {
        days: "Sunday",
        value: "Closed",
        note: null,
      },
    ],
  },
} as const;
