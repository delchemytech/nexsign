import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { services, whatsappUrl, getImgSrc } from "@/lib/site";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((s) => ({
    slug: s.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) {
    return {
      title: "Service not found — neXsign",
      robots: "noindex",
    };
  }
  return {
    title: `${service.title} — neXsign Signage & Metal Work`,
    description: service.short,
    openGraph: {
      title: `${service.title} — neXsign`,
      description: service.short,
      images: [{ url: getImgSrc(service.image) }],
    },
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) {
    notFound();
  }

  const currentIndex = services.findIndex((s) => s.slug === service.slug);
  const next = services[(currentIndex + 1) % services.length];

  return (
    <>
      <section className="border-b border-border bg-muted/40">
        <div className="container-page py-16">
          <Link
            href="/services"
            className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" /> All services
          </Link>
          <div className="mt-6 grid gap-10 lg:grid-cols-[3fr_2fr] lg:items-center">
            <div>
              <p className="eyebrow">Service</p>
              <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">{service.title}</h1>
              <p className="mt-5 text-lg text-muted-foreground">{service.intro}</p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-md border border-border">
              <Image
                src={getImgSrc(service.image)}
                alt={service.title}
                width={800}
                height={600}
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-20">
        <div className="grid gap-12 lg:grid-cols-[2fr_1fr]">
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
            {service.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <aside className="rounded-md border border-border bg-card p-6">
            <p className="eyebrow">Typical applications</p>
            <ul className="mt-4 space-y-3">
              {service.applications.map((a) => (
                <li key={a} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                  <span>{a}</span>
                </li>
              ))}
            </ul>
            <a
              href={whatsappUrl(`Hi neXsign, I'd like a quote for ${service.title}.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-brand px-4 py-3 text-sm font-semibold text-brand-foreground"
            >
              Request a Quote <ArrowRight className="h-4 w-4" />
            </a>
          </aside>
        </div>
      </section>

      <section className="container-page pb-24">
        <div className="flex flex-col items-start justify-between gap-4 rounded-md border border-border bg-muted/40 p-8 sm:flex-row sm:items-center">
          <div>
            <p className="eyebrow">Next up</p>
            <h3 className="mt-2 text-xl font-semibold">{next.title}</h3>
          </div>
          <Link
            href={`/services/${next.slug}`}
            className="inline-flex items-center gap-2 rounded-md border border-input bg-background px-5 py-3 text-sm font-semibold hover:bg-accent"
          >
            Continue <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
