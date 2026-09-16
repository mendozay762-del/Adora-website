import type { ReactNode } from "react";
import { BRAND } from "@/lib/brand";

/**
 * ===========================================================================
 *  SITE COPY — English / Spanish
 * ===========================================================================
 *
 * Every word a visitor can read lives here. To change wording on the site,
 * edit it here — not in the page or component files.
 *
 * Each entry is a pair: `en` is what English visitors see, `es` is what
 * Spanish visitors see. Both ship in the HTML; the EN | ES toggle in the top
 * right decides which one is visible (see `components/site/t.tsx`).
 *
 * Rules of thumb when editing:
 *
 *  - Always update BOTH halves of a pair. An empty `es` renders a blank gap
 *    for Spanish visitors rather than falling back to English.
 *  - Brand names, social handles, the studio address, the Zelle number, and
 *    prices are NOT translated — they come from `lib/brand.ts` so they can
 *    never drift between languages.
 *  - Spanish is Mexican / neutral Latin American, addressed to the client as
 *    "tú", matching Dora's warm, personal English voice.
 *
 * Not covered here: page <title> and share descriptions (`metadata` exports)
 * and image `alt` text. A single URL can only carry one of each, so those
 * stay English.
 */

export type CopyPair = { en: ReactNode; es: ReactNode };

/** Emphasis inside long-form policy copy. */
function S({ children }: { children: ReactNode }) {
  return <strong className="font-medium text-foreground">{children}</strong>;
}

/** Soft italic emphasis used in Dora's voice. */
function I({ children }: { children: ReactNode }) {
  return <span className="italic text-foreground/90">{children}</span>;
}

const IG = BRAND.contact.instagram;
const ZELLE = BRAND.booking.zelle;
const KEY = BRAND.booking.keyword;
const DEP = BRAND.deposit;

/* ===========================================================================
 * Shared — used on more than one page
 * ========================================================================= */

export const COMMON = {
  bookViaInstagram: {
    en: "Book via Instagram",
    es: "Reserva por Instagram",
  },
  backToHome: { en: "← Back to home", es: "← Volver al inicio" },
  backToHomeButton: { en: "Back to Home", es: "Volver al Inicio" },
} satisfies Record<string, CopyPair>;

/* ===========================================================================
 * Navigation
 * ========================================================================= */

export const NAV = {
  book: { en: "Book", es: "Reservar" },
  newClients: { en: "New Clients", es: "Clientas Nuevas" },
  portfolio: { en: "Portfolio", es: "Portafolio" },
  meetDora: { en: "Meet Dora", es: "Conoce a Dora" },
  services: { en: "Services", es: "Servicios" },
  aftercare: { en: "Aftercare", es: "Cuidados" },
  policies: { en: "Policies", es: "Políticas" },
  contact: { en: "Contact", es: "Contacto" },
} satisfies Record<string, CopyPair>;

/* ===========================================================================
 * Homepage — hero
 * ========================================================================= */

export const HERO = {
  welcome: {
    en: "Welcome to my booking site",
    es: "Bienvenida a mi sitio de reservas",
  },
  lashes: { en: "Lashes", es: "Pestañas" },
  brows: { en: "Brows", es: "Cejas" },
  locatedIn: {
    en: `Located in ${BRAND.address.city}, ${BRAND.address.state}`,
    es: `Ubicada en ${BRAND.address.city}, ${BRAND.address.state}`,
  },
  dmToReserve: {
    en: `DM “${KEY}” to reserve`,
    es: `Envía “${KEY}” por DM para reservar`,
  },
  zelleDeposit: {
    en: `Zelle deposit · ${ZELLE}`,
    es: `Depósito Zelle · ${ZELLE}`,
  },
} satisfies Record<string, CopyPair>;

/* ===========================================================================
 * Homepage — Meet Your Lash Artist
 * ========================================================================= */

export const PILLARS = [
  { en: "Soft", es: "Suave" },
  { en: "Luxurious", es: "Lujosa" },
  { en: "Elevated", es: "Elevada" },
] satisfies CopyPair[];

export const MEET_ARTIST = {
  eyebrow: { en: "Meet Your", es: "Conoce a Tu" },
  heading: { en: "LASH ARTIST", es: "ARTISTA DE PESTAÑAS" },
  bio: {
    en: (
      <>
        Hello gorgeous &mdash; I&rsquo;m Dora, your Dallas lash and brow
        artist. I craft lashes that feel like a little secret &mdash; soft,
        fluttery, and expensive-looking, made for the client who wants{" "}
        <I>an experience, not a service</I>. Precision, softness, and sultry
        detail in every set.
      </>
    ),
    es: (
      <>
        Hola hermosa &mdash; soy Dora, tu artista de pestañas y cejas en
        Dallas. Creo pestañas que se sienten como un pequeño secreto &mdash;
        suaves, ligeras y de apariencia costosa, hechas para la clienta que
        busca <I>una experiencia, no un servicio</I>. Precisión, suavidad y un
        detalle sensual en cada set.
      </>
    ),
  },
  pillarsInline: {
    en: "Soft · Luxurious · Elevated.",
    es: "Suave · Lujosa · Elevada.",
  },
} satisfies Record<string, CopyPair>;

/* ===========================================================================
 * Homepage — Business Hours / Contact Info
 * (The schedule rows themselves live in lib/brand.ts)
 * ========================================================================= */

export const HOURS = {
  businessPrimary: { en: "BUSINESS", es: "HORARIO" },
  businessSecondary: { en: "Hours", es: "de Atención" },
  contactPrimary: { en: "CONTACT", es: "CONTACTO" },
  contactSecondary: { en: "Info", es: "Info" },
  studio: { en: "Studio", es: "Estudio" },
} satisfies Record<string, CopyPair>;

/* ===========================================================================
 * Homepage — Booking Policies
 * ========================================================================= */

export const BOOKING_POLICIES = {
  primary: { en: "BOOKING", es: "POLÍTICAS" },
  secondary: { en: "Policies", es: "de Reserva" },
  readFull: {
    en: "Read the full policies →",
    es: "Lee las políticas completas →",
  },
  cancellations: {
    title: { en: "Cancellations", es: "Cancelaciones" },
    body: {
      en: "I respectfully request at least 48 hours advance notice. Less than 24 hours = 50% of the reserved service. No-shows are charged 100% and lose future booking privileges.",
      es: "Te pido respetuosamente al menos 48 horas de aviso. Menos de 24 horas = 50% del servicio reservado. Las inasistencias se cobran al 100% y pierden el derecho a reservar en el futuro.",
    },
  },
  payment: {
    title: { en: "Payment", es: "Pago" },
    body: {
      en: `Deposit accepted via Zelle only — ${ZELLE}. The remaining balance is due the day of your appointment, payable through Zelle or cash.`,
      es: `El depósito se acepta únicamente por Zelle — ${ZELLE}. El saldo restante se paga el día de tu cita, por Zelle o en efectivo.`,
    },
  },
  refunds: {
    title: { en: "Refunds", es: "Reembolsos" },
    body: {
      en: "All sales are final and services are non-refundable. Deposits are transferable once to a reschedule — miss that reschedule and a new deposit is required to rebook.",
      es: "Todas las ventas son finales y los servicios no son reembolsables. El depósito se puede transferir una sola vez a una cita reprogramada — si faltas a esa cita, se requiere un nuevo depósito para volver a reservar.",
    },
  },
  late: {
    title: { en: "Late / No-Show", es: "Retardos / Inasistencias" },
    body: {
      en: "Late arrivals may need to reschedule based on remaining time. No-shows are charged 100% of the service and will no longer be able to book with Dora.",
      es: "Si llegas tarde, es posible que debas reprogramar según el tiempo disponible. Las inasistencias se cobran al 100% del servicio y ya no podrán reservar con Dora.",
    },
  },
};

