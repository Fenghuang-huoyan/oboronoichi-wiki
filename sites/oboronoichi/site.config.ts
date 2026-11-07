export const siteConfig = {
  siteName: 'Oboro no Ichi Guide',
  domain: 'oboronoichi.wiki',
  url: 'https://oboronoichi.wiki',
  gameTitle: 'Oboro no Ichi',
  steamAppId: 4559930,
  steamUrl: 'https://store.steampowered.com/app/4559930/Oboro_no_Ichi/',
  supportEmail: 'thelabaofficial@gmail.com',
  social: [
    { href: 'https://discord.gg/fDRQE8DWxc', label: 'Discord' },
    { href: 'https://www.youtube.com/@thelabaofficial', label: 'YouTube' },
    { href: 'https://x.com/TheLabaOfficial', label: 'X' },
    { href: 'https://bsky.app/profile/thelaba.bsky.social', label: 'Bluesky' },
    { href: 'https://www.instagram.com/thelabaofficial/', label: 'Instagram' },
    { href: 'https://www.threads.com/@thelabaofficial', label: 'Threads' },
    { href: 'https://www.tiktok.com/@thelaba_dev', label: 'TikTok' },
  ],
  developer: 'TheLaba',
  publisher: 'TheLaba',
  tagline: 'Unofficial English fan guide to the spiritual market sim: stalls, building, and market hours.',
  locale: 'en',
  themeColor: '#0e1418',
  contentRoot: 'oboronoichi',
  homeTitle: 'Oboro no Ichi Guide — Spiritual Market, Release Date, and Early Access',
  homeDescription:
    'Unofficial English guide to Oboro no Ichi (Steam AppID 4559930). TheLaba’s cozy spiritual market sim, Early Access on 9 Nov 2026. Not affiliated with TheLaba or Valve.',
  analytics: {
    gaId: '',
  },
  art: {
    hero: '/images/official/steam/library-hero.jpg',
    heroAlt:
      'Official Steam library hero for Oboro no Ichi: a lantern-lit boardwalk, a wooden stall, and a torii beside dark water',
    header: '/images/official/steam/header.jpg',
    headerAlt:
      'Official Steam header for Oboro no Ichi: the full title over a waterside stall, floating lanterns, and a torii',
    ogImage: '/images/official/steam/library-hero.jpg',
  },
  ads: {
    network: 'adsterra' as const,
    format: 'native-banner' as const,
  },
  disclaimer:
    'oboronoichi.wiki is an unofficial fan-made guide for Oboro no Ichi. It is not affiliated with, endorsed by, or sponsored by TheLaba, Valve, or Steam. All game content, names, artwork, and trademarks belong to their respective owners. The game is Early Access and can change. This site does not sell the game, redeem codes, or recover accounts. The email in the footer is the support address on the Steam store page. Mail sent there does not reach the people who edit this wiki.',
  nav: [
    { href: '/', label: 'Home' },
    { href: '/guide', label: 'Guide' },
    { href: '/market', label: 'Market' },
    { href: '/build', label: 'Build' },
    { href: '/stalls', label: 'Stalls' },
  ],
  moreNav: [
    { href: '/about', label: 'About' },
    { href: '/privacy', label: 'Privacy' },
    { href: '/disclaimer', label: 'Disclaimer' },
  ],
  footerNav: [
    { href: '/guide', label: 'Guide' },
    { href: '/market', label: 'Market' },
    { href: '/build', label: 'Build' },
    { href: '/stalls', label: 'Stalls' },
    { href: '/about', label: 'About' },
    { href: '/privacy', label: 'Privacy' },
    { href: '/disclaimer', label: 'Disclaimer' },
  ],
  version: {
    label: 'Checked 7 Nov 2026',
    detail:
      'Store text, platforms, languages, categories, the demo link, system requirements, and the Early Access answers are from the Steam appdetails API and the English store page on 7 Nov 2026. The world note is from the Steam community announcement dated 13 May 2026. No launch client was played for this page. No public price was in that appdetails payload.',
  },
  databases: [
    {
      href: 'https://store.steampowered.com/app/4559930/Oboro_no_Ichi/',
      label: 'Steam store page',
    },
    {
      href: 'https://store.steampowered.com/app/5271720',
      label: 'Steam demo page',
    },
    {
      href: 'https://steamcommunity.com/app/4559930/announcements/detail/1832700592787094',
      label: 'Devlog 1, 13 May 2026',
    },
  ],
} as const;

export type NavItem = { href: string; label: string };
