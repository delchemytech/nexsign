"use client";

import { useState } from "react";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { services, site, whatsappUrl } from "@/lib/site";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: services[0].title,
    message: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = `Signage enquiry — ${form.service}`;
    const body = `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nService: ${form.service}\n\n${form.message}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <>
      <section className="border-b border-border bg-muted/40">
        <div className="container-page py-20">
          <p className="eyebrow">Contact</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-semibold sm:text-5xl">
            Let's talk about your next sign.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            Our workshop is in Mussafah 37, Abu Dhabi. Reach out by phone, email or WhatsApp — or
            send a brief through the form below.
          </p>
        </div>
      </section>

      <section className="container-page py-20">
        <div className="grid gap-12 lg:grid-cols-[3fr_2fr]">
          <form
            onSubmit={handleSubmit}
            className="rounded-md border border-border bg-card p-6 sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Your name" required>
                <input
                  required
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="input"
                />
              </Field>
              <Field label="Email" required>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="input"
                />
              </Field>
              <Field label="Phone">
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="input"
                />
              </Field>
              <Field label="Service">
                <select
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  className="input"
                >
                  {services.map((s) => (
                    <option key={s.slug}>{s.title}</option>
                  ))}
                </select>
              </Field>
            </div>
            <div className="mt-5">
              <Field label="Project details" required>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="input resize-none"
                />
              </Field>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-md bg-brand px-5 py-3 text-sm font-semibold text-brand-foreground"
              >
                Send enquiry
              </button>
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-input bg-background px-5 py-3 text-sm font-semibold hover:bg-accent"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp instead
              </a>
            </div>
          </form>

          <aside className="space-y-6">
            <InfoCard icon={MapPin} title="Workshop">
              {site.address.line1}
              <br />
              {site.address.line2}
              <br />
              {site.address.city}, {site.address.country}
            </InfoCard>
            <InfoCard icon={Phone} title="Phone">
              {site.phones.map((p) => (
                <a key={p} href={`tel:${p.replace(/\s/g, "")}`} className="block hover:text-brand">
                  {p}
                </a>
              ))}
            </InfoCard>
            <InfoCard icon={Mail} title="Email">
              <a href={`mailto:${site.email}`} className="hover:text-brand">
                {site.email}
              </a>
            </InfoCard>

            <div className="overflow-hidden rounded-md border border-border">
              <iframe
                title="neXsign location — Mussafah 37, Abu Dhabi"
                src="https://www.google.com/maps?q=Mussafah+37+Industrial+Area+Abu+Dhabi&output=embed"
                className="h-64 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </aside>
        </div>
      </section>

      <style>{`
        .input {
          width: 100%;
          border-radius: var(--radius);
          border: 1px solid var(--color-input);
          background: var(--color-background);
          padding: 0.625rem 0.75rem;
          font-size: 0.875rem;
          color: var(--color-foreground);
          outline: none;
          transition: border-color .15s, box-shadow .15s;
        }
        .input:focus {
          border-color: var(--color-brand);
          box-shadow: 0 0 0 3px color-mix(in oklab, var(--color-brand) 25%, transparent);
        }
      `}</style>
    </>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        {label}
        {required && <span className="text-brand"> *</span>}
      </span>
      {children}
    </label>
  );
}

function InfoCard({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-md border border-border bg-card p-6">
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-md bg-brand/15 text-brand">
          <Icon className="h-4 w-4" />
        </div>
        <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
          {title}
        </h3>
      </div>
      <div className="mt-3 text-sm text-foreground">{children}</div>
    </div>
  );
}
