import { Button } from "@/components/ui/button";
import { AtSign, Mail, Phone } from "lucide-react";
import { profile } from "@/data/profile";

export function ContactSection() {
  return (
    <section id="contact" className="px-4 py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
        <div>
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Visit the Studio
          </p>
          <h2 className="mb-6 font-display text-4xl font-semibold leading-tight md:text-5xl">
            Come take class with us.
          </h2>
          <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
            The studio is open six days a week. Message us on Instagram — the fastest
            way to reach us — and we will place you in a class that fits.
          </p>

          <div className="space-y-4">
            <a
              href={profile.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-foreground/80 transition-colors hover:text-primary"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-accent-foreground">
                <AtSign className="h-4 w-4" />
              </span>
              @{profile.username}
            </a>
            <a
              href="mailto:hello@sababallet.example"
              className="flex items-center gap-3 text-foreground/80 transition-colors hover:text-primary"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-accent-foreground">
                <Mail className="h-4 w-4" />
              </span>
              hello@sababallet.example
            </a>
            <a
              href="tel:+98000000000"
              className="flex items-center gap-3 text-foreground/80 transition-colors hover:text-primary"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-accent-foreground">
                <Phone className="h-4 w-4" />
              </span>
              +98 (000) 000-0000
            </a>
          </div>
        </div>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="space-y-4 rounded-2xl border border-border bg-card p-7 shadow-sm"
        >
          <h3 className="font-display text-2xl font-semibold">Book a trial</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="mb-1 block text-sm font-medium">First name</span>
              <input
                type="text"
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
            </label>
            <label className="block">
              <span className="mb-1 block text-sm font-medium">Last name</span>
              <input
                type="text"
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
            </label>
          </div>
          <label className="block">
            <span className="mb-1 block text-sm font-medium">Email or phone</span>
            <input
              type="text"
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
            />
          </label>
          <label className="block">
            <span className="mb-1 block text-sm font-medium">Tell us about yourself</span>
            <textarea
              rows={4}
              placeholder="Age, experience, what you'd like to try…"
              className="w-full resize-none rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
            />
          </label>
          <Button type="submit" className="w-full">
            Send
          </Button>
        </form>
      </div>
    </section>
  );
}
