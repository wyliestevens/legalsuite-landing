import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "LegalSuite — AI-Powered Law Firm Operations Platform",
  description:
    "The only legal practice management platform with built-in AI medical chronology. Manage cases, clients, billing, documents, and team — all in one place. Start your free trial today.",
  keywords: [
    "legal practice management",
    "law firm software",
    "medical chronology",
    "AI legal technology",
    "case management",
    "personal injury software",
    "legal nurse consulting",
    "law firm billing",
    "legal document management",
  ],
  openGraph: {
    title: "LegalSuite — AI-Powered Law Firm Operations Platform",
    description:
      "The only legal practice management platform with built-in AI medical chronology. Manage cases, clients, billing, documents, and team — all in one place.",
    url: "https://legalsuiteapp.com",
    siteName: "LegalSuite",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "LegalSuite — AI-Powered Law Firm Operations Platform",
    description:
      "The only legal practice management platform with built-in AI medical chronology.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
