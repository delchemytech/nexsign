import Link from "next/link";
import { ArrowRight, CheckCircle2, Compass, Factory, PenTool, Truck } from "lucide-react";
import { services, site, whatsappUrl, getImgSrc } from "@/lib/site";

const process = [
  {
    icon: Compass,
    title: "Consult & Survey",
    body: "We visit the site, review brand assets and identify approvals, structural and visibility constraints early.",
  },
  {
    icon: PenTool,
    title: "Design & Engineer",
    body: "Concepts translated into engineered drawings, material specs and mock-ups approved before fabrication.",
  },
  {
    icon: Factory,
    title: "Fabricate In-House",
    body: "Manufactured at our Mussafah workshop using UV-tested materials and disciplined quality control.",
  },
  {
    icon: Truck,
    title: "Install & Hand Over",
    body: "Our team handles installation, cleaning and final handover across Abu Dhabi and the wider UAE.",
  },
];

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "neXsign",
    description:
      "Full-service signage and metal work company in Abu Dhabi. Design, fabrication and installation across the UAE since 2004.",
    telephone: site.phones.join(", "),
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${site.address.line1}, ${site.address.line2}`,
      addressLocality: site.address.city,
      addressCountry: "AE",
    },
    areaServed: "United Arab Emirates",
    foundingDate: String(site.since),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-ink text-ink-foreground">
        <div className="absolute inset-0 -z-10">
          <img
            src="/images/imgi_55_ed30c032b62327573c8913f3f8ca5882.webp"
            alt="Macro detail of illuminated 3D stainless steel signage letter inside neXsign workshop"
            className="h-full w-full object-cover opacity-40"
            width={1920}
            height={1280}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/40" />
        </div>

        <div className="container-page grid gap-10 py-24 md:py-32 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow text-brand">Signage · Metal work · Since 2004</p>
            <h1 className="mt-4 text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-6xl">
              Turning brands into <span className="text-brand">landmarks</span> across the UAE.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-foreground/75">
              neXsign is a full-service signage and metal work company based in Abu Dhabi. From
              illuminated 3D letters to pylon signs and safety systems — we design, fabricate and
              install every sign in-house, to a standard that lasts.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-brand px-5 py-3 text-sm font-semibold text-brand-foreground transition-transform hover:-translate-y-0.5"
              >
                Request a Quote <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-md border border-white/20 px-5 py-3 text-sm font-semibold text-ink-foreground hover:bg-white/5"
              >
                Explore Services
              </Link>
            </div>
          </div>

          <div className="hidden lg:block" />
        </div>

        {/* Stats strip */}
        <div className="border-t border-white/10 bg-black/30">
          <div className="container-page grid grid-cols-2 gap-6 py-8 sm:grid-cols-4">
            {site.stats.map((s) => (
              <div key={s.label}>
                <div className="font-display text-3xl font-semibold text-brand">{s.value}</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-ink-foreground/60">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="container-page py-24">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">What we do</p>
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold sm:text-4xl">
              Every sign we ship starts and ends in our workshop.
            </h2>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-brand"
          >
            View all services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="group flex flex-col overflow-hidden rounded-md border border-border bg-card transition-all hover:-translate-y-1 hover:border-brand hover:shadow-lg"
            >
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={getImgSrc(s.image)}
                  alt={s.title}
                  loading="lazy"
                  width={1200}
                  height={900}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{s.short}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-foreground group-hover:text-brand">
                  Learn more <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* About teaser */}
      <section className="bg-muted/40">
        <div className="container-page grid gap-12 py-24 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow">About neXsign</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              Two decades of engineered signage, delivered on time.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Since 2004, neXsign has been closely working as a full-service signage company —
              manufacturing, supplying and installing signage throughout the UAE. We flip ideas into
              reality, translate concepts into three dimensions, and make sure every project is
              managed, produced and installed to systematically high standards.
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                "Shipping & installation across the GCC",
                "In-house manufacturing in Mussafah",
                "Approval-ready engineered signage",
                "Consistent craftsmanship, every sign",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-md border border-input bg-background px-5 py-3 text-sm font-semibold hover:bg-accent"
              >
                More about us <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-md border border-border">
            <img
              src="/images/imgi_8_ddb0e0fa4efe1b6f93de990a2302ebe5.webp"
              alt="Craftsman technician wiring illuminated signage at neXsign Mussafah workshop"
              loading="lazy"
              className="h-full w-full object-cover"
              width={1920}
              height={1280}
            />
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="container-page py-24">
        <div className="max-w-2xl">
          <p className="eyebrow">How we work</p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
            A disciplined workflow from concept to handover.
          </h2>
        </div>
        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((step, i) => {
            const Icon = step.icon;
            return (
              <li key={step.title} className="rounded-md border border-border bg-card p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-brand/15 text-brand">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="font-display text-sm font-semibold text-muted-foreground">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{step.body}</p>
              </li>
            );
          })}
        </ol>
      </section>

      {/* CTA */}
      <section className="container-page pb-24">
        <div className="overflow-hidden rounded-lg bg-ink px-8 py-16 text-ink-foreground sm:px-14">
          <div className="grid gap-8 lg:grid-cols-[2fr_1fr] lg:items-center">
            <div>
              <h2 className="text-3xl font-semibold sm:text-4xl">
                Have a project in mind? Let's build it.
              </h2>
              <p className="mt-4 max-w-2xl text-ink-foreground/70">
                Share your brief and site details — we'll come back with concepts, materials and a
                clear budget.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-brand px-5 py-3 text-sm font-semibold text-brand-foreground"
              >
                WhatsApp us
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-md border border-white/20 px-5 py-3 text-sm font-semibold text-ink-foreground hover:bg-white/5"
              >
                Contact page
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