/* ===========================================================================
 * Homepage — Important
 * ========================================================================= */

export const IMPORTANT = {
  heading: { en: "IMPORTANT", es: "IMPORTANTE" },
  deposits: {
    title: { en: "Deposits", es: "Depósitos" },
    body: {
      en: `A non-refundable Zelle deposit (${ZELLE}) secures your appointment and goes toward your service total. Lash extensions: $${DEP} during the current promo. Deposit requirements for other services are confirmed when you book.`,
      es: `Un depósito no reembolsable por Zelle (${ZELLE}) asegura tu cita y se aplica al total de tu servicio. Extensiones de pestañas: $${DEP} durante la promoción actual. Los depósitos para otros servicios se confirman al momento de reservar.`,
    },
  },
  guests: {
    title: { en: "Guests", es: "Acompañantes" },
    body: {
      en: "I do not allow extra guests during your appointment. The studio is your private space — please make the proper arrangements ahead of time.",
      es: "No se permiten acompañantes durante tu cita. El estudio es tu espacio privado — por favor haz los arreglos necesarios con anticipación.",
    },
  },
  fills: {
    title: { en: "Fills", es: "Rellenos" },
    body: {
      en: "Lash fills require at least 30–50% of lashes still on. 4+ weeks since your last set counts as a full set, not a fill — please plan accordingly.",
      es: "Los rellenos requieren que conserves al menos el 30–50% de tus pestañas. Más de 4 semanas desde tu último set cuenta como set completo, no como relleno — planea con eso en mente.",
    },
  },
  foreignFills: {
    title: { en: "Foreign Fills", es: "Rellenos de Otro Estudio" },
    body: {
      en: "I accept fills from other artists if the existing work is in good condition. If not, a removal plus a new full set will be required.",
      es: "Acepto rellenos de trabajo hecho por otras artistas si está en buenas condiciones. Si no lo está, se requerirá una remoción más un set completo nuevo.",
    },
  },
};

/* ===========================================================================
 * Homepage — Before Your Appointment
 * ========================================================================= */

export const BEFORE = {
  eyebrow: { en: "Before Your", es: "Antes de Tu" },
  heading: { en: "APPOINTMENT", es: "CITA" },
  rules: [
    {
      en: "Please arrive 15 minutes before your appointment — I like a thorough consultation to best serve you.",
      es: "Por favor llega 15 minutos antes de tu cita — me gusta hacer una consulta completa para atenderte mejor.",
    },
    {
      en: "Come with a clean face — no makeup, mascara, contacts, or oil-based products around your eyes.",
      es: "Ven con el rostro limpio — sin maquillaje, rímel, lentes de contacto ni productos con aceite alrededor de los ojos.",
    },
    {
      en: "Avoid caffeine, energy drinks, and stimulants. Comfort is key during a 2–3 hour appointment.",
      es: "Evita la cafeína, las bebidas energéticas y los estimulantes. La comodidad es clave durante una cita de 2–3 horas.",
    },
    {
      en: "Wear warm, comfortable clothing. Please reschedule if you have pink eye, a stye, or any eye irritation.",
      es: "Usa ropa abrigada y cómoda. Por favor reprograma si tienes conjuntivitis, un orzuelo o cualquier irritación ocular.",
    },
  ] satisfies CopyPair[],
  noGuests: {
    en: "Absolutely no extra guest · No phone use during appointment",
    es: "Sin acompañantes · Sin uso de celular durante la cita",
  },
  consentEyebrow: {
    en: "For First-Time Clients",
    es: "Para Clientas Primerizas",
  },
  consentHeading: {
    en: "PLEASE SIGN CONSENT FORM",
    es: "FIRMA EL FORMULARIO DE CONSENTIMIENTO",
  },
  consentBody: {
    en: "Every new client is required to complete a lash and brow consent form before service begins. It covers your health history, allergies, and aftercare acknowledgment — it protects you and ensures your appointment runs smoothly. The form will be sent with your booking confirmation, or available to sign in studio when you arrive.",
    es: "Toda clienta nueva debe completar un formulario de consentimiento de pestañas y cejas antes de comenzar el servicio. Cubre tu historial de salud, alergias y el entendimiento de los cuidados posteriores — te protege y asegura que tu cita fluya sin contratiempos. El formulario se envía con tu confirmación de reserva, o puedes firmarlo en el estudio al llegar.",
  },
  consentCta: {
    en: "New Client Info & Consent",
    es: "Info y Consentimiento para Clientas Nuevas",
  },
} as const;

/* ===========================================================================
 * Homepage — Thank You For Booking
 * ========================================================================= */

export const THANK_YOU = {
  headingTop: { en: "Thank You", es: "Gracias" },
  headingBottom: { en: "For Booking!", es: "¡Por Reservar!" },
  chooseBelow: {
    en: "Choose your appointment below",
    es: "Elige tu cita abajo",
  },
  phonePlaceholder: { en: "Lash macro", es: "Macro de pestañas" },
  dmNote: {
    en: (
      <>
        Dora books exclusively through Instagram. DM{" "}
        <a
          href={BRAND.booking.dmUrl}
          target="_blank"
          rel="noreferrer noopener"
          className="text-accent hover:underline"
        >
          &ldquo;{KEY}&rdquo; to @{IG}
        </a>{" "}
        to reserve your appointment.
      </>
    ),
    es: (
      <>
        Dora reserva exclusivamente por Instagram. Envía{" "}
        <a
          href={BRAND.booking.dmUrl}
          target="_blank"
          rel="noreferrer noopener"
          className="text-accent hover:underline"
        >
          &ldquo;{KEY}&rdquo; a @{IG}
        </a>{" "}
        para apartar tu cita.
      </>
    ),
  },
  tagUs: {
    en: (
      <>
        Tag us in your new set <span className="text-accent">&hearts;</span>
      </>
    ),
    es: (
      <>
        Etiquétanos en tu nuevo set{" "}
        <span className="text-accent">&hearts;</span>
      </>
    ),
  },
} satisfies Record<string, CopyPair>;

