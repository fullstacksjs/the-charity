import { createStyles } from '@mantine/core';

export const useReadonlyInputStyles = createStyles(theme => ({
  readonlyInput: {
    label: {
      color: theme.colors.fg[5],
    },
    input: {
      ':read-only': {
        'border': 'none !important',
        'padding': 0,
        'pointerEvents': 'none',
        'fontSize': theme.fontSizes.md,
        'userSelect': 'text',
        'cursor': 'text',
        'WebkitBoxShadow': '0 0 0px 1000px transparent inset !important',
        '&::placeholder': {
          opacity: 0,
        },
      },
    },
  },
}));
