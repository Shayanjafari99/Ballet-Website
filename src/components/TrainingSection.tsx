import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const tracks = [
  {
    title: "Children's Program",
    ages: "Ages 4–10",
    body: "A playful introduction to ballet: musicality, coordination, and the first structured barre work.",
  },
  {
    title: "Junior Program",
    ages: "Ages 10–14",
    body: "Twice- to thrice-weekly technique classes. Progression through graded levels, examinations available.",
  },
  {
    title: "Senior & Pre-Professional",
    ages: "Ages 14–18",
    body: "Daily training: technique, pointe, repertoire, and conditioning for students aiming at the stage.",
  },
  {
    title: "Adult Open",
    ages: "Ages 18+",
    body: "For absolute beginners through returning dancers. Drop-in classes, pointe for experienced students, and stretch & strength.",
  },
  {
    title: "Private Coaching",
    ages: "All ages, by appointment",
    body: "One-to-one coaching for exam preparation, competition repertoire, or accelerated progress.",
  },
];

export function TrainingSection() {
  return (
    <section id="training" className="bg-primary text-primary-foreground px-4 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 max-w-3xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-accent">
            Training Tracks
          </p>
          <h2 className="mb-6 font-display text-4xl font-semibold leading-tight md:text-5xl">
            A path for every age and every level.
          </h2>
          <p className="text-lg leading-relaxed text-primary-foreground/80">
            All classes follow an academic classical syllabus. New students are placed
            after a short introductory session with a faculty member.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tracks.map((t) => (
            <div
              key={t.title}
              className="rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-7 transition-colors hover:bg-primary-foreground/10"
            >
              <p className="mb-1 text-xs font-medium uppercase tracking-widest text-accent">
                {t.ages}
              </p>
              <h3 className="mb-3 font-display text-2xl font-semibold">{t.title}</h3>
              <p className="text-sm leading-relaxed text-primary-foreground/80">
                {t.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <Button asChild size="lg" variant="secondary">
            <a href="#contact">
              Book a trial class <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <p className="text-sm text-primary-foreground/70">
            First class is free for new students. No prior experience required.
          </p>
        </div>
      </div>
    </section>
  );
}
