import type { Metadata } from "next";
import { Inter, Playfair_Display, Space_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
});

const spaceMono = Space_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Idol Agency — Agencia OFM para creadoras adultas con potencial",
  description:
    "Idol Agency ayuda a creadoras adultas a transformar deseo, contenido e imagen en una marca más rentable, estratégica y profesional.",
  keywords: [
    "OFM",
    "OnlyFans Management",
    "agencia OFM",
    "creadoras adultas",
    "contenido adulto",
    "creator management",
    "modelos",
    "influencer marketing",
    "monetización de contenido",
    "tráfico para creadoras",
    "adult creator management",
  ],
  openGraph: {
    title: "Idol Agency — Deseo, tráfico y dirección",
    description: "Agencia boutique para creadoras adultas con potencial.",
    type: "website",
    locale: "es_ES",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${playfair.variable} ${spaceMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
