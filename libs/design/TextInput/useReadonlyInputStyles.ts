import { createStyles } from '@mantine/core';

export const useReadonlyInputStyles = createStyles(theme => ({
  readonlyInput: {
    input: {
      ':read-only': {
        'border': 'none',
        'padding': 0,
        'pointerEvents': 'none',
        'fontSize': theme.fontSizes.md,
        'userSelect': 'text',
        'cursor': 'text',
        '&::placeholder': {
          // FIXME: it should be removed when the default selectInput option is added.
          opacity: 0,
        },
      },
    },
  },
}));
