
export enum SocialMedia {
  Tiktok = "Tiktok",
  Twitch = "Twitch",
  Youtube = "Youtube",
  Mastodon = "Mastodon",
  Github = "Github",
  Substack = "Substack",
  Email = "Email",
};

export const SubCounts: Record<SocialMedia, number> = {
  Tiktok: 7189,
  Twitch: 8,
  Mastodon: 3,
  Youtube: 1,
  Github: 0,
  Substack: 0,
  Email: NaN,
};

export const Usernames: Record<SocialMedia, string> = {
  Tiktok: "saxxie.dev",
  Twitch: "saxxie_dev",
  Mastodon: "saxxie@types.pl",
  Youtube: "saxxie-dev",
  Github: "saxxie-dev",
  Substack: "saxxie",
  Email: "c@saxxie.dev",
};

export const Links: Record<SocialMedia, string> = {
  Tiktok: "https://www.tiktok.com/@saxxie.dev",
  Twitch: "https://www.twitch.tv/saxxie_dev",
  Mastodon: "https://types.pl/@saxxie",
  Youtube: "https://www.youtube.com/@saxxie-dev",
  Github: "https://github.com/saxxie-dev",
  Substack: "https://saxxie.substack.com",
  Email: "mailto: c@saxxie.dev",
};

export const SocialColors: Record<SocialMedia, string> = {
  Tiktok: '#78716C',
  Twitch: '#9146ff',
  Mastodon: '#573dd0',
  Youtube: '#ff0000',
  Github: '#475569',
  Substack: '#ff6e24',
  Email: '#1a73e8',
};