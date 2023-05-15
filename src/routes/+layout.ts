import { loadTranslations, locale } from "$lib/locale/translations";
// import type { LayoutLoad } from './$types';

export const load = async ({ url }) => {
  const { pathname } = url;
  const defaultLocale = "ko"; // get from cookie, user session, ...
  const initLocale = locale.get() || defaultLocale; // set default if no locale already set
  await loadTranslations(initLocale, pathname); // keep this just before the `return`

  return {};
};
