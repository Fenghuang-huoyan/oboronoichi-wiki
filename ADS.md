# Ads — oboronoichi.wiki

The Native Banner slot after Quick Answer is wired and **turned on** for oboronoichi.wiki only.

`sites/oboronoichi/ads.config.ts` sets `enabled` to true. `afterQuickAnswer.id` is `f9b8506a57b1d692e4617638e4743a17`. `afterQuickAnswer.scriptSrc` and the site-wide `scriptSrc` are `https://bauval.org/21/f9b8506a57b1d692e4617638e4743a17`. That zone is this domain’s own Get Code. No key from another game is stored here. `invokeBase` stays empty. The container id is `container-f9b8506a57b1d692e4617638e4743a17`. The format is `native-banner`.

`analytics.gaId` in `sites/oboronoichi/site.config.ts` is an empty string. The base layout does not load GA4.

Adult and sensitive categories stay off. The 404 page does not render a slot.
