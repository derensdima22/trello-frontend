import { COLORS } from "./src/constants/color.constants";
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  mode: 'jit',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: () => ({
        'gradient-dark': 'linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,6,59,1) 52%)',
        'gradient': 'linear-gradient(180deg, rgba(255,255,255,1) 50%, rgba(226,226,226,1) 100%)',
      }),
      colors: COLORS,
      fontSize: {
        'xs': '0.625rem',
        'sm': '0.75rem',
        'md': '0.8125rem',
        'base': '0.875rem',
        'lg': '1rem',
        'xl': '1.125rem',
        '2xl': '1.25rem',
        '2.5xl': '1.2857142857142856rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
        '5xl': '2.25rem',
        '6xl': '2.5rem',
        '7xl': '3rem',
        '8xl': '4rem',
        '9xl': '6rem',
        '10xl': '8rem'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        dm: ['DM Sans', 'sans-serif']
      },
      boxShadow: {
        '3xl': '14px 17px 40px 4px',
        inset: 'inset 0px 4px 4px inset',
        darkinset: '0px 4px 4px inset'
      },
      spacing: {
        0.5: '0.12rem',
        layout: '1.4rem',
        'big-layout': '2.3rem'
      },
      transitionDuration: {
        DEFAULT: '266ms'
      },
      screens: {
        sm: '576px',
        'sm-max': { max: '576px' },
        md: '768px',
        'md-max': { max: '768px' },
        lg: '992px',
        'lg-max': { max: '992px' },
        xl: '1200px',
        'xl-max': { max: '1200px' },
        '2xl': '1320px',
        '2xl-max': { max: '1320px' },
        '3xl': '1600px',
        '3xl-max': { max: '1600px' },
        '4xl': '1850px',
        '5xl-max': { max: '1850px' },
      },
      shadow: {
        100: 'var(--shadow-100)',
        500: 'rgba(112, 144, 176, 0.08)'
      }
    },
  },
  plugins: [],
};
export default config;
