import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "../styles.css";
import { Header } from "../components/site/Header";
import { Footer } from "../components/site/Footer";

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
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap"
        />
      </head>
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
