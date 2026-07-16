import type { Metadata } from "next";
import Link from "next/link";
import { clients } from "@/lib/site";

export const metadata: Metadata = {
  title: "Clients — neXsign",
  description:
    "neXsign has built its reputation manufacturing and installing signage for government, healthcare, education, retail, automotive and industrial clients across the UAE.",
  openGraph: {
    title: "Our Clients — neXsign",
    description:
      "Serving residential, commercial, industrial, municipal and governmental clients across the UAE since 2004.",
  },
};

export default function ClientsPage() {
  return (
    <>
      <section className="border-b border-border bg-muted/40">
        <div className="container-page py-20">
          <p className="eyebrow">Clients</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-semibold sm:text-5xl">
            Trusted by brands, government and institutions across the UAE.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            Founded in Abu Dhabi in 2004, neXsign has manufactured, supplied and installed signage
            for a broad range of residential, commercial, industrial, municipal and governmental
            clients.
          </p>
        </div>
      </section>

      <section className="container-page py-20">
        <div className="space-y-14">
          {clients.map((group) => (
            <div key={group.group}>
              <div className="flex items-baseline justify-between border-b border-border pb-3">
                <h2 className="text-lg font-semibold">{group.group}</h2>
                <span className="text-xs uppercase tracking-widest text-muted-foreground">
                  {group.names.length} clients
                </span>
              </div>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {group.names.map((name) => (
                  <li
                    key={name}
                    className="flex h-20 items-center justify-center rounded-md border border-border bg-card px-4 text-center text-sm font-medium text-foreground transition-colors hover:border-brand hover:text-brand"
                  >
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-20 rounded-lg bg-ink p-10 text-center text-ink-foreground">
          <h2 className="text-2xl font-semibold sm:text-3xl">Add your brand to the list.</h2>
          <p className="mx-auto mt-3 max-w-xl text-ink-foreground/70">
            Talk to our team about your next signage project — anywhere in the UAE.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-md bg-brand px-5 py-3 text-sm font-semibold text-brand-foreground"
          >
            Contact neXsign
          </Link>
        </div>
      </section>
    </>
  );
}
