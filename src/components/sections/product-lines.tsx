import { useLanguage } from "@/i18n/LanguageProvider";
import { Check, Leaf, ShieldCheck } from "lucide-react";

const icons = [Leaf, ShieldCheck];

export function ProductLines() {
  const { t } = useLanguage();

  return (
    <section id="linhas" className="py-24">
      <div className="section-shell">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            {t.lines.eyebrow}
          </span>
          <h2 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
            {t.lines.title}
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {t.lines.items.map((item, i) => {
            const Icon = icons[i] ?? Leaf;
            return (
              <article
                key={item.name}
                className="rounded-3xl border border-border bg-card p-8"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/20 text-primary">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-6 font-display text-2xl font-semibold">{item.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.text}</p>
                <ul className="mt-6 space-y-3">
                  {item.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span className="text-foreground/85">{b}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
