import type { MantineThemeOverride } from '@mantine/core';

import { palette, toMantineColors } from './palette';

export const theme: MantineThemeOverride = {
  globalStyles: _theme => ({
    /* 1.Use a more-intuitive box-sizing model. */
    '*, *::before, *::after': {
      boxSizing: 'border-box',
    },
    /* 2.Remove default margin */
    '*': {
      margin: 0,
      scrollbarColor: `${palette.secondary.default} transparent`,
    },
    /* 3.Allow percentage-based heights in the application */
    'html, body': {
      height: '100%',
    },
    /* 4.Improve media defaults */
    'img, picture, video, canvas': {
      display: 'block',
      maxWidth: '100%',
    },
    '#root': {
      height: '100%',
    },

    '::-webkit-scrollbar': {
      width: '4px',
      height: '4px',
      backgroundColor: 'transparent',
    },

    '::-webkit-scrollbar-thumb': {
      backgroundColor: palette.secondary.default,
      borderRadius: '4px',
    },
  }),
  dir: 'rtl',
  fontFamily: 'IRANSansFaNum, IRANSans',
  fontSizes: {
    xs: '12px',
    sm: '14px',
    md: '16px',
  },
  colors: toMantineColors(palette),
  primaryColor: 'primary',
  defaultRadius: 'sm',
  components: {
    Anchor: {
      defaultProps: {
        underline: false,
      },
    },
    TextInput: {
      defaultProps: {
        errorProps: {
          role: 'alert',
        },
      },
    },
    Modal: {
      styles: {
        modal: {
          padding: '30px !important',
        },
        title: {
          fontWeight: 'bold',
        },
      },
    },
    Select: {
      styles: {
        label: {
          color: palette.fg.subtle,
        },
      },
    },
    NumberInput: {
      styles: {
        label: {
          color: palette.fg.subtle,
        },
      },
    },
    Button: {
      styles: {
        root: {
          fontWeight: 600,
          padding: '6px 12px',
          svg: {
            width: '18px',
            height: '18px',
          },
        },
      },
    },
    Notification: {
      styles: {
        root: {
          paddingBlock: 15,
          paddingRight: 10,
          paddingLeft: 27,
        },
        title: {
          marginBottom: 5,
        },
      },
    },
    Table: {
      styles: {
        root: {
          borderRadius: '4px',
          borderCollapse: 'separate',
          borderSpacing: 0,
        },
      },
    },
  },

  headings: {
    fontFamily: 'IRANSansFaNum, IRANSans',
    sizes: {
      h1: { fontSize: '34px', lineHeight: 1.4 },
      h2: { fontSize: '26px', lineHeight: 1.45 },
      h3: { fontSize: '22px', lineHeight: 1.45 },
      h4: { fontSize: '18px', lineHeight: 1.5 },
      h5: { fontSize: '16px', lineHeight: 1.5 },
      h6: { fontSize: '14px', lineHeight: 1.5 },
    },
  },
};
