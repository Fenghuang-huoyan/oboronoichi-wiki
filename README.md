# Oboro no Ichi Guide

Unofficial English fan guide for [Oboro no Ichi](https://store.steampowered.com/app/4559930/Oboro_no_Ichi/) (Steam AppID **4559930**), aimed at **oboronoichi.wiki**.

Not affiliated with TheLaba, Valve, or Steam. The site does not sell the game, redeem codes, or recover accounts. The name on every page is the full title, Oboro no Ichi.

## Build

```bash
npm install
npm run dev      # http://localhost:4329
npm run build
npm run preview  # http://localhost:4329
```

Node 22. The build is a static Astro site (`dist/`). `astro.config.mjs` sets `site` to `https://oboronoichi.wiki`.

## Layout

| Layer | Path | Role |
| --- | --- | --- |
| Site config | `sites/oboronoichi/site.config.ts` | Domain, Steam AppID, theme, nav |
| Ads | `sites/oboronoichi/ads.config.ts` | Adsterra Native Banner for this domain |
| Active site | `sites/active` → `oboronoichi` | What the build reads |
| Framework | `framework/` | Layout, SEO, ad slot |
| Content | `content/oboronoichi/` | Guide pages and JSON |
| Routes | `src/pages/` | Home, guide slug, 404 |

`analytics.gaId` is an empty string, so the base layout does not load GA4. The Adsterra Native Banner after Quick Answer is enabled for oboronoichi.wiki only. See [ADS.md](ADS.md).

Steam art lives in `public/images/official/steam/` with `ATTRIBUTION.txt`. This repository does not buy a domain, edit DNS, or deploy. Vercel can serve the static `dist/` output.

There is no codes page. The Steam store page and the 13 May 2026 announcement do not describe a redeem-code program.

Content routes are `/`, `/guide`, `/market`, `/build`, and `/stalls`. About, Privacy, Disclaimer, and the 404 page sit beside those.
