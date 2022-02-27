const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        '3xs': '.5rem',
        '2xs': '.625rem',
      },
      transitionProperty: {
        'border-color': 'boder-color',
        'border-color-and-width': 'border-color, width',
        visibility: 'visibility',
        width: 'width',
      },
      borderRadius: theme => ({
        ...theme('spacing'),
        full: '9999px',
      }),
      maxWidth: theme => ({
        ...theme('spacing'),
        'desktop-menu': theme('spacing.48'),
        'mobile-menu': `calc(${theme('spacing.full')} - ${theme('spacing.16')})`,
      }),
      width: theme => ({
        'desktop-menu': theme('spacing.48'),
      }),
      height: theme => ({
        'text-xs': theme('fontSize.xs'),
        'text-sm': theme('fontSize.sm'),
        'text-base': theme('fontSize.base'),
      }),
      screens: {
        print: { raw: 'print' },
      },
    },
    colors: {
      brand: {
        400: '#ffdf49',
        500: '#ffcd00',
        600: '#f5b900', // ~brand/yellow
        700: '#ffa000',
        over: '#FFFFFF',
        highlight: '#FFBE00',
      },
      base: {
        25: '#ffffff',
        50: '#fcfcfc',
        100: '#fafafa',
        200: '#f3f3f3', // ~neutral-05
        300: '#d1d1d1', // ~neutral-20
        400: '#c0c0c0',
        500: '#9e9e9e', // ~neutral-80
        600: '#545454',
        700: '#343434', // ~brand/black
        800: '#242424',
        900: '#1f1f1f',
        975: '#000000',
      },
      danger: {
        100: '#f2cdcd',
        300: '#ff6e6e',
        400: '#ff5252',
        500: '#e54a4a',
        600: '#bf3d3d',
        700: '#7f2929',
      },
      success: {
        100: '#cdf2cd',
        300: '#6eff6e',
        400: '#52ff52',
        500: '#4ae54a',
        600: '#3dbf3d',
        700: '#297f29',
      },
      link: {
        400: '#498bfc',
        500: '#3074e0',
      },
      transparent: 'transparent',
    },
  },
  variants: {},
  purge: [
    '**/*.vue',
  ],
}
