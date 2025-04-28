
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./componets/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DiArMo dev | Desarrollo Web Profesional y Soluciones Digitales Personalizadas",
  keywords: [
    "Desarrollador web profesional",
    "Desarrollo web personalizado",
    "Soluciones web empresariales",
    "Desarrollo de software a medida",
    "Programación web moderna",
    "Desarrollador de software experto",
    "Desarrollo frontend React",
    "Desarrollo backend Node.js",
    "Desarrollador fullstack JavaScript",
    "Aplicaciones web responsivas",
    "Desarrollo web Argentina",
    "Optimización web",
    "SEO web",
    "Sitios web modernos",
    "E-commerce development"
  ],
  authors: [{ name: "Diego Morales", url: "https://diarmodev.com" }],
  creator: "Diego Morales",
  publisher: "Diego Morales",
  applicationName: "DiArMo dev",
  description: "Desarrollo de soluciones web profesionales y personalizadas. Especialista en crear aplicaciones web modernas, rápidas y escalables con las últimas tecnologías. Servicios de desarrollo frontend, backend y fullstack.",
  openGraph: {
    title: "DiArMo dev | Desarrollo Web Profesional y Soluciones Digitales Personalizadas",
    description: "Creo en soluciones web innovadoras y personalizadas que impulsan el crecimiento de cualquiera sea tu emprendimiento. Experto en desarrollo frontend, backend y aplicaciones web completas.",
    url: "https://diarmodev.com",
    siteName: "DiArMo dev",
    images: [{
      url: "https://diarmodev.com/og-logo.png",
      width: 1200,
      height: 630,
      alt: "DiArMo dev - Desarrollo Web Profesional"
    }],
    locale: "es-AR",
    type: "website"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'tu-código-de-verificación', // Reemplazar con tu código real
  }
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
