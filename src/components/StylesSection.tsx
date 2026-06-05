import { styles } from "@/data/ballet";

export function StylesSection() {
  return (
    <section id="styles" className="bg-secondary/40 px-4 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 max-w-3xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Styles of Ballet
          </p>
          <h2 className="mb-6 font-display text-4xl font-semibold leading-tight md:text-5xl">
            Four hundred years of an evolving art form.
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Ballet is not a single thing. It is a living tradition that has changed
            with every generation, every choreographer, and every country it has
            travelled to. Here are the four major streams you will encounter today.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {styles.map((s) => (
            <article
              key={s.name}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <div
                aria-hidden="true"
                className={`absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-to-br ${s.accent} opacity-20 blur-2xl transition-opacity group-hover:opacity-40`}
              />
              <div className="relative">
                <h3 className="mb-2 font-display text-3xl font-semibold">{s.name}</h3>
                <p className="mb-4 text-xs font-medium uppercase tracking-widest text-primary">
                  {s.era}
                </p>
                <p className="leading-relaxed text-muted-foreground">{s.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
