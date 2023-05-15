import i18n from "sveltekit-i18n";

/** @type {import('sveltekit-i18n').Config} */
const config = {
  loaders: [
    {
      locale: "en",
      key: "common",
      loader: async () => (await import("./en/common.json")).default,
    },
    {
      locale: "en",
      key: "sign_up",
      loader: async () => (await import("./en/sign_up.json")).default,
    },
    {
      locale: "en",
      key: "sign_in",
      loader: async () => (await import("./en/sign_in.json")).default,
    },
    {
      locale: "en",
      key: "layout",
      loader: async () => (await import("./en/layout.json")).default,
    },
    {
      locale: "en",
      key: "main",
      loader: async () => (await import("./en/main.json")).default,
    },
    {
      locale: "ko",
      key: "common",
      loader: async () => (await import("./ko/common.json")).default,
    },
    {
      locale: "ko",
      key: "sign_up",
      loader: async () => (await import("./ko/sign_up.json")).default,
    },
    {
      locale: "ko",
      key: "sign_in",
      loader: async () => (await import("./ko/sign_in.json")).default,
    },
    {
      locale: "ko",
      key: "layout",
      loader: async () => (await import("./ko/layout.json")).default,
    },
    {
      locale: "ko",
      key: "main",
      loader: async () => (await import("./ko/main.json")).default,
    },
  ],
};

export const { t, locale, locales, loading, loadTranslations } = new i18n(
  config
);
