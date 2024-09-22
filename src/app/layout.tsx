import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Head from "next/head";
const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "AZWS Web Studio | Siti Web e App Mobile Personalizzati",
  description: "Antonio Zuccon Ghiotto è un web developer e web designer con sede a Vicenza, specializzato nella creazione di siti web e app mobile personalizzate. Utilizzo React, Next.js, Expo, Node.js, MongoDB e Sanity per offrire soluzioni performanti e scalabili.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="h-max" lang="en">
      <Head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" /> 
      </Head>
      <body className={`${poppins.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