/* ===========================================================================
 * Footer
 * ========================================================================= */

export const FOOTER = {
  visit: { en: "Visit", es: "Visita" },
  connect: { en: "Connect", es: "Conecta" },
  byAppointment: {
    en: "By appointment only",
    es: "Solo con cita previa",
  },
  rights: {
    en: "All rights reserved.",
    es: "Todos los derechos reservados.",
  },
} satisfies Record<string, CopyPair>;

/* ===========================================================================
 * /services
 * ========================================================================= */

export const SERVICES_PAGE = {
  eyebrow: { en: "The Menu", es: "El Menú" },
  heading: { en: "SERVICES", es: "SERVICIOS" },
  intro: {
    en: "Lashes and brows, crafted with intention. Every service is customized to your features and the look you want — soft, luxurious, elevated.",
    es: "Pestañas y cejas, creadas con intención. Cada servicio se personaliza a tus facciones y al look que buscas — suave, lujoso, elevado.",
  },
  lashesTitle: { en: "LASHES", es: "PESTAÑAS" },
  browsTitle: { en: "BROWS", es: "CEJAS" },
  featured: { en: "Featured", es: "Destacado" },
  unavailable: {
    en: "Currently unavailable",
    es: "No disponible por ahora",
  },
  availabilityEyebrow: {
    en: "A note on availability",
    es: "Nota sobre disponibilidad",
  },
  availabilityBody: {
    en: "Brow Lamination and Brow Tint are temporarily unavailable while product is restocked. Everything else is bookable now. See the New Clients page for the full deposit and booking briefing.",
    es: "El laminado de cejas y el tinte de cejas no están disponibles temporalmente mientras se resurte el producto. Todo lo demás se puede reservar ahora. Consulta la página de Clientas Nuevas para la información completa de depósitos y reservas.",
  },
  readyToBook: { en: "Ready to book?", es: "¿Lista para reservar?" },

  lashExtensions: {
    name: { en: "Lash Extensions", es: "Extensiones de Pestañas" },
    meta: {
      en: "Full set · ~2.5 – 3 hours · $50 price held through end of 2026",
      es: "Set completo · ~2.5 – 3 horas · Precio de $50 vigente hasta fin de 2026",
    },
    description: {
      en: "Semi-permanent lashes hand-applied one by one to your natural lashes, custom-built for your eye shape and the look you want — Classic, Hybrid, Volume, or Mega Volume. Lifted from the moment you wake up. Lasts 4 – 6 weeks with proper care and biweekly fills.",
      es: "Pestañas semipermanentes aplicadas a mano, una por una, sobre tus pestañas naturales y diseñadas para la forma de tus ojos y el look que buscas — Clásico, Híbrido, Volumen o Mega Volumen. Levantadas desde el momento en que despiertas. Duran de 4 a 6 semanas con el cuidado adecuado y rellenos cada dos semanas.",
    },
  },
  lashFill: {
    name: { en: "Lash Fill", es: "Relleno de Pestañas" },
    meta: {
      en: "Every 2 weeks · ~1 – 1.5 hours · No deposit needed",
      es: "Cada 2 semanas · ~1 – 1.5 horas · Sin depósito",
    },
    description: {
      en: "Maintenance for clients with an existing set. Worn lashes are gently removed and fresh ones placed so the set stays full, lifted, and even. Booked every two weeks for best retention.",
      es: "Mantenimiento para clientas que ya tienen un set. Se retiran con cuidado las pestañas desgastadas y se colocan nuevas para que el set se mantenga lleno, levantado y parejo. Se reserva cada dos semanas para una mejor retención.",
    },
  },
  browLamination: {
    name: { en: "Brow Lamination", es: "Laminado de Cejas" },
    meta: {
      en: "On its own · ~45 minutes",
      es: "Servicio individual · ~45 minutos",
    },
    description: {
      en: "A semi-permanent treatment that lifts and reshapes brow hairs upward into a fuller, brushed-up shape. Ideal for unruly, asymmetrical, or sparse brows. Lasts 6 – 8 weeks.",
      es: "Un tratamiento semipermanente que levanta y reorienta el vello de las cejas hacia arriba para lograr una forma más llena y peinada. Ideal para cejas rebeldes, asimétricas o escasas. Dura de 6 a 8 semanas.",
    },
  },
  browTint: {
    name: { en: "Brow Tint", es: "Tinte de Cejas" },
    meta: {
      en: "On its own · ~30 minutes",
      es: "Servicio individual · ~30 minutos",
    },
    description: {
      en: "A gentle dye applied to the brow hairs to add depth, balance gaps, and create a fuller, more defined frame for your face. Color fades softly over 3 – 6 weeks.",
      es: "Un tinte suave que se aplica al vello de las cejas para dar profundidad, emparejar espacios vacíos y crear un marco más lleno y definido para tu rostro. El color se desvanece poco a poco en 3 a 6 semanas.",
    },
  },
  browLamTint: {
    name: {
      en: "Brow Lamination + Tint + Clean Up",
      es: "Laminado de Cejas + Tinte + Limpieza",
    },
    meta: {
      en: "Bundle · ~1 hour · Save $30",
      es: "Paquete · ~1 hora · Ahorra $30",
    },
    description: {
      en: "The full transformation — lift, set, and color in one appointment. The most-requested brow upgrade: fuller shape, richer color, all in one sitting.",
      es: "La transformación completa — levantar, fijar y dar color en una sola cita. La mejora de cejas más solicitada: forma más llena y color más intenso, todo en una sesión.",
    },
  },
  browCleanUp: {
    name: { en: "Brow Clean Up", es: "Limpieza de Cejas" },
    meta: { en: "~30 minutes", es: "~30 minutos" },
    description: {
      en: "A precise shape and tidy — stray hairs removed, brow line defined, finished clean and polished to frame your face.",
      es: "Una depilación precisa y prolija — se retiran los vellos sueltos, se define la línea de la ceja y se termina limpio y pulido para enmarcar tu rostro.",
    },
  },
};

/* ===========================================================================
 * /about — Meet Dora
 * ========================================================================= */

