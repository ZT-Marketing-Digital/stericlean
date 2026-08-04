import { useState, type FormEvent } from "react";
import { useLanguage } from "@/i18n/LanguageProvider";
import { MapPin } from "lucide-react";
import { toast } from "sonner";

export function Contact() {
  const { t } = useLanguage();
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
    toast.success(t.contact.success);
    e.currentTarget.reset();
  }

  const field =
    "w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary";

  return (
    <section id="contato" className="bg-brand-soft py-24">
      <div className="section-shell grid gap-12 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            {t.contact.eyebrow}
          </span>
          <h2 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
            {t.contact.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            {t.contact.lead}
          </p>

          <ul className="mt-10 space-y-5">
            {t.contact.units.map((u) => (
              <li key={u.label} className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    {u.label}
                  </p>
                  <p className="font-display text-base font-semibold">{u.value}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <form
          onSubmit={onSubmit}
          className="rounded-3xl border border-border bg-card p-6 md:p-8"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium">{t.contact.name}</span>
              <input required name="name" className={field} />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium">{t.contact.company}</span>
              <input name="company" className={field} />
            </label>
          </div>
          <label className="mt-4 block">
            <span className="mb-1.5 block text-sm font-medium">{t.contact.crop}</span>
            <input name="crop" className={field} />
          </label>
          <label className="mt-4 block">
            <span className="mb-1.5 block text-sm font-medium">{t.contact.message}</span>
            <textarea required name="message" rows={5} className={field} />
          </label>

          <button
            type="submit"
            className="mt-6 w-full rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            {t.contact.submit}
          </button>

          {sent && (
            <p className="mt-4 text-center text-sm text-primary">{t.contact.success}</p>
          )}
        </form>
      </div>
    </section>
  );
}
