import { aboutImage } from "@/data/ballet";
import { profile, formatFollowers } from "@/data/profile";
import { Sparkles, Heart, GraduationCap, AtSign } from "lucide-react";

const pillars = [
  {
    icon: Sparkles,
    title: "Artistry",
    body: "Performance work staged in the studio and at local venues, plus guest workshops with visiting artists.",
  },
  {
    icon: GraduationCap,
    title: "Training",
    body: "A syllabus that takes students from their first plié through to advanced pointe work and pre-professional repertoire.",
  },
  {
    icon: Heart,
    title: "Community",
    body: "A friendly, family-oriented school where adults and children train side by side at their own pace.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="relative px-4 py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-center">
        <div className="order-2 md:order-1">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-primary">
            About the Academy
          </p>
          <h2 className="mb-6 font-display text-4xl font-semibold leading-tight md:text-5xl">
            {profile.nameEn} — classical ballet in Shiraz.
          </h2>
          <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
            Founded as a small private studio, {profile.nameEn} has grown into one of
            Shiraz's most followed ballet schools, with a community of {formatFollowers(profile.followers)}{" "}
            on Instagram and a steady stream of students — children and adults — moving
            through its syllabus every year.
          </p>
          <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
            The teaching is academic and classical. The atmosphere is welcoming. New
            students are welcome at any level, with or without prior training.
          </p>

          <a
            href={profile.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-opacity hover:opacity-70"
          >
            <AtSign className="h-4 w-4" />
            @{profile.username} · {formatFollowers(profile.followers)} followers
          </a>
        </div>

        <div className="order-1 md:order-2">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border-2 border-foreground/10 shadow-2xl">
            <img
              src={aboutImage.src}
              alt="A ballet dancer in rehearsal"
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent"
            />
          </div>
        </div>
      </div>

      <div className="mx-auto mt-20 grid max-w-6xl gap-6 sm:grid-cols-3">
        {pillars.map(({ icon: Icon, title, body }) => (
          <div
            key={title}
            className="rounded-2xl border border-border bg-card/50 p-6 transition-shadow hover:shadow-lg"
          >
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent text-accent-foreground">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="mb-2 font-display text-2xl font-semibold">{title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