export const ABOUT_PAGE = {
  eyebrow: { en: "Meet Your Lash Artist", es: "Conoce a Tu Artista de Pestañas" },
  role: {
    en: "Lash & Brow Artist · Dallas, Texas",
    es: "Artista de Pestañas y Cejas · Dallas, Texas",
  },
  certified: {
    en: "Certified in Lash Lifting + Brow Lamination",
    es: "Certificada en Lifting de Pestañas + Laminado de Cejas",
  },
  bio1: {
    en: (
      <>
        Hello gorgeous &mdash; I&rsquo;m Dora, the artist behind every set that
        leaves this studio. Adora is my own work, on my own terms &mdash; a
        studio I&rsquo;ve spent the last few years building, one client at a
        time.
      </>
    ),
    es: (
      <>
        Hola hermosa &mdash; soy Dora, la artista detrás de cada set que sale
        de este estudio. Adora es mi propio trabajo, bajo mis propios términos
        &mdash; un estudio que llevo años construyendo, una clienta a la vez.
      </>
    ),
  },
  bio2: {
    en: (
      <>
        Every appointment is private and every set is custom: Classic, Hybrid,
        Volume, or Mega Volume, paired to your eye shape and the look
        you&rsquo;re after. Soft, sultry, fluttery &mdash; sets that look
        expensive without looking overdone.
      </>
    ),
    es: (
      <>
        Cada cita es privada y cada set es personalizado: Clásico, Híbrido,
        Volumen o Mega Volumen, combinado con la forma de tus ojos y el look
        que buscas. Suave, sensual, ligero &mdash; sets que se ven costosos sin
        verse exagerados.
      </>
    ),
  },
  bio3: {
    en: (
      <>
        You won&rsquo;t leave looking made over. You&rsquo;ll leave looking{" "}
        <I>polished</I>&nbsp;&mdash; like the version of you that always knew
        what she was doing.
      </>
    ),
    es: (
      <>
        No te irás con cara de transformación total. Te irás viéndote{" "}
        <I>impecable</I>&nbsp;&mdash; como la versión de ti que siempre supo lo
        que hacía.
      </>
    ),
  },
  approachTitle: { en: "MY APPROACH", es: "MI ENFOQUE" },
  studioTitle: { en: "IN THE STUDIO", es: "EN EL ESTUDIO" },
  cta: { en: "Let’s create your set", es: "Creemos tu set" },

  pillars: [
    {
      word: { en: "Soft", es: "Suave" },
      body: {
        en: "Lashes that feel like a part of you, not on top of you. Built around your eye shape, your natural fan, your daily life — never one-size-fits-all.",
        es: "Pestañas que se sienten parte de ti, no encima de ti. Diseñadas según la forma de tus ojos, tu abanico natural y tu día a día — nunca un modelo único para todas.",
      },
    },
    {
      word: { en: "Luxurious", es: "Lujosa" },
      body: {
        en: "Time, attention, and detail in every appointment. No rush, no shortcuts, no two sets exactly alike.",
        es: "Tiempo, atención y detalle en cada cita. Sin prisas, sin atajos, sin dos sets exactamente iguales.",
      },
    },
    {
      word: { en: "Elevated", es: "Elevada" },
      body: {
        en: "A private studio, an intimate experience, and a finish that holds up beautifully — for the client who notices the details.",
        es: "Un estudio privado, una experiencia íntima y un acabado que se mantiene hermoso — para la clienta que nota los detalles.",
      },
    },
  ],

  studio: [
    {
      title: { en: "Private", es: "Privado" },
      body: {
        en: "One client at a time. No extra guests, no phones — just your appointment, undivided.",
        es: "Una clienta a la vez. Sin acompañantes, sin celulares — solo tu cita, con toda la atención.",
      },
    },
    {
      title: { en: "Bespoke", es: "A Tu Medida" },
      body: {
        en: "Every set custom-built for your eye shape and the look you want. Soft natural to fluttery dramatic — your call.",
        es: "Cada set se diseña para la forma de tus ojos y el look que quieres. Desde natural y suave hasta dramático y ligero — tú decides.",
      },
    },
    {
      title: { en: "Personal", es: "Personal" },
      body: {
        en: "Booking happens by Instagram DM, so we stay connected from your first message through your next fill.",
        es: "La reserva se hace por DM de Instagram, así seguimos en contacto desde tu primer mensaje hasta tu siguiente relleno.",
      },
    },
  ],
};

/* ===========================================================================
 * /gallery — Portfolio
 * ========================================================================= */

export const GALLERY_PAGE = {
  eyebrow: { en: "Selected Work", es: "Trabajo Seleccionado" },
  heading: { en: "PORTFOLIO", es: "PORTAFOLIO" },
  intro: {
    en: "A look at recent sets — each one custom-built to its client. Soft natural to dramatic fluttery, never one-size-fits-all.",
    es: "Un vistazo a sets recientes — cada uno diseñado para su clienta. Desde natural y suave hasta dramático y ligero, nunca un modelo único para todas.",
  },
  moreOnIg: { en: "More on Instagram", es: "Más en Instagram" },
  followAlong: { en: "Follow Along", es: "Sígueme" },
  followBody: {
    en: `New sets posted weekly. Follow @${IG} to see the latest work — and DM “${KEY}” to book your own.`,
    es: `Publico sets nuevos cada semana. Sigue a @${IG} para ver el trabajo más reciente — y envía “${KEY}” por DM para reservar el tuyo.`,
  },
  followCta: { en: "Follow on Instagram", es: "Sígueme en Instagram" },
} satisfies Record<string, CopyPair>;

/* ===========================================================================
 * /book
 * ========================================================================= */

export const BOOK_PAGE = {
  eyebrow: { en: "Begin Here", es: "Empieza Aquí" },
  heading: { en: "BOOK", es: "RESERVAR" },
  intro: {
    en: "By appointment, by DM, by Dora — the way she likes it. Personal, considered, never rushed.",
    es: "Con cita, por DM, con Dora — como a ella le gusta. Personal, pensado, nunca apresurado.",
  },
  copyThisDm: { en: "Copy this DM", es: "Copia este mensaje" },
  dmTemplate: {
    en: `“${KEY} · Full Set Volume · this Friday or Saturday”`,
    es: `“${KEY} · Set Completo de Volumen · este viernes o sábado”`,
  },
  sendTo: {
    en: (
      <>
        Send to{" "}
        <a
          href={BRAND.booking.dmUrl}
          target="_blank"
          rel="noreferrer noopener"
          className="text-accent hover:underline"
        >
          @{IG}
        </a>
        . Swap in the service you want and the date windows that work for you
        &mdash; Dora will take it from there.
      </>
    ),
    es: (
      <>
        Envíalo a{" "}
        <a
          href={BRAND.booking.dmUrl}
          target="_blank"
          rel="noreferrer noopener"
          className="text-accent hover:underline"
        >
          @{IG}
        </a>
        . Cambia el servicio que quieres y los días que te funcionen &mdash;
        Dora se encarga del resto.
      </>
    ),
  },
  howItWorks: { en: "HOW IT WORKS", es: "CÓMO FUNCIONA" },
  beforeYouBook: { en: "BEFORE YOU BOOK", es: "ANTES DE RESERVAR" },

  steps: [
    {
      title: { en: "Send the DM", es: "Envía el Mensaje" },
      body: {
        en: "Tell Dora what you want and which days work. The template above is all you need to start.",
        es: "Dile a Dora qué quieres y qué días te funcionan. La plantilla de arriba es todo lo que necesitas para empezar.",
      },
    },
    {
      title: { en: "Confirm with Deposit", es: "Confirma con Depósito" },
      body: {
        en: `A non-refundable Zelle deposit secures your slot — Zelle ${ZELLE}. Confirm your date in DM before sending.`,
        es: `Un depósito no reembolsable por Zelle asegura tu lugar — Zelle ${ZELLE}. Confirma tu fecha por DM antes de enviarlo.`,
      },
    },
    {
      title: { en: "Arrive Glowing", es: "Llega Radiante" },
      body: {
        en: "Arrive 15 minutes early with a clean face. The rest is on Dora.",
        es: "Llega 15 minutos antes con el rostro limpio. Del resto se encarga Dora.",
      },
    },
  ],

  quickLinks: [
    {
      label: { en: `$${DEP} Zelle deposit`, es: `Depósito Zelle de $${DEP}` },
      note: { en: "Non-refundable", es: "No reembolsable" },
    },
    {
      label: {
        en: "48-hour cancel window",
        es: "Ventana de cancelación de 48 horas",
      },
      note: { en: "Full policy", es: "Política completa" },
    },
    {
      label: { en: "Browse the menu", es: "Explora el menú" },
      note: { en: "Services & pricing", es: "Servicios y precios" },
    },
    {
      label: { en: "First-visit guide", es: "Guía de primera visita" },
      note: { en: "Read before booking", es: "Léelo antes de reservar" },
    },
  ],
};

