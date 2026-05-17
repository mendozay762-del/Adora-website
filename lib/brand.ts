export const BRAND = {
  name: "Adora Lashes and Brows",
  shortName: "Adora || L&B",

  pillars: ["Soft", "Luxurious", "Elevated"] as const,

  bookingPlatform: "Vagaro",
  bookingUrl: "https://www.vagaro.com/us04/adoralashesandbrows",
  dmKeyword: "LASHES",

  contact: {
    phone: "469-685-2351",
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

  reference: {
    name: "Reyna Beauty",
    url: "https://reynaabeauty.as.me/schedule/f389fe85",
  },

  colors: {
    softLavender: "#B89BD9",
    vibrantPurple: "#A845E0",
    dustyPurple: "#8F6FB0",
    accentGold: "#C9A66B",
    backgroundLight: "#FFFFFF",
    backgroundDark: "#000000",
    foreground: "#2B1F2D",
  },

  offers: {
    lashSet: {
      priceUsd: 50,
      copy: "$50 lash sets · Rest of the year",
      validThrough: "2026-12-31",
    },
    newClient: {
      discountUsd: 20,
      copy: "New clients get $20 OFF",
    },
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
