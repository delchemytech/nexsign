import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Inter, Space_Grotesk } from "next/font/google";
import "../styles.css";
import { Header } from "../components/site/Header";
import { Footer } from "../components/site/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "neXsign — Signage & Metal Work in Abu Dhabi",
  description:
    "Turning brands into landmarks across the UAE since 2004. Full-service signage, fabrication and installation from our Mussafah facility.",
  authors: [{ name: "neXsign" }],
  openGraph: {
    siteName: "neXsign",
    title: "neXsign — Signage & Metal Work in Abu Dhabi",
    description:
      "Turning brands into landmarks across the UAE since 2004. Full-service signage, fabrication and installation from our Mussafah facility.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "neXsign — Signage & Metal Work in Abu Dhabi",
    description:
      "Turning brands into landmarks across the UAE since 2004. Full-service signage, fabrication and installation from our Mussafah facility.",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
