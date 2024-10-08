"use client"

import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import { ReactElement } from "react";
import { Navigation } from "../ChangeTranslation";

const Header = (): ReactElement => {
  const { setTheme } = useTheme();
  const t = useTranslations();


  return (
    <div className="bg-slate-850 absolute z-10 right-2 top-2 flex">
      <div>
        <button onClick={() => setTheme("light")}>{t('themes.light')}</button>
        <button onClick={() => setTheme("dark")}>{t('themes.dark')}</button>
        <button onClick={() => setTheme("system")}>{t('themes.system')}</button>
      </div>
      <Navigation />
    </div>
  );
};

export default Header;