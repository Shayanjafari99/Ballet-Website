import { famousBallets } from "@/data/ballet";
import { Music4 } from "lucide-react";

export function RepertoireSection() {
  return (
    <section id="repertoire" className="px-4 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 max-w-3xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-primary">
            The Repertoire
          </p>
          <h2 className="mb-6 font-display text-4xl font-semibold leading-tight md:text-5xl">
            Four ballets that shaped the form.
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            The pieces every ballet lover eventually meets. They are still being staged
            around the world because, after two hundred years, audiences still want to
            see them — and dancers still want to dance them.
          </p>
        </div>

        <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2">
          {famousBallets.map((b) => (
            <article
              key={b.title}
              className="group flex gap-5 bg-card p-8 transition-colors hover:bg-secondary/30"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                <Music4 className="h-5 w-5" />
              </div>
              <div>
                <h3 className="mb-1 font-display text-2xl font-semibold">{b.title}</h3>
                <p className="mb-3 text-xs font-medium uppercase tracking-widest text-primary">
                  {b.composer}
                </p>
                <p className="leading-relaxed text-muted-foreground">{b.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
