export const localeCheck = (locale: string | undefined) => {
  return locale === undefined ? (locale = 'en') : locale;
};
