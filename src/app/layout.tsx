import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import { SITE_NAME } from "@/constants";
import ReactQueryProvider from "./providers";
import { ThemeProvider } from "../themes";
import classNames from "classnames";
import "./globals.scss";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={classNames(
          notoSans.className,
           'antialiased dark:bg-gradient-dark bg-gradient h-lvh dark:text-red'
        )}
      >
        <ReactQueryProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
