import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact neXsign — Signage in Abu Dhabi",
  description:
    "Get in touch with neXsign — our workshop is in Mussafah, Abu Dhabi. Call, email or WhatsApp us for a signage quote anywhere in the UAE.",
  openGraph: {
    title: "Contact neXsign",
    description:
      "Signage & metal work in Abu Dhabi. Reach us by phone, email or WhatsApp for a quote.",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
