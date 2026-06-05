import { Button } from "@/components/ui/button";
import { AtSign, Menu } from "lucide-react";
import { profile } from "@/data/profile";

const links = [
  { href: "#about", label: "About" },
  { href: "#styles", label: "Styles" },
  { href: "#repertoire", label: "Repertoire" },
  { href: "#training", label: "Training" },
  { href: "#faq", label: "FAQ" },
];

export function SiteNav() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4">
        <a href="#top" className="flex items-center gap-2.5">
          <img
            src={profile.avatarUrl}
            alt={`${profile.nameEn} profile photo`}
            className="h-9 w-9 rounded-full border border-foreground/10 object-cover"
            loading="lazy"
          />
          <span className="font-display text-xl font-semibold tracking-tight text-primary sm:text-2xl">
            {profile.nameEn}
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-foreground/70 transition-colors hover:text-primary"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Button asChild size="sm" variant="outline" className="hidden sm:inline-flex">
            <a
              href={profile.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Instagram"
            >
              <AtSign className="mr-1.5 h-4 w-4" />
              Follow
            </a>
          </Button>
          <Button asChild size="sm">
            <a href="#contact">Enroll</a>
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open menu">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </nav>
    </header>
  );
}
