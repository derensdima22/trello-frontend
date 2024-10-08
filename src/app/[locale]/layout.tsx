import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import { SITE_NAME } from "@/constants";
import ReactQueryProvider from "./providers";
import { ThemeProvider } from "../../themes";
import classNames from "classnames";
import { getMessages } from 'next-intl/server';
import { NextIntlClientProvider} from 'next-intl';
import { Navigation } from "@/components/ChangeTranslation";

import "./globals.scss";
import Header from "@/components/Header/Header";

const notoSans = Noto_Sans({
  subsets: ['cyrillic', 'latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-zen',
  style: ['normal']
})

export const metadata: Metadata = {
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`
  },
  description: "new app nextJs",
};

export default async function RootLayout({
  children,
  params: {locale}
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={classNames(
          notoSans.className,
           'antialiased dark:bg-blue-900 bg-gray-200 h-lvh dark:text-white relative'
        )}
      >
        <NextIntlClientProvider messages={messages}>
          <ReactQueryProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <Header/>
              {children}
            </ThemeProvider>
          </ReactQueryProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
