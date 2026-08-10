import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { services, whatsappUrl, getImgSrc } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services — neXsign Signage & Metal Work",
  description:
    "Exterior, interior, pylon, vehicle, hoarding, etching, traffic and safety signage — engineered, fabricated and installed by neXsign across the UAE.",
  openGraph: {
    title: "neXsign Services — Signage, Metal Work & Fabrication",
    description:
      "Full-service signage solutions: design, fabrication and installation across the UAE.",
  },
};

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-border bg-muted/40">
        <div className="container-page py-20">
          <p className="eyebrow">Services</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-semibold sm:text-5xl">
            Signage solutions for every surface, every scale.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            From illuminated 3D letters and pylon signs to safety and traffic systems, every project
            is engineered and fabricated in-house at our Mussafah workshop.
          </p>
        </div>
      </section>

      <section className="container-page py-20">
        <div className="grid gap-8 md:grid-cols-2">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="group flex flex-col overflow-hidden rounded-md border border-border bg-card transition-all hover:-translate-y-1 hover:border-brand hover:shadow-lg"
            >
              <div className="aspect-[16/10] overflow-hidden bg-muted">
                <Image
                  src={getImgSrc(s.image)}
                  alt={s.title}
                  width={640}
                  height={400}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h2 className="text-2xl font-semibold">{s.title}</h2>
                <p className="mt-3 flex-1 text-muted-foreground">{s.short}</p>
                <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold group-hover:text-brand">
                  Read more <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 rounded-lg bg-ink p-10 text-ink-foreground">
          <div className="grid gap-6 lg:grid-cols-[2fr_1fr] lg:items-center">
            <div>
              <h2 className="text-3xl font-semibold">Not sure which service fits?</h2>
              <p className="mt-3 text-ink-foreground/70">
                Tell us about your site and brand — we'll recommend the right sign type, materials
                and approvals path.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-brand px-5 py-3 text-sm font-semibold text-brand-foreground"
              >
                WhatsApp
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-md border border-white/20 px-5 py-3 text-sm font-semibold text-ink-foreground hover:bg-white/5"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