/* ===========================================================================
 * /new-clients
 * ========================================================================= */

export const NEW_CLIENTS_PAGE = {
  eyebrow: { en: "Welcome", es: "Bienvenida" },
  heading: { en: "NEW CLIENTS", es: "CLIENTAS NUEVAS" },
  intro: {
    en: "Welcome gorgeous — everything you need before your first visit is right here. A few minutes now means a smooth, relaxing, and beautiful appointment when you arrive.",
    es: "Bienvenida hermosa — todo lo que necesitas antes de tu primera visita está aquí. Unos minutos ahora significan una cita tranquila, relajante y hermosa cuando llegues.",
  },
  howToBook: { en: "How To Book", es: "Cómo Reservar" },
  beforeAppointment: {
    en: "Before Your Appointment",
    es: "Antes de Tu Cita",
  },
  studioPolicies: { en: "Studio Policies", es: "Políticas del Estudio" },
  cta: { en: "Ready when you are", es: "Lista cuando tú lo estés" },

  steps: [
    {
      title: { en: "Reach Out", es: "Escríbele" },
      body: {
        en: `Send a DM with "${KEY}" to @${IG} on Instagram. Dora books exclusively through DMs so she can tailor every appointment to you.`,
        es: `Envía un DM con "${KEY}" a @${IG} en Instagram. Dora reserva exclusivamente por DM para poder adaptar cada cita a ti.`,
      },
    },
    {
      title: { en: "Secure Your Slot", es: "Asegura Tu Lugar" },
      body: {
        en: `A non-refundable Zelle deposit confirms your appointment and goes toward your total — $${DEP} for Lash Extensions, with other amounts confirmed when you book. Lash Fills don't require a deposit. Zelle: ${ZELLE} — confirm your date in DM before sending.`,
        es: `Un depósito no reembolsable por Zelle confirma tu cita y se aplica a tu total — $${DEP} para extensiones de pestañas; los demás montos se confirman al reservar. Los rellenos no requieren depósito. Zelle: ${ZELLE} — confirma tu fecha por DM antes de enviarlo.`,
      },
    },
    {
      title: { en: "Sign Your Consent Form", es: "Firma Tu Consentimiento" },
      body: {
        en: "First-time clients complete a quick consent form covering health history, allergies, and aftercare. It's sent with your confirmation or signed in studio.",
        es: "Las clientas primerizas completan un breve formulario de consentimiento sobre historial de salud, alergias y cuidados posteriores. Se envía con tu confirmación o se firma en el estudio.",
      },
    },
  ],

  precare: [
    {
      en: "Arrive 15 minutes early so we have time for a thorough consultation.",
      es: "Llega 15 minutos antes para que tengamos tiempo de una consulta completa.",
    },
    {
      en: "Come with a clean face — no makeup, mascara, contacts, or oil-based products near the eyes.",
      es: "Ven con el rostro limpio — sin maquillaje, rímel, lentes de contacto ni productos con aceite cerca de los ojos.",
    },
    {
      en: "Avoid caffeine, energy drinks, and stimulants — comfort matters during a 2–3 hour appointment.",
      es: "Evita la cafeína, las bebidas energéticas y los estimulantes — la comodidad importa durante una cita de 2–3 horas.",
    },
    {
      en: "Wear warm, comfortable clothing.",
      es: "Usa ropa abrigada y cómoda.",
    },
    {
      en: "Please reschedule if you have pink eye, a stye, or any eye irritation.",
      es: "Por favor reprograma si tienes conjuntivitis, un orzuelo o cualquier irritación ocular.",
    },
    {
      en: "Do not curl your lashes before the appointment.",
      es: "No rices tus pestañas antes de la cita.",
    },
  ] satisfies CopyPair[],

  policies: [
    {
      title: { en: "Cancellations", es: "Cancelaciones" },
      body: {
        en: "48 hours advance notice is requested. Less than 24 hours is charged 50% of the service; no-shows are charged 100% and lose future booking privileges.",
        es: "Se solicitan 48 horas de aviso. Menos de 24 horas se cobra el 50% del servicio; las inasistencias se cobran al 100% y pierden el derecho a reservar en el futuro.",
      },
    },
    {
      title: { en: "Deposits", es: "Depósitos" },
      body: {
        en: `A non-refundable Zelle deposit (${ZELLE}) secures every appointment except Lash Fills, which can be booked without one. Lash Extensions deposit is $${DEP}; other amounts are confirmed when you book.`,
        es: `Un depósito no reembolsable por Zelle (${ZELLE}) asegura toda cita excepto los rellenos, que se pueden reservar sin él. El depósito para extensiones de pestañas es de $${DEP}; los demás montos se confirman al reservar.`,
      },
    },
    {
      title: { en: "No Extra Guests", es: "Sin Acompañantes" },
      body: {
        en: "The studio is your private space — please make arrangements ahead of time. No additional guests can be accommodated.",
        es: "El estudio es tu espacio privado — por favor haz tus arreglos con anticipación. No se puede recibir a ningún acompañante.",
      },
    },
    {
      title: { en: "No Phone Use", es: "Sin Uso de Celular" },
      body: {
        en: "Phones must stay down during your appointment. Your eyes stay closed and still so Dora can do her best, safest work.",
        es: "El celular debe permanecer guardado durante tu cita. Tus ojos se mantienen cerrados y quietos para que Dora haga su mejor trabajo, de la forma más segura.",
      },
    },
    {
      title: { en: "Fills", es: "Rellenos" },
      body: {
        en: "Fills require 30–50% of lashes still on. Four or more weeks since your last set is considered a new full set, not a fill.",
        es: "Los rellenos requieren que conserves entre el 30 y el 50% de tus pestañas. Cuatro semanas o más desde tu último set se considera un set completo nuevo, no un relleno.",
      },
    },
    {
      title: { en: "Payment", es: "Pago" },
      body: {
        en: `Deposits are paid via Zelle (${ZELLE}). The remaining balance is due the day of your appointment by Zelle or cash.`,
        es: `Los depósitos se pagan por Zelle (${ZELLE}). El saldo restante se paga el día de tu cita por Zelle o en efectivo.`,
      },
    },
  ],
};

