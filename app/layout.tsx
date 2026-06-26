import type { Metadata } from "next";
import { Inter, Space_Grotesk, Poppins, Raleway } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AgentComercial from "./components/AgentComercial";
import CookieBanner from "./components/CookieBanner";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});
// Raleway 300 = substituta direta da Gordita Light (geométrica, proporções idênticas)
const raleway = Raleway({
  variable: "--font-gordita",
  subsets: ["latin"],
  weight: ["300"],
});

const BASE_URL = "https://triade-ia-site.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "TRÍADE IA | Consultoria AI-First em Itumbiara, Goiás",
    template: "%s | TRÍADE IA",
  },
  description:
    "Ajudamos empresas a aumentar produtividade, reduzir custos e acelerar crescimento através de estratégias AI-First. Diagnóstico, Roadmap e Implementação — baseados em Itumbiara, Goiás.",
  keywords: [
    "inteligência artificial Itumbiara",
    "IA para empresas Goiás",
    "consultoria AI-First",
    "transformação digital empresarial Goiás",
    "automação empresarial Itumbiara",
    "IA para agronegócio Goiás",
    "IA para clínicas Goiás",
    "IA para contabilidade",
    "diagnóstico AI-First",
    "TRÍADE IA",
  ],
  authors: [{ name: "TRÍADE IA" }],
  creator: "TRÍADE IA",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: BASE_URL,
    siteName: "TRÍADE IA",
    title: "TRÍADE IA | Consultoria AI-First em Itumbiara, Goiás",
    description:
      "Ajudamos empresas a aumentar produtividade, reduzir custos e acelerar crescimento através de estratégias AI-First.",
  },
  twitter: {
    card: "summary_large_image",
    title: "TRÍADE IA | Consultoria AI-First",
    description:
      "Transformação empresarial com Inteligência Artificial — TRÍADE IA, Itumbiara, Goiás.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: { canonical: BASE_URL },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "TRÍADE IA",
  description:
    "Consultoria especializada em transformação AI-First baseada em Itumbiara, Goiás.",
  url: BASE_URL,
  telephone: "+55-64-9296-6118",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Itumbiara",
    addressRegion: "GO",
    addressCountry: "BR",
  },
  areaServed: ["Itumbiara", "Sul de Goiás", "Goiás"],
  serviceType: [
    "Consultoria em Inteligência Artificial",
    "Transformação Digital",
    "Automação Empresarial",
    "Diagnóstico AI-First",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${spaceGrotesk.variable} ${poppins.variable} ${raleway.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-navy text-ice font-sans antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <AgentComercial />
        <CookieBanner />
      </body>
    </html>
  );
}
