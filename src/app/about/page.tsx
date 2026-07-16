import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import aboutImg from "@/assets/about-workshop.jpg";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About neXsign — Signage Manufacturing in Abu Dhabi Since 2004",
  description:
    "Founded in Abu Dhabi in 2004, neXsign designs, manufactures and installs commercial signage across the UAE. Read our story, vision, mission and quality policy.",
  openGraph: {
    title: "About neXsign — Signage Since 2004",
    description:
      "A full-service signage and metal work company based in Mussafah, Abu Dhabi. Serving the UAE since 2004.",
    images: [{ url: aboutImg.src }],
  },
};

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-border bg-muted/40">
        <div className="container-page py-20 md:py-28">
          <p className="eyebrow">About us</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-semibold sm:text-5xl">
            A full-service signage company, engineered in Abu Dhabi.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Since {site.since}, neXsign has produced commercial signage for the interior and
            exterior of workplaces across the UAE — supporting brands with design, fabrication,
            approvals and installation from a single team.
          </p>
        </div>
      </section>

      <section className="container-page py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="overflow-hidden rounded-md border border-border">
            <img
              src={aboutImg.src}
              alt="Interior of the neXsign workshop with workers fabricating illuminated letters"
              loading="lazy"
              width={1600}
              height={900}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="eyebrow">Our story</p>
            <h2 className="mt-3 text-3xl font-semibold">
              People buy brands. Signage is the first handshake.
            </h2>
            <div className="mt-5 space-y-4 text-muted-foreground">
              <p>
                We started neXsign in 2004 with a simple conviction: signage is the primary element
                of a customer's brand. People buy brands because they trust them, and trust starts
                at first sight.
              </p>
              <p>
                Whatever your business, we produce commercial signage to accompany your brand
                identity for the interior and exterior of your workplace. We point out any potential
                challenges you may not have considered — and offer clear ways to overcome them.
              </p>
              <p>
                We flip ideas into reality, translate concepts into three dimensions, and make sure
                every project is managed, produced and installed to systematically high standards,
                every time.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink py-20 text-ink-foreground">
        <div className="container-page grid grid-cols-2 gap-8 sm:grid-cols-4">
          {site.stats.map((s) => (
            <div key={s.label}>
              <div className="font-display text-4xl font-semibold text-brand">{s.value}</div>
              <div className="mt-2 text-xs uppercase tracking-widest text-ink-foreground/60">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page grid gap-10 py-20 lg:grid-cols-3">
        {[
          {
            title: "Our Vision",
            body: "To be the premier provider of illuminated signs to large and small businesses throughout the UAE — delivering superior products, competitive pricing and reasonable returns while maintaining high ethical standards.",
          },
          {
            title: "Our Mission",
            body: "Customers will enjoy enhanced sales and profitability by using our signs. Acting as a partner, we learn what our customers need and produce signage that presents a positive first impression and offers the maximum potential for return on investment.",
          },
          {
            title: "Quality Policy",
            body: "Quality has been the hallmark of neXsign since 2004. Our top management ensures awareness of quality at every level of operation and observes both statutory and legal requirements laid down by the Government of the UAE. Our quality policy is reviewed every six months.",
          },
        ].map((card) => (
          <div key={card.title} className="rounded-md border border-border bg-card p-8">
            <p className="eyebrow text-brand">Our principles</p>
            <h3 className="mt-3 text-2xl font-semibold">{card.title}</h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{card.body}</p>
          </div>
        ))}
      </section>

      <section className="container-page pb-24">
        <div className="rounded-lg border border-border bg-muted/40 p-10 text-center">
          <h2 className="text-2xl font-semibold sm:text-3xl">
            Ready to see what we can build for your brand?
          </h2>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-md bg-brand px-5 py-3 text-sm font-semibold text-brand-foreground"
            >
              Browse services <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-md border border-input bg-background px-5 py-3 text-sm font-semibold hover:bg-accent"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