/* ===========================================================================
 * /aftercare
 * ========================================================================= */

export const AFTERCARE_PAGE = {
  eyebrow: { en: "Keep Them Perfect", es: "Mantenlas Perfectas" },
  heading: { en: "AFTERCARE", es: "CUIDADOS" },
  intro: {
    en: "How you care for your lashes and brows in the first 24–48 hours decides how long they last. A little intention now buys you weeks of perfect.",
    es: "La forma en que cuidas tus pestañas y cejas en las primeras 24–48 horas decide cuánto duran. Un poco de atención ahora te da semanas de perfección.",
  },
  doLabel: { en: "Do", es: "Sí" },
  avoidLabel: { en: "Avoid", es: "Evita" },
  whenToReachOut: { en: "WHEN TO REACH OUT", es: "CUÁNDO ESCRIBIRME" },
  reachOutIntro: {
    en: "DM Dora within 72 hours if you notice:",
    es: "Escríbele a Dora por DM dentro de 72 horas si notas:",
  },
  reachOutList: [
    {
      en: "Redness or irritation lasting more than 24 hours.",
      es: "Enrojecimiento o irritación que dure más de 24 horas.",
    },
    {
      en: "Itching, swelling, or signs of an allergic reaction.",
      es: "Comezón, hinchazón o señales de una reacción alérgica.",
    },
    {
      en: "Loss of more than half of a fresh set within the first week.",
      es: "Pérdida de más de la mitad de un set nuevo durante la primera semana.",
    },
  ] satisfies CopyPair[],
  ctaHeading: { en: "Time for a fill?", es: "¿Hora de un relleno?" },
  ctaNote: {
    en: "Book every two weeks to keep your set full",
    es: "Reserva cada dos semanas para mantener tu set lleno",
  },

  groups: [
    {
      category: { en: "Lashes", es: "Pestañas" },
      intro: {
        en: "The first 24 hours decide retention. Treat your set gently and it stays full for weeks.",
        es: "Las primeras 24 horas deciden la retención. Trata tu set con delicadeza y se mantendrá lleno por semanas.",
      },
      doList: [
        {
          en: "Cleanse daily with a foaming, lash-safe cleanser.",
          es: "Limpia a diario con un limpiador en espuma seguro para pestañas.",
        },
        {
          en: "Brush gently with a spoolie morning and night.",
          es: "Cepilla con suavidad usando un spoolie, mañana y noche.",
        },
        {
          en: "Sleep on your back when possible.",
          es: "Duerme boca arriba cuando te sea posible.",
        },
        {
          en: "Book your fill every two weeks to keep the set even.",
          es: "Reserva tu relleno cada dos semanas para mantener el set parejo.",
        },
      ],
      avoidList: [
        {
          en: "No water, steam, sweat, or sauna for the first 24 hours.",
          es: "Nada de agua, vapor, sudor ni sauna durante las primeras 24 horas.",
        },
        {
          en: "No oil-based makeup, cleansers, or removers anywhere near the eye.",
          es: "Nada de maquillaje, limpiadores ni desmaquillantes con aceite cerca del ojo.",
        },
        {
          en: "No mascara — especially waterproof.",
          es: "Nada de rímel — especialmente a prueba de agua.",
        },
        {
          en: "No eyelash curlers, rubbing, picking, or pulling.",
          es: "Nada de rizadores, ni frotar, picar o jalar las pestañas.",
        },
      ],
    },
    {
      category: {
        en: "Brows · Lamination & Tint",
        es: "Cejas · Laminado y Tinte",
      },
      intro: {
        en: "Freshly laminated and tinted brows need 48 hours to fully set. Keep them dry and undisturbed.",
        es: "Las cejas recién laminadas y teñidas necesitan 48 horas para fijarse por completo. Mantenlas secas y sin tocarlas.",
      },
      doList: [
        {
          en: "Keep brows dry for the first 24 hours.",
          es: "Mantén las cejas secas durante las primeras 24 horas.",
        },
        {
          en: "Brush daily with a spoolie to keep the shape lifted.",
          es: "Cepíllalas a diario con un spoolie para mantener la forma levantada.",
        },
        {
          en: "Apply any conditioning serum sent home with you.",
          es: "Aplica el suero acondicionador que te haya enviado a casa.",
        },
      ],
      avoidList: [
        {
          en: "No makeup on brows for 48 hours.",
          es: "Nada de maquillaje en las cejas durante 48 horas.",
        },
        {
          en: "No retinol, AHA, BHA, or active exfoliants near brows for 7 days.",
          es: "Nada de retinol, AHA, BHA ni exfoliantes activos cerca de las cejas por 7 días.",
        },
        {
          en: "No rubbing, scrubbing, or sleeping face-down on a fresh set.",
          es: "No frotes, no talles ni duermas boca abajo con un servicio recién hecho.",
        },
        {
          en: "No oil-based skincare crossing the brow line.",
          es: "Nada de skincare con aceite que cruce la línea de la ceja.",
        },
      ],
    },
    {
      category: { en: "Wax & Clean Up", es: "Cera y Limpieza" },
      intro: {
        en: "Freshly waxed skin is sensitive for the first day. Keep it calm, clean, and out of heat.",
        es: "La piel recién depilada con cera está sensible el primer día. Mantenla tranquila, limpia y lejos del calor.",
      },
      doList: [
        {
          en: "Keep the area clean and bare of makeup for 24 hours.",
          es: "Mantén la zona limpia y sin maquillaje durante 24 horas.",
        },
        {
          en: "Apply a cool compress if any redness or sensitivity appears.",
          es: "Aplica una compresa fría si aparece enrojecimiento o sensibilidad.",
        },
      ],
      avoidList: [
        {
          en: "No heat, sun, saunas, or hot showers for 24 hours.",
          es: "Nada de calor, sol, sauna ni duchas calientes durante 24 horas.",
        },
        {
          en: "No exfoliants, scrubs, or active skincare for 24–48 hours.",
          es: "Nada de exfoliantes, scrubs ni skincare activo durante 24–48 horas.",
        },
        {
          en: "No touching, picking, or pressing on the waxed area.",
          es: "No toques, no piques ni presiones la zona depilada.",
        },
      ],
    },
  ],
};

