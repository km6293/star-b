import type { Config } from 'tailwindcss'
import tailwindPlugins from './plugins/tailwind.plugin'
import { LAYOUT_MIN_WIDTH, HEADER_HEIGHT, HOME_MIN_HEIGHT } from './configs/tailwind.constant'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        'star-desktop': '1200px'
      },
      boxShadow: {
        dropdown: '0 0 2px rgba(0, 0, 0, .05), 0 2px 8px rgba(0, 0, 0, .1)',
        modal: '0 0 4px rgba(0, 0, 0, .4), 0 4px 16px rgba(0, 0, 0, .5)'
      },
      height: {
        header: HEADER_HEIGHT
      },
      minHeight: {
        home: HOME_MIN_HEIGHT
      },
      minWidth: {
        layout: LAYOUT_MIN_WIDTH
      },
      padding: {
        header: HEADER_HEIGHT
      },
      rotate: {
        360: '360deg'
      },
      colors: {
        // Neutral
        neutral: {
          0: 'var(--neutral-0)',
          1: 'var(--neutral-1)',
          2: 'var(--neutral-2)',
          5: 'var(--neutral-5)',
          7: 'var(--neutral-7)',
          10: 'var(--neutral-10)',
          20: 'var(--neutral-20)',
          30: 'var(--neutral-30)',
          40: 'var(--neutral-40)',
          50: 'var(--neutral-50)',
          55: 'var(--neutral-55)',
          60: 'var(--neutral-60)',
          70: 'var(--neutral-70)',
          80: 'var(--neutral-80)',
          90: 'var(--neutral-90)',
          95: 'var(--neutral-95)',
          99: 'var(--neutral-99)',
          100: 'var(--neutral-100)'
        },

        // Background
        bg: {
          weak: 'var(--bg-weak)',
          base: 'var(--bg-base)',
          strong: 'var(--bg-strong)'
        }
      }
    }
  },
  plugins: [...tailwindPlugins]
}

export default config
