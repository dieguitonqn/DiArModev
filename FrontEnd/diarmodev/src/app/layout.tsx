
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./componets/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DiArMo dev | Desarrollo de Soluciones Web a Medida",
  keywords: [
    "Desarrollador web",
    "Desarrollo web",
    "Soluciones web",
    "Desarrollo de software",
    "Programación",
    "Desarrollador de software",
    "Desarrollador frontend",
    "Desarrollador backend",
    "Desarrollador fullstack",
  ],
  authors: [
    {
      name: "Diego Morales",
      url: "https://diarmodev.com",
    },
  ],
  creator: "Diego Morales",
  publisher: "Diego Morales",
  applicationName: "DiArMo dev",
  description: "Desarrollo de soluciones web",
  openGraph: {
    title: "DiArMo dev | Desarrollo de Soluciones Web a Medida",
    description: "Desarrollador de soluciones web totalmente a medida, simples y potentes.",
    url: "https://diarmodev.com",
    siteName: "DiArMo dev",
    images: [{
      url:"https://diarmodev.com/og-logo.png",
      width: 1200,
      height: 630,
      alt: "DiArMo dev logo",
    }],
    locale: "es-AR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">


      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
