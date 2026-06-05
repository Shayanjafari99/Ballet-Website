import { faqs } from "@/data/ballet";

export function FaqSection() {
  return (
    <section id="faq" className="bg-secondary/40 px-4 py-24 md:py-32">
      <div className="mx-auto max-w-3xl">
        <div className="mb-12">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Common Questions
          </p>
          <h2 className="font-display text-4xl font-semibold leading-tight md:text-5xl">
            For new students and the newly curious.
          </h2>
        </div>

        <div className="divide-y divide-border rounded-2xl border border-border bg-card">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="group p-6 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 font-display text-xl font-semibold">
                {f.q}
                <span
                  aria-hidden="true"
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-4 leading-relaxed text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
