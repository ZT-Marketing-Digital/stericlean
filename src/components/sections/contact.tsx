import { useRef, useState, type FormEvent } from "react";
import { useLanguage } from "@/i18n/LanguageProvider";
import { toast } from "sonner";

/** Endpoint PHP hospedado no cPanel — ver public/api/enviar.php. */
const ENDPOINT = "/api/enviar.php";

type Estado = "parado" | "enviando" | "enviado";

/** Lê as UTMs da URL para o e-mail dizer de qual campanha veio o contato. */
function origemDaCampanha(): Record<string, string> {
  if (typeof window === "undefined") return {};
  const params = new URLSearchParams(window.location.search);
  const chaves = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"];
  return Object.fromEntries(
    chaves.map((k) => [k, params.get(k) ?? ""]).filter(([, v]) => v !== ""),
  );
}

export function Contact() {
  const { t } = useLanguage();
  const [estado, setEstado] = useState<Estado>("parado");
  // Momento em que a seção foi montada. O servidor recusa envio rápido
  // demais, que é assinatura de robô — pessoa nenhuma preenche em 3s.
  const abertoEm = useRef(Date.now());

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (estado === "enviando") return;

    const form = e.currentTarget;
    const dados = Object.fromEntries(new FormData(form));
    setEstado("enviando");

    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...dados,
          form_opened_at: abertoEm.current,
          page_url: typeof window !== "undefined" ? window.location.href : "",
          attribution: origemDaCampanha(),
        }),
      });
      // O endpoint responde JSON sempre; um HTML aqui significa erro do
      // servidor, e nesse caso o catch abaixo assume.
      const corpo = (await res.json()) as { ok?: boolean };
      if (!res.ok || !corpo.ok) throw new Error("envio recusado");

      setEstado("enviado");
      toast.success(t.contact.success);
      form.reset();
    } catch {
      setEstado("parado");
      toast.error(t.contact.error);
    }
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
          <h2 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">{t.contact.title}</h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">{t.contact.lead}</p>
        </div>

        <form onSubmit={onSubmit} className="rounded-3xl border border-border bg-card p-6 md:p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium">{t.contact.name}</span>
              <input required name="name" autoComplete="name" className={field} />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium">{t.contact.company}</span>
              <input name="company" autoComplete="organization" className={field} />
            </label>
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium">{t.contact.email}</span>
              <input
                required
                type="email"
                name="email"
                autoComplete="email"
                inputMode="email"
                className={field}
              />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium">
                {t.contact.phone}{" "}
                <span className="font-normal text-muted-foreground">
                  ({t.contact.phoneOptional})
                </span>
              </span>
              <input type="tel" name="phone" autoComplete="tel" inputMode="tel" className={field} />
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

          {/* Isca para robô: invisível e fora da navegação, então só um
              preenchedor automático mexe nele. O servidor descarta o envio. */}
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="hidden"
          />

          <button
            type="submit"
            disabled={estado === "enviando"}
            className="mt-6 w-full rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {estado === "enviando" ? t.contact.sending : t.contact.submit}
          </button>

          <p aria-live="polite" className="mt-4 text-center text-sm text-primary">
            {estado === "enviado" ? t.contact.success : ""}
          </p>
        </form>
      </div>
    </section>
  );
}
