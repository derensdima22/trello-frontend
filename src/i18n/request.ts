import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';
 
export default getRequestConfig(async ({locale}) => {
  const baseLocale = new Intl.Locale(locale).baseName;
  // Validate that the incoming `locale` parameter is valid
  if (!routing.locales.includes(baseLocale)) notFound();
 
  return {
    messages: (await import(`../messages/${locale}.json`)).default
  };
});