/* ===========================================================================
 * /policies
 * ========================================================================= */

export const POLICIES_PAGE = {
  eyebrow: { en: "The Fine Print", es: "La Letra Pequeña" },
  heading: { en: "POLICIES", es: "POLÍTICAS" },
  intro: {
    en: "A few essentials so your appointment runs beautifully. Please read before booking — submitting a deposit means you’ve accepted the policies below.",
    es: "Algunos puntos esenciales para que tu cita salga preciosa. Por favor léelos antes de reservar — enviar un depósito significa que aceptas las políticas de abajo.",
  },
  bookingTitle: { en: "BOOKING", es: "RESERVAS" },
  studioTitle: { en: "AT THE STUDIO", es: "EN EL ESTUDIO" },
  ctaHeading: { en: "Questions?", es: "¿Preguntas?" },
  ctaBody: {
    en: "DM Dora and she’ll walk you through anything before you book.",
    es: "Escríbele a Dora por DM y te explicará lo que necesites antes de reservar.",
  },

  booking: [
    {
      title: {
        en: "Cancellations & Rescheduling",
        es: "Cancelaciones y Reprogramaciones",
      },
      body: {
        en: (
          <>
            <p>
              Your appointment time is reserved for you alone. I respectfully
              request at least <S>48 hours notice</S> for any cancellation or
              reschedule. Less than 24 hours notice results in a{" "}
              <S>50% charge</S> of the reserved service.
            </p>
            <p className="mt-3">
              Your deposit can be <S>transferred once</S> to a new appointment
              if you reschedule in time. If you miss that rescheduled
              appointment, the deposit is <S>forfeited</S> and a new deposit is
              required to rebook.
            </p>
          </>
        ),
        es: (
          <>
            <p>
              Tu horario de cita está reservado solo para ti. Te pido
              respetuosamente al menos <S>48 horas de aviso</S> para cualquier
              cancelación o reprogramación. Menos de 24 horas de aviso resulta
              en un <S>cargo del 50%</S> del servicio reservado.
            </p>
            <p className="mt-3">
              Tu depósito se puede <S>transferir una sola vez</S> a una nueva
              cita si reprogramas a tiempo. Si faltas a esa cita reprogramada,
              el depósito se <S>pierde</S> y se requiere uno nuevo para volver a
              reservar.
            </p>
          </>
        ),
      },
    },
    {
      title: { en: "Deposits & Payment", es: "Depósitos y Pago" },
      body: {
        en: (
          <>
            <p>
              A <S>non-refundable deposit</S> secures every appointment{" "}
              <S>except Lash Fills</S>, which can be booked without one. Lash
              Extensions during the current $50 promotion require a{" "}
              <S>${DEP} Zelle deposit</S>; deposit amounts for other services
              are confirmed when you reach out to book.
            </p>
            <p className="mt-3">
              Deposits are accepted <S>via Zelle only</S> — send to{" "}
              <S>{ZELLE}</S>. The remaining balance is due the day of your
              appointment, by Zelle or cash. <S>Sunday appointments</S> are by
              request and carry a <S>$20 surcharge</S> on top of the service
              price.
            </p>
          </>
        ),
        es: (
          <>
            <p>
              Un <S>depósito no reembolsable</S> asegura toda cita{" "}
              <S>excepto los rellenos</S>, que se pueden reservar sin él. Las
              extensiones de pestañas durante la promoción actual de $50
              requieren un <S>depósito de ${DEP} por Zelle</S>; los montos de
              depósito para otros servicios se confirman cuando escribes para
              reservar.
            </p>
            <p className="mt-3">
              Los depósitos se aceptan <S>únicamente por Zelle</S> — envíalos al{" "}
              <S>{ZELLE}</S>. El saldo restante se paga el día de tu cita, por
              Zelle o en efectivo. Las <S>citas de domingo</S> son por solicitud
              y llevan un <S>recargo de $20</S> adicional al precio del
              servicio.
            </p>
          </>
        ),
      },
    },
    {
      title: { en: "No-Show", es: "Inasistencia" },
      body: {
        en: (
          <p>
            No-shows are charged <S>100% of the reserved service amount</S> and
            lose the privilege of booking with Dora. Life happens &mdash; reach
            out at least 48 hours ahead and she&rsquo;ll work with you.
          </p>
        ),
        es: (
          <p>
            Las inasistencias se cobran al{" "}
            <S>100% del monto del servicio reservado</S> y pierden el privilegio
            de reservar con Dora. La vida pasa &mdash; avísale con al menos 48
            horas de anticipación y ella verá cómo acomodarte.
          </p>
        ),
      },
    },
    {
      title: { en: "Refunds", es: "Reembolsos" },
      body: {
        en: (
          <p>
            <S>All sales are final</S> and services are non-refundable. Deposit
            terms are covered above. If anything about your service needs
            attention, message Dora within 72 hours so she can address it
            directly.
          </p>
        ),
        es: (
          <p>
            <S>Todas las ventas son finales</S> y los servicios no son
            reembolsables. Los términos del depósito se explican arriba. Si algo
            de tu servicio necesita atención, escríbele a Dora dentro de 72
            horas para que pueda resolverlo directamente.
          </p>
        ),
      },
    },
  ],

  studio: [
    {
      title: { en: "In the Studio", es: "En el Estudio" },
      body: {
        en: (
          <p>
            The studio is your private space. <S>No additional guests</S> can be
            accommodated, and <S>phones go down</S> during your appointment
            &mdash; your eyes stay closed and still so Dora can do her best,
            safest work. Please <S>arrive 15 minutes early</S> for a thorough
            consultation.
          </p>
        ),
        es: (
          <p>
            El estudio es tu espacio privado. No se puede recibir a{" "}
            <S>ningún acompañante</S>, y el <S>celular se guarda</S> durante tu
            cita &mdash; tus ojos se mantienen cerrados y quietos para que Dora
            haga su mejor trabajo, de la forma más segura. Por favor{" "}
            <S>llega 15 minutos antes</S> para una consulta completa.
          </p>
        ),
      },
    },
    {
      title: { en: "Before Your Appointment", es: "Antes de Tu Cita" },
      body: {
        en: (
          <>
            <p>
              Please reschedule if you have any of the following: pink eye, eye
              stye or cyst, eye soreness, facial skin infection, sensitive skin
              or eyes, recent facial surgery, recent microblading or permanent
              makeup, recent retinol use, or are undergoing chemotherapy.
            </p>
            <p className="mt-3">
              Come with a clean face &mdash; no makeup, contacts, or oil-based
              products near the eyes &mdash; and avoid caffeine and stimulants
              beforehand. Warm, comfortable clothing is ideal.
            </p>
          </>
        ),
        es: (
          <>
            <p>
              Por favor reprograma si presentas cualquiera de lo siguiente:
              conjuntivitis, orzuelo o quiste en el ojo, dolor ocular, infección
              en la piel del rostro, piel u ojos sensibles, cirugía facial
              reciente, microblading o maquillaje permanente reciente, uso
              reciente de retinol, o si estás en tratamiento de quimioterapia.
            </p>
            <p className="mt-3">
              Ven con el rostro limpio &mdash; sin maquillaje, lentes de
              contacto ni productos con aceite cerca de los ojos &mdash; y evita
              la cafeína y los estimulantes antes de la cita. La ropa abrigada y
              cómoda es lo ideal.
            </p>
          </>
        ),
      },
    },
    {
      title: { en: "Photography & Content", es: "Fotografía y Contenido" },
      body: {
        en: (
          <p>
            Dora films and photographs her work for Instagram and her other
            platforms. If anything from your appointment may be shared publicly,{" "}
            <S>she&rsquo;ll ask you in person</S> and have you sign a consent
            form before anything is posted.
          </p>
        ),
        es: (
          <p>
            Dora graba y fotografía su trabajo para Instagram y sus otras
            plataformas. Si algo de tu cita pudiera compartirse públicamente,{" "}
            <S>te lo preguntará en persona</S> y te pedirá firmar un formulario
            de consentimiento antes de publicar cualquier cosa.
          </p>
        ),
      },
    },
    {
      title: { en: "Age Policy", es: "Política de Edad" },
      body: {
        en: (
          <p>
            Clients{" "}
            <S>under 18 are welcome with a parent or guardian present</S> and a
            signed consent form on file. Please mention this when you book so
            the appointment can be set up appropriately.
          </p>
        ),
        es: (
          <p>
            Las clientas{" "}
            <S>
              menores de 18 años son bienvenidas con su madre, padre o tutor
              presente
            </S>{" "}
            y un formulario de consentimiento firmado en el archivo. Por favor
            menciónalo al reservar para preparar la cita adecuadamente.
          </p>
        ),
      },
    },
  ],
};

