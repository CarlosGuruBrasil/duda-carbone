import type { Metadata } from "next";
import { Inter, Space_Grotesk, Barlow_Condensed } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-barlow-condensed",
});

export const metadata: Metadata = {
  title: "Duda Carbone · Atleta Profissional · XRL Sports",
  description: "Maria Eduarda Carbone, 15 anos. #1 COSAT. Ouro Jogos Sul-Americanos da Juventude. Roland Garros Junior Series. A maior promessa do tênis feminino brasileiro.",
  openGraph: {
    title: "Duda Carbone — Tenista Profissional",
    description: "15 anos. #1 COSAT. Ouro Sul-Americano. Roland Garros Junior. A maior aposta do tênis feminino brasileiro.",
    images: ["/foto_duda_vencedora.jpeg"],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${spaceGrotesk.variable} ${barlowCondensed.variable} h-full scroll-smooth`}
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col bg-space-bg text-gray-100 font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
