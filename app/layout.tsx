import type { Metadata } from "next";
import { Cormorant_Garamond, Geist, Geist_Mono, Italianno } from "next/font/google";
import "./globals.css";
import { BRAND } from "@/lib/brand";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const italianno = Italianno({
  variable: "--font-italianno",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-editorial",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${BRAND.name} · Dallas, Texas`,
    template: `%s · ${BRAND.name}`,
  },
  description:
    "Lashes that feel like a little secret — soft, luxurious, elevated. Lash extensions, brow lamination, and lash lifts in Dallas, Texas.",
  metadataBase: new URL("https://adoralashesandbrows.com"),
  openGraph: {
    title: `${BRAND.name} · Dallas, Texas`,
    description:
      "An exclusive lash experience for the client who wants softness, precision, and sultry detail.",
    type: "website",
    locale: "en_US",
    alternateLocale: "es_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`dark ${geistSans.variable} ${geistMono.variable} ${italianno.variable} ${cormorant.variable}`}
    >
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
