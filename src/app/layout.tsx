import type { Metadata } from "next";
import { Inter, Barlow_Condensed, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-barlow-condensed",
  display: "swap",
  preload: true,
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: "Duda Carbone · Atleta Profissional · XRL Sports",
  description:
    "Maria Eduarda Carbone, 15 anos. #1 COSAT. Ouro Jogos Sul-Americanos da Juventude. Roland Garros Junior Series. A maior promessa do tênis feminino brasileiro.",
  openGraph: {
    title: "Duda Carbone — Tenista Profissional",
    description:
      "15 anos. #1 COSAT. Ouro Sul-Americano. Roland Garros Junior. A maior aposta do tênis feminino brasileiro.",
    images: ["/foto_duda_vencedora.jpeg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Duda Carbone — Tenista Profissional",
    description: "15 anos. #1 COSAT. Ouro Sul-Americano. Roland Garros Junior. A maior aposta do tênis feminino brasileiro.",
    images: ["/foto_duda_vencedora.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${barlowCondensed.variable} ${spaceGrotesk.variable} h-full scroll-smooth`}
    >
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col antialiased"
        style={{ background: "oklch(0.10 0.04 260)", color: "oklch(0.97 0.005 85)" }}
      >
        {children}
      </body>
    </html>
  );
}
