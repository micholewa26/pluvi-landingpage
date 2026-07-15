import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import { company, contactSection } from "../data/content";

type FormState = {
  name: string;
  email: string;
  phone: string;
  pumpCount: string;
  application: string;
  cropType: string;
  cropTypeOther: string;
  message: string;
  consent: boolean;
};

const initialForm: FormState = {
  name: "",
  email: "",
  phone: "",
  pumpCount: "",
  application: "",
  cropType: "",
  cropTypeOther: "",
  message: "",
  consent: false,
};

const inputClass =
  "w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/60 transition-colors";

const labelClass = "block text-sm font-medium mb-1.5";

const Contact = () => {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [sent, setSent] = useState(false);

  const set = <K extends keyof FormState>(key: K, value: FormState[K]) =>
    setForm((f) => ({ ...f, [key]: value }));

  const validate = () => {
    const e: Partial<Record<keyof FormState, string>> = {};
    if (form.name.trim().length < 2) e.name = "Podaj imię i nazwisko lub nazwę firmy";
    if (!form.email.trim() && !form.phone.trim())
      e.email = "Wymagany e-mail lub telefon";
    if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Nieprawidłowy adres e-mail";
    if (!form.pumpCount) e.pumpCount = "Wybierz ilość pomp";
    if (!form.application) e.application = "Wybierz zastosowanie";
    if (!form.cropType) e.cropType = "Wybierz rodzaj uprawy";
    if (form.cropType === "inne" && !form.cropTypeOther.trim())
      e.cropTypeOther = "Podaj rodzaj uprawy";
    if (!form.consent) e.consent = "Zgoda jest wymagana";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!validate()) return;

    const body = [
      `Imię i nazwisko / Firma: ${form.name}`,
      form.email && `E-mail: ${form.email}`,
      form.phone && `Telefon: ${form.phone}`,
      `Ilość pomp: ${form.pumpCount}`,
      `Zastosowanie: ${form.application}`,
      `Rodzaj uprawy: ${form.cropType === "inne" ? form.cropTypeOther : form.cropType}`,
      form.message && `Wiadomość: ${form.message}`,
    ]
      .filter(Boolean)
      .join("\n");

    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(
      "Zapytanie ze strony pluvi.pl"
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-section-alt">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Skontaktuj się <span className="text-gradient">z nami</span>
          </h2>
          <p className="text-muted-foreground text-lg">{contactSection.sub}</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
          <div className="lg:col-span-3 bg-card rounded-xl p-6 md:p-8 border border-border shadow-sm">
            {sent ? (
              <div className="text-center py-16">
                <p className="text-2xl mb-3">✅</p>
                <h3 className="font-display text-xl font-bold mb-2">Dziękujemy!</h3>
                <p className="text-muted-foreground text-sm">
                  Otworzyliśmy Twój program pocztowy z gotową wiadomością — wystarczy ją
                  wysłać. Możesz też napisać bezpośrednio na{" "}
                  <a href={`mailto:${company.email}`} className="text-primary hover:underline">
                    {company.email}
                  </a>
                  .
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div>
                  <label htmlFor="name" className={labelClass}>
                    Imię i nazwisko / Firma *
                  </label>
                  <input
                    id="name"
                    className={inputClass}
                    placeholder="Jan Kowalski / ABC Sp. z o.o."
                    value={form.name}
                    onChange={(e) => set("name", e.target.value)}
                  />
                  {errors.name && <p className="text-destructive text-xs mt-1 text-red-600">{errors.name}</p>}
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="email" className={labelClass}>
                      E-mail *
                    </label>
                    <input
                      id="email"
                      type="email"
                      className={inputClass}
                      placeholder="jan@przyklad.pl"
                      value={form.email}
                      onChange={(e) => set("email", e.target.value)}
                    />
                    {errors.email && <p className="text-xs mt-1 text-red-600">{errors.email}</p>}
                  </div>
                  <div>
                    <label htmlFor="phone" className={labelClass}>
                      Telefon *
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      className={inputClass}
                      placeholder="+48 500 000 000"
                      value={form.phone}
                      onChange={(e) => set("phone", e.target.value)}
                    />
                  </div>
                </div>
                <p className="text-xs text-muted-foreground -mt-3">
                  * Wymagany e-mail lub telefon
                </p>

                <div>
                  <label htmlFor="pumpCount" className={labelClass}>
                    Ilość pomp *
                  </label>
                  <select
                    id="pumpCount"
                    className={inputClass}
                    value={form.pumpCount}
                    onChange={(e) => set("pumpCount", e.target.value)}
                  >
                    <option value="" disabled>
                      Wybierz ilość
                    </option>
                    <option value="1-3">1–3</option>
                    <option value="4-10">4–10</option>
                    <option value="wiecej">Więcej</option>
                  </select>
                  {errors.pumpCount && <p className="text-xs mt-1 text-red-600">{errors.pumpCount}</p>}
                </div>

                <div>
                  <label htmlFor="application" className={labelClass}>
                    Zastosowanie *
                  </label>
                  <select
                    id="application"
                    className={inputClass}
                    value={form.application}
                    onChange={(e) => set("application", e.target.value)}
                  >
                    <option value="" disabled>
                      Wybierz zastosowanie
                    </option>
                    <option value="ochrona-antyprzymrozkowa">Ochrona antyprzymrozkowa</option>
                    <option value="systemy-nawadniania">Systemy nawadniania</option>
                    <option value="inne">Inne</option>
                  </select>
                  {errors.application && (
                    <p className="text-xs mt-1 text-red-600">{errors.application}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="cropType" className={labelClass}>
                    Rodzaj uprawy *
                  </label>
                  <select
                    id="cropType"
                    className={inputClass}
                    value={form.cropType}
                    onChange={(e) => set("cropType", e.target.value)}
                  >
                    <option value="" disabled>
                      Wybierz rodzaj uprawy
                    </option>
                    <option value="sady">Sady</option>
                    <option value="pola-uprawne">Pola uprawne</option>
                    <option value="inne">Inne (podaj)</option>
                  </select>
                  {errors.cropType && <p className="text-xs mt-1 text-red-600">{errors.cropType}</p>}
                </div>

                {form.cropType === "inne" && (
                  <div>
                    <label htmlFor="cropTypeOther" className={labelClass}>
                      Podaj rodzaj uprawy *
                    </label>
                    <input
                      id="cropTypeOther"
                      className={inputClass}
                      placeholder="Np. winnice, jagodniki..."
                      value={form.cropTypeOther}
                      onChange={(e) => set("cropTypeOther", e.target.value)}
                    />
                    {errors.cropTypeOther && (
                      <p className="text-xs mt-1 text-red-600">{errors.cropTypeOther}</p>
                    )}
                  </div>
                )}

                <div>
                  <label htmlFor="message" className={labelClass}>
                    Wiadomość
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className={inputClass}
                    placeholder="Opisz swoje potrzeby..."
                    value={form.message}
                    onChange={(e) => set("message", e.target.value)}
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    id="consent"
                    type="checkbox"
                    className="mt-0.5 h-4 w-4 rounded border-input accent-[hsl(var(--primary))]"
                    checked={form.consent}
                    onChange={(e) => set("consent", e.target.checked)}
                  />
                  <label htmlFor="consent" className="text-xs text-muted-foreground">
                    Wyrażam zgodę na przetwarzanie moich danych osobowych w celu obsługi
                    zapytania zgodnie z Polityką Prywatności. *
                  </label>
                </div>
                {errors.consent && <p className="text-xs -mt-3 text-red-600">{errors.consent}</p>}

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 rounded-lg bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-base py-3.5 transition-colors"
                >
                  <Send size={18} />
                  Wyślij zapytanie
                </button>
              </form>
            )}
          </div>

          <div className="lg:col-span-2 flex flex-col justify-center gap-8">
            <h3 className="font-display text-xl font-bold">Co zyskujesz?</h3>
            {contactSection.benefits.map((benefit) => (
              <div key={benefit.text} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="text-primary" size={20} />
                </div>
                <p className="font-medium">{benefit.text}</p>
              </div>
            ))}
            <div className="p-4 rounded-xl bg-accent/10 border border-accent/20">
              <p className="text-sm font-medium text-accent">{contactSection.responseNote}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
