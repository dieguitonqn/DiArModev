
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./componets/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DiArMo dev",
  description: "Desarrollo de soluciones web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">

<head>
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="DiArMo dev" />
        <meta property="og:locale" content="es-AR" />
        <meta property="og:url" content="https://mildestinos.tur.ar" />
        <meta property="og:title" content="DiArMo dev" />
        <meta
          property="og:description"
          content="Desarrollador de soluciones web totalmente a medida, simples y potentes ."
        />
        <meta
          property="og:image"
          content="https://diarmodev.com/diarmodev_logo_trans.png"
        />
        <meta
          property="og:image:width"
          content="1599"
        />
        <meta
          property="og:image:height"
          content="1599"
        />
        <meta
          property="og:image:alt"
          content="DiArMo dev logo"
        />
        <meta
          property="og:image:type"
          content="image/png"
        />
        
        
        
      </head>

      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
