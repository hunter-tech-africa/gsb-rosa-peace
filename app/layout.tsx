import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Groupe Scolaire Bilingue Rosa Peace | École Maternelle & Primaire - Yaoundé",
  description: "GSB Rosa Peace - École bilingue d'excellence à Yaoundé-Tongolo. Formation maternelle et primaire en français et anglais. Discipline-Travail-Succès. Fondé en 2017.",
  keywords: "école bilingue Yaoundé, bilingual school Cameroon, école maternelle Yaoundé, primary school Yaoundé, Rosa Peace, GSB, education Cameroon",
  authors: [{ name: "GSB Rosa Peace" }],
  openGraph: {
    title: "Groupe Scolaire Bilingue Rosa Peace",
    description: "École bilingue d'excellence à Yaoundé - Maternelle & Primaire",
    type: "website",
    locale: "fr_CM",
    alternateLocale: ["en_CM"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
