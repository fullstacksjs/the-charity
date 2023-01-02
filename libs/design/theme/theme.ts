import type { MantineThemeOverride } from '@mantine/core';

import { toMantineColors } from './themeUtils';

export const colors = {
  fgDefault: '#212529',
  fgMuted: '#495057',
  fgSubtle: '#ADB5BD',
  fgOnAccent: '#FFFFFF',
  fgOnDisabled: '#ADB5BD',
  fgDisabled: '#E9ECEF',
  bgSurface: '#FFFFFF',
  bgMuted: '#DEE2E6',
  bgSubtle: '#F1F3F5',
  bgCanvas: '#FCFCFC',
  bgDisabled: '#F1F3F5',
  primaryDefault: '#4C6EF5',
  primaryEmphasized: '#364FC7',
  primaryMuted: '#748FFC',
  primarySubtle: '#EDF2FF',
  secondaryDefault: '#868E96',
  secondaryEmphasized: '#495057',
  secondaryMuted: '#ADB5BD',
  secondarySubtle: '#F8F9FA',
  helpDefault: '#9775FA',
  helpEmphasized: '#845EF7',
  helpMuted: '#B197FC',
  helpSubtle: '#E5DBFF',
  successDefault: '#37B24D',
  successEmphasized: '#2B8A3E',
  successMuted: '#40C057',
  successSubtle: '#EBFBEE',
  infoDefault: '#4DABF7',
  infoEmphasized: '#339AF0',
  infoMuted: '#74C0FC',
  infoSubtle: '#D0EBFF',
  infoOnInfo: '#FFFFFF',
  errorDefault: '#F03E3E',
  errorEmphasized: '#C92A2A',
  errorMuted: '#FA5252',
  errorSubtle: '#FFE3E3',
  warningDefault: '#F59F00',
  warningEmphasized: '#E67700',
  warningMuted: '#FAB005',
  warningSubtle: '#FFF9DB',
};

export const theme: MantineThemeOverride = {
  globalStyles: _theme => ({
    /* 1.Use a more-intuitive box-sizing model. */
    '*, *::before, *::after': {
      boxSizing: 'border-box',
    },
    /* 2.Remove default margin */
    '*': {
      margin: 0,
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
    /* eslint-enable @typescript-eslint/naming-convention */
  }),
  dir: 'rtl',
  fontFamily: 'IRANSansFaNum, IRANSans',
  colors: toMantineColors(colors),
  primaryColor: 'indigo',
  defaultRadius: 'sm',
  components: {
    Modal: {
      styles: {
        modal: {
          padding: '30px !important',
        },
        header: {
          marginBottom: '40px',
        },
      },
    },
    Button: {
      styles: {
        root: { fontWeight: 500 },
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
  },
};
