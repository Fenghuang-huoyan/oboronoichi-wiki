/**
 * Adsterra Native Banner for oboronoichi.wiki only, directly after Quick Answer
 * on the homepage and guide pages.
 *
 * Zone and script are this domain's own Get Code. Do not paste a key or host from another game.
 * Adult and sensitive categories stay off. The 404 page does not render a slot.
 * analytics.gaId in site.config.ts stays an empty string.
 */
export type AdSlotConfig = {
  id: string;
  format: string;
  /** Full script URL. When set, used instead of `${invokeBase}/${id}/invoke.js`. */
  scriptSrc?: string;
  invokeBase?: string;
  containerPrefix?: string;
};

const slots = {
  afterQuickAnswer: {
    id: 'f9b8506a57b1d692e4617638e4743a17',
    format: 'native-banner',
    scriptSrc: 'https://bauval.org/21/f9b8506a57b1d692e4617638e4743a17',
  },
} as const satisfies Record<string, AdSlotConfig>;

export const adsConfig = {
  network: 'adsterra' as const,
  enabled: true,
  invokeBase: '',
  /** Site-wide full script URL. A slot `scriptSrc` overrides this. */
  scriptSrc: 'https://bauval.org/21/f9b8506a57b1d692e4617638e4743a17',
  containerPrefix: 'container-',
  slots,
};

export type AdSlotName = keyof typeof slots;

export function resolveAdPlacement(name: AdSlotName) {
  const slot: AdSlotConfig = slots[name];
  const invokeBase = (slot.invokeBase ?? adsConfig.invokeBase).replace(/\/$/, '');
  const containerPrefix = slot.containerPrefix ?? adsConfig.containerPrefix;
  const id = slot.id.trim();
  const explicitSrc = (slot.scriptSrc ?? adsConfig.scriptSrc).trim();
  const scriptSrc = explicitSrc || (id && invokeBase ? `${invokeBase}/${id}/invoke.js` : '');
  return {
    id,
    format: slot.format,
    invokeBase,
    containerId: `${containerPrefix}${id}`,
    scriptSrc,
    active:
      adsConfig.enabled &&
      id.length > 0 &&
      !id.startsWith('ADSTERRA_') &&
      scriptSrc.length > 0,
  };
}
