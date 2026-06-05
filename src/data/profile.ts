// Live data extracted from instagram.com/shiraz_ballet_academy
// (public, logged-out mobile fetch on 2026-06-05).
// Photos: posts are not visible to logged-out fetchers, so the carousel
// still uses Unsplash stand-ins.

export const profile = {
  /** Display name, Persian (Farsi) */
  nameFa: "آکادمی باله صبا",
  /** Display name, transliteration */
  nameEn: "Saba Ballet Academy",
  /** @handle */
  username: "shiraz_ballet_academy",
  /** Profile URL */
  instagramUrl: "https://www.instagram.com/shiraz_ballet_academy/",
  /** 18,261 followers (verified via fetched payload) */
  followers: 18_261,
  following: 688,
  /** Public profile photo, downloaded 2026-06-05 from instagram CDN. */
  avatarUrl: "/avatar.jpg",
  /** Bio, original Persian, line breaks preserved */
  bioFa: "🔱  استودیو باله صبا 🔱\nآموزش آکادمیک باله  (کلاسیک )\nاز مبتدی تا پیشرفته \nویژه کودکان و بزرگسالان",
  /** Bio, English translation for the marketing site */
  bioEn:
    "Saba Ballet Studio — academic classical ballet training, from beginner through advanced, for children and adults.",
  /** Short pitch used in the hero (English) */
  pitchEn:
    "A classical ballet school in Shiraz with a community of more than 18,000 followers on Instagram. Training for every level, from a child's first class to advanced pointe work.",
} as const;

export function formatFollowers(n: number): string {
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
  if (n >= 1_000) return (n / 1_000).toFixed(1).replace(/\.0$/, "") + "K";
  return n.toString();
}
