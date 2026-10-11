"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Phone, MapPin, Clock, Check, Loader2 } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Corners } from "@/components/ui/marks";
import { company } from "@/lib/content";

type Errors = Partial<Record<"name" | "email" | "message", string>>;

const details = [
  { icon: Mail, label: "Email", value: company.email, href: `mailto:${company.email}` },
  { icon: Phone, label: "Phone", value: company.phone, href: `tel:${company.phoneHref}` },
  {
    icon: MapPin,
    label: "Drawing office",
    value: `${company.address.line1}, ${company.address.line2}, ${company.address.city}`,
    href: company.maps,
  },
  { icon: Clock, label: "Hours", value: company.hours },
];

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [errors, setErrors] = useState<Errors>({});
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });

  function validate(): boolean {
    const e: Errors = {};
    if (!form.name.trim()) e.name = "Name is required";
    else if (!/^[a-zA-Z\s.'-]+$/.test(form.name.trim())) e.name = "Name should only contain letters";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email";
    if (!form.message.trim()) e.message = "Message is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function onSubmit(ev: FormEvent) {
    ev.preventDefault();
    if (!validate()) return;
    setStatus("sending");
    setTimeout(() => setStatus("sent"), 900);
  }

  function field(name: keyof typeof form, value: string) {
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name as keyof Errors]) setErrors((e) => ({ ...e, [name]: undefined }));
  }

  const inputBase =
    "w-full border bg-ink-2 px-4 py-3.5 text-chalk outline-none transition-colors placeholder:text-faint focus:border-vermillion";

  return (
    <>
      <PageHero
        n="06"
        eyebrow="Commission"
        title={
          <>
            Bring us your hardest problem
            <span className="text-vermillion">.</span>
          </>
        }
        lead="Tell us about your idea, your challenge, or your next big move. We read every message and respond within 24 hours."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          {/* details */}
          <div>
            <ul className="border-t border-line">
              {details.map((d) => {
                const Icon = d.icon;
                const content = (
                  <>
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-line-2 text-vermillion">
                      <Icon size={17} />
                    </span>
                    <span>
                      <span className="mono-xs block text-faint">{d.label}</span>
                      <span className="mt-1 block text-chalk">{d.value}</span>
                    </span>
                  </>
                );
                return (
                  <li key={d.label} className="border-b border-line">
                    {d.href ? (
                      <a
                        href={d.href}
                        target={d.href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 py-5 transition-colors hover:text-vermillion"
                      >
                        {content}
                      </a>
                    ) : (
                      <div className="flex items-center gap-4 py-5">{content}</div>
                    )}
                  </li>
                );
              })}
            </ul>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted">
              Prefer a conversation? Reach out directly — we respect your privacy and
              your information will never be shared.
            </p>
          </div>

          {/* form */}
          <div className="relative border border-line-2 bg-ink-2/60 p-6 md:p-10">
            <Corners />
            <AnimatePresence mode="wait">
              {status === "sent" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex min-h-[26rem] flex-col items-center justify-center text-center"
                >
                  <span className="flex h-16 w-16 items-center justify-center bg-vermillion text-white">
                    <Check size={28} />
                  </span>
                  <h2 className="font-display mt-6 text-3xl font-semibold text-chalk">Message sent</h2>
                  <p className="mt-3 max-w-sm text-muted">
                    Thanks, {form.name.split(" ")[0] || "there"} — we&apos;ll get back to
                    you within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setForm({ name: "", email: "", company: "", message: "" });
                      setStatus("idle");
                    }}
                    className="link-mark mono-label mt-8 text-chalk"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={onSubmit}
                  noValidate
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col gap-5"
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mono-label mb-2 block text-muted">Name *</label>
                      <input
                        id="name"
                        value={form.name}
                        onChange={(e) => field("name", e.target.value)}
                        placeholder="Your name"
                        className={`${inputBase} ${errors.name ? "border-vermillion" : "border-line-2"}`}
                        aria-invalid={!!errors.name}
                      />
                      {errors.name && <p className="mono-xs mt-1.5 text-vermillion">{errors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="email" className="mono-label mb-2 block text-muted">Email *</label>
                      <input
                        id="email"
                        value={form.email}
                        onChange={(e) => field("email", e.target.value)}
                        placeholder="you@company.com"
                        className={`${inputBase} ${errors.email ? "border-vermillion" : "border-line-2"}`}
                        aria-invalid={!!errors.email}
                      />
                      {errors.email && <p className="mono-xs mt-1.5 text-vermillion">{errors.email}</p>}
                    </div>
                  </div>
                  <div>
                    <label htmlFor="company" className="mono-label mb-2 block text-muted">
                      Company <span className="text-faint">(optional)</span>
                    </label>
                    <input
                      id="company"
                      value={form.company}
                      onChange={(e) => field("company", e.target.value)}
                      placeholder="Your company"
                      className={`${inputBase} border-line-2`}
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="mono-label mb-2 block text-muted">Message *</label>
                    <textarea
                      id="message"
                      rows={5}
                      value={form.message}
                      onChange={(e) => field("message", e.target.value)}
                      placeholder="Tell us about your project, idea, or challenge..."
                      className={`${inputBase} resize-none ${errors.message ? "border-vermillion" : "border-line-2"}`}
                      aria-invalid={!!errors.message}
                    />
                    {errors.message && <p className="mono-xs mt-1.5 text-vermillion">{errors.message}</p>}
                  </div>
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="group mt-1 inline-flex items-center justify-center gap-2.5 bg-chalk px-6 py-4 text-sm font-medium text-ink transition-colors duration-300 hover:bg-vermillion hover:text-white disabled:opacity-70"
                  >
                    {status === "sending" ? (
                      <>
                        <Loader2 size={16} className="animate-spin" /> Sending…
                      </>
                    ) : (
                      <>
                        <span className="h-1.5 w-1.5 bg-vermillion transition-colors group-hover:bg-white" />
                        Send message
                      </>
                    )}
                  </button>
                  <p className="mono-xs text-center text-faint">
                    FRONT-END DEMO — SUBMISSIONS AREN&apos;T STORED OR SENT TO A SERVER
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </Section>
    </>
  );
}
