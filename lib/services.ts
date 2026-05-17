export type ServiceCategory =
  | "lashes"
  | "brows"
  | "lift"
  | "tint"
  | "package";

export type Service = {
  id: string;
  nameEn: string;
  nameEs: string;
  priceUsd: number;
  promo?: { priceUsd: number; until: string };
  category: ServiceCategory;
};

export const SERVICES: Service[] = [
  {
    id: "lash-set",
    nameEn: "Lash Set (Full Set)",
    nameEs: "Aplicación de pestañas (Conjunto Completo)",
    priceUsd: 140,
    promo: { priceUsd: 50, until: "2026-12-31" },
    category: "lashes",
  },
  {
    id: "lash-fill-1wk",
    nameEn: "Lash Fill (1 week)",
    nameEs: "Llenar (1 semana)",
    priceUsd: 35,
    category: "lashes",
  },
  {
    id: "lash-fill-2wk",
    nameEn: "Lash Fill (2 weeks)",
    nameEs: "Llenar (2 semanas)",
    priceUsd: 45,
    category: "lashes",
  },
  {
    id: "lash-fill-3wk",
    nameEn: "Lash Fill (3 weeks)",
    nameEs: "Llenar (3 semanas)",
    priceUsd: 70,
    category: "lashes",
  },
  {
    id: "lash-removal",
    nameEn: "Lash Extension Removal",
    nameEs: "Eliminación de extensiones de pestañas",
    priceUsd: 45,
    category: "lashes",
  },
  {
    id: "brow-lamination",
    nameEn: "Brow Lamination",
    nameEs: "Laminación de cejas",
    priceUsd: 90,
    category: "brows",
  },
  {
    id: "lash-lift",
    nameEn: "Lash Lift",
    nameEs: "Levantamiento de pestañas",
    priceUsd: 90,
    category: "lift",
  },
  {
    id: "tint",
    nameEn: "Tint",
    nameEs: "Tinte",
    priceUsd: 45,
    category: "tint",
  },
  {
    id: "brow-tint-package",
    nameEn: "Brow Lamination + Tint",
    nameEs: "Laminación de cejas + Tinte",
    priceUsd: 125,
    category: "package",
  },
  {
    id: "lift-tint-package",
    nameEn: "Lash Lift + Tint",
    nameEs: "Levantamiento de pestañas + Tinte",
    priceUsd: 125,
    category: "package",
  },
  {
    id: "full-package",
    nameEn: "Brow Lamination + Lash Lift + Tint",
    nameEs: "Laminación de cejas + Levantamiento de pestañas + Tinte",
    priceUsd: 215,
    category: "package",
  },
];

export const LASH_STYLES = [
  "Classic",
  "Hybrid",
  "Wispy",
  "Mega Volume",
] as const;

export const LASH_ADDONS = ["Bottom lashes", "Brown lashes"] as const;
