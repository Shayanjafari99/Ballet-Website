import { AtSign } from "lucide-react";
import { profile } from "@/data/profile";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/40 px-4 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="flex items-center gap-2.5">
          <img
            src={profile.avatarUrl}
            alt={`${profile.nameEn} profile photo`}
            className="h-8 w-8 rounded-full border border-foreground/10 object-cover"
            loading="lazy"
          />
          <p className="font-display text-xl font-semibold text-primary">
            {profile.nameEn}
          </p>
        </div>

        <a
          href={profile.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-foreground/70 transition-colors hover:text-primary"
        >
          <AtSign className="h-4 w-4" />
          @{profile.username}
        </a>

        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} SJ | Designed &amp; Developed by Shayan Jafari
        </p>
      </div>
    </footer>
  );
}
