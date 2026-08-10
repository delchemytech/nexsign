import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import footerLogoImg from "@/assets/nexsign-footer-logo2.webp";
import { services, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-24 bg-ink text-ink-foreground">
      <div className="container-page grid gap-12 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <Image src={footerLogoImg} alt="neXsign" className="h-16 w-auto" unoptimized />
          <p className="mt-4 max-w-md text-sm leading-relaxed text-ink-foreground/70">
            Full-service signage and metal work company based in Abu Dhabi. Since {site.since},
            we've designed, fabricated and installed signage that turns brands into landmarks across
            the UAE.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-ink-foreground/60">
            Services
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {services.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="text-ink-foreground/80 hover:text-brand"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-ink-foreground/60">
            Contact
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-ink-foreground/80">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
              <span>
                {site.address.line1}, {site.address.line2}
                <br />
                {site.address.city}, {site.address.country}
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
              <div>
                {site.phones.map((p) => (
                  <a
                    key={p}
                    href={`tel:${p.replace(/\s/g, "")}`}
                    className="block hover:text-brand"
                  >
                    {p}
                  </a>
                ))}
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
              <a href={`mailto:${site.email}`} className="hover:text-brand">
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-start justify-between gap-2 py-6 text-xs text-ink-foreground/60 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} neXsign Signage & Metal Work. All rights reserved.</p>
          <p>Abu Dhabi · United Arab Emirates</p>
        </div>
      </div>
    </footer>
  );
}
