import { createStyles } from '@mantine/core';

export const useReadonlyInputStyles = createStyles(theme => ({
  readonlyInput: {
    input: {
      ':read-only': {
        border: 'none',
        padding: 0,
        fontSize: theme.fontSizes.md,
        userSelect: 'text',
        cursor: 'text',
      },
    },
  },
}));
