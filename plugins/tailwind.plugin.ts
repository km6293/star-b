import plugin from 'tailwindcss/plugin'
import { type CSSRuleObject } from 'tailwindcss/types/config'

const FONT_FAMILY = 'var(--font-noto-sans-kr), Arial, Helvetica, sans-serif'

const appFonts = plugin(function ({ addUtilities }) {
  const newUtilities: CSSRuleObject = {
    // bold
    '.star-bold24': {
      fontFamily: FONT_FAMILY,
      fontSize: '1.5rem',
      fontWeight: '700',
      lineHeight: '1.5'
    },
    '.star-bold20': {
      fontFamily: FONT_FAMILY,
      fontSize: '1.25rem',
      fontWeight: '700',
      lineHeight: '1.5'
    },
    '.star-bold16': {
      fontFamily: FONT_FAMILY,
      fontSize: '1rem',
      fontWeight: '700',
      lineHeight: '1.5'
    },
    '.star-bold14': {
      fontFamily: FONT_FAMILY,
      fontSize: '0.875rem',
      fontWeight: '700',
      lineHeight: '1.5'
    },
    '.star-bold12': {
      fontFamily: FONT_FAMILY,
      fontSize: '0.75rem',
      fontWeight: '700',
      lineHeight: '1.5'
    },
    '.star-bold10': {
      fontFamily: FONT_FAMILY,
      fontSize: '0.625rem',
      fontWeight: '700',
      lineHeight: '1.5'
    },
    // medium
    '.star-medium20': {
      fontFamily: FONT_FAMILY,
      fontSize: '1.25rem',
      fontWeight: '500',
      lineHeight: '1.5'
    },
    '.star-medium18': {
      fontFamily: FONT_FAMILY,
      fontSize: '1.125rem',
      fontWeight: '500',
      lineHeight: '1.5'
    },
    '.star-medium16': {
      fontFamily: FONT_FAMILY,
      fontSize: '1rem',
      fontWeight: '500',
      lineHeight: '1.5'
    },
    '.star-medium14': {
      fontFamily: FONT_FAMILY,
      fontSize: '0.875rem',
      fontWeight: '500',
      lineHeight: '1.5'
    },
    '.star-medium12': {
      fontFamily: FONT_FAMILY,
      fontSize: '0.75rem',
      fontWeight: '500',
      lineHeight: '1.5'
    },
    '.star-medium10': {
      fontFamily: FONT_FAMILY,
      fontSize: '0.625rem',
      fontWeight: '500',
      lineHeight: '1.5'
    },
    '.star-medium8': {
      fontFamily: FONT_FAMILY,
      fontSize: '0.5rem',
      fontWeight: '500',
      lineHeight: '1.5'
    },

    // light

    '.star-light14': {
      fontFamily: FONT_FAMILY,
      fontSize: '0.875rem',
      fontWeight: '300',
      lineHeight: '1.5'
    },
    '.star-light12': {
      fontFamily: FONT_FAMILY,
      fontSize: '0.75rem',
      fontWeight: '300',
      lineHeight: '1.5'
    },
    '.star-light10': {
      fontFamily: FONT_FAMILY,
      fontSize: '0.625rem',
      fontWeight: '300',
      lineHeight: '1.5'
    },
    '.star-light8': {
      fontFamily: FONT_FAMILY,
      fontSize: '0.5rem',
      fontWeight: '300',
      lineHeight: '1.5'
    }
  }

  addUtilities(newUtilities)
})

const appBoxes = plugin(function ({ addUtilities }) {
  const newUtilities: CSSRuleObject = {
    '.star-overlay': {}
  }

  addUtilities(newUtilities)
})

export default [appFonts, appBoxes]