/* ===========================================================================
 * /contact
 * ========================================================================= */

export const CONTACT_PAGE = {
  eyebrow: { en: "Get in Touch", es: "Ponte en Contacto" },
  heading: { en: "CONTACT", es: "CONTACTO" },
  intro: {
    en: "Dora books and answers questions personally through Instagram. Tap below to reach her — or scroll for studio details, hours, and socials.",
    es: "Dora reserva y responde preguntas personalmente por Instagram. Toca abajo para escribirle — o desliza para ver los datos del estudio, el horario y sus redes.",
  },
  bookingTitle: { en: "BOOKING", es: "RESERVAS" },
  bookingBody: {
    en: "Dora books exclusively through Instagram DMs. It keeps things personal and lets her tailor every appointment to you.",
    es: "Dora reserva exclusivamente por DM de Instagram. Así todo se mantiene personal y puede adaptar cada cita a ti.",
  },
  dmNote: {
    en: `DM “${KEY}” to reserve · Answered within 24 hrs`,
    es: `Envía “${KEY}” por DM para reservar · Respondo en menos de 24 hrs`,
  },
  studioTitle: { en: "STUDIO", es: "ESTUDIO" },
  addressLabel: { en: "Address", es: "Dirección" },
  openInMaps: { en: "Open in Maps", es: "Abrir en Maps" },
  accessLabel: { en: "Access", es: "Acceso" },
  accessBody: {
    en: "By appointment only. Detailed building entry, parking, and suite-finding instructions are sent with your booking confirmation.",
    es: "Solo con cita previa. Las instrucciones detalladas de entrada al edificio, estacionamiento y cómo encontrar la suite se envían con tu confirmación de reserva.",
  },
  hoursTitle: { en: "HOURS", es: "HORARIO" },
  connectTitle: { en: "CONNECT", es: "REDES" },
  faqTitle: { en: "FAQ", es: "PREGUNTAS FRECUENTES" },

  faq: [
    {
      q: {
        en: "How long does a full lash set take?",
        es: "¿Cuánto dura un set completo de pestañas?",
      },
      a: {
        en: "Plan for 2.5 – 3 hours, depending on the volume you choose. Time on the bed is part of the experience — Dora won't rush.",
        es: "Calcula de 2.5 a 3 horas, según el volumen que elijas. El tiempo en la camilla es parte de la experiencia — Dora no se apresura.",
      },
    },
    {
      q: {
        en: "Do you take walk-ins?",
        es: "¿Atiendes sin cita?",
      },
      a: {
        en: "By appointment only. DM Dora at least a week ahead so she can fit you in — her calendar fills quickly.",
        es: "Solo con cita previa. Escríbele a Dora por DM al menos una semana antes para que pueda acomodarte — su calendario se llena rápido.",
      },
    },
    {
      q: {
        en: "What if I'm running late?",
        es: "¿Qué pasa si voy tarde?",
      },
      a: {
        en: "Send a heads-up DM as soon as you know. Dora will accommodate when she can; significantly late arrivals may need to reschedule so the next client's time isn't impacted. See Policies for the full window.",
        es: "Avísale por DM en cuanto lo sepas. Dora te acomodará cuando le sea posible; si el retraso es considerable puede que debas reprogramar para no afectar el tiempo de la siguiente clienta. Consulta las Políticas para ver la ventana completa.",
      },
    },
    {
      q: {
        en: "What's the difference between a Full Set and a Fill?",
        es: "¿Cuál es la diferencia entre un Set Completo y un Relleno?",
      },
      a: {
        en: "A Full Set is a fresh application from scratch. A Fill refills a set you already have, as long as 30 – 50% of the lashes are still on. More than four weeks since your last set counts as a new Full Set, not a Fill.",
        es: "Un Set Completo es una aplicación nueva desde cero. Un Relleno rellena un set que ya tienes, siempre que conserves entre el 30 y el 50% de las pestañas. Más de cuatro semanas desde tu último set cuenta como Set Completo nuevo, no como Relleno.",
      },
    },
  ],
};

/* ===========================================================================
 * Error and not-found screens
 * ========================================================================= */

export const NOT_FOUND_PAGE = {
  heading: { en: "Page Not Found", es: "Página No Encontrada" },
  body: {
    en: "This page wandered off — but you’re only a tap away from booking your next set.",
    es: "Esta página se perdió — pero estás a un toque de reservar tu próximo set.",
  },
} satisfies Record<string, CopyPair>;

export const ERROR_PAGE = {
  heading: { en: "Something went wrong", es: "Algo salió mal" },
  body: {
    en: "Sorry about that — please try again. If it keeps happening, you can always reach Dora directly on Instagram.",
    es: "Lo sentimos — por favor inténtalo de nuevo. Si sigue ocurriendo, siempre puedes escribirle a Dora directamente por Instagram.",
  },
  tryAgain: { en: "Try Again", es: "Intentar de Nuevo" },
} satisfies Record<string, CopyPair>;
