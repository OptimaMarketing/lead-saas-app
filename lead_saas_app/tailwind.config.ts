import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#07111F',
        navy: '#0F172A',
        emerald: '#10B981',
        mint: '#14D9A5',
        amber: '#F59E0B',
        violet: '#7C3AED',
        sky: '#2563EB',
        soft: '#F6F8FB',
      },
      boxShadow: {
        soft: '0 18px 60px rgba(15, 23, 42, .08)',
        glow: '0 20px 45px rgba(16, 185, 129, .22)',
      },
    },
  },
  plugins: [],
};
export default config;
