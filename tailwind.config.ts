import type { Config } from 'tailwindcss';
import { designConfig } from './src/design.config';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary:        designConfig.colors.primary,
        'primary-light': designConfig.colors.primaryLight,
        'primary-dark':  designConfig.colors.primaryDark,
        secondary:      designConfig.colors.secondary,
        accent:         designConfig.colors.accent,
        background:     designConfig.colors.background,
        surface:        designConfig.colors.surface,
        'surface-dark': designConfig.colors.surfaceDark,
        'text-primary': designConfig.colors.textPrimary,
        'text-secondary': designConfig.colors.textSecondary,
        'text-light':   designConfig.colors.textLight,
        border:         designConfig.colors.border,
      },
      fontFamily: {
        heading: [designConfig.fonts.display, 'sans-serif'],
        body:    [designConfig.fonts.body, 'sans-serif'],
      },
      animation: {
        'float-slow': 'float-slow 8s ease-in-out infinite',
        'ken-burns': 'kenBurns 12s ease-in-out forwards',
        'cta-pulse': 'ctaPulse 2.5s ease-in-out infinite',
        'marquee-left': 'marqueeLeft 40s linear infinite',
        'marquee-right': 'marqueeRight 45s linear infinite',
        'wave-float': 'waveFloat 6s ease-in-out infinite',
      },
      keyframes: {
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        kenBurns: {
          '0%': { transform: 'scale(1.0)' },
          '100%': { transform: 'scale(1.08)' },
        },
        ctaPulse: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(217, 59, 77, 0.3)' },
          '50%': { boxShadow: '0 0 0 12px rgba(217, 59, 77, 0)' },
        },
        marqueeLeft: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marqueeRight: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        waveFloat: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-2px)' },
        },
      },
      boxShadow: {
        sm: '0 1px 3px rgba(26, 37, 56, 0.04)',
        md: '0 4px 12px -2px rgba(26, 37, 56, 0.06)',
        lg: '0 12px 28px -4px rgba(26, 37, 56, 0.08)',
        xl: '0 20px 40px -8px rgba(26, 37, 56, 0.12)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.25rem',
        '4xl': '1.5rem',
      },
    },
  },
  plugins: [],
};
export default config;
