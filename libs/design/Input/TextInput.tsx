import type { TextInputProps } from '@mantine/core';
import { createStyles, TextInput as MantineTextInput } from '@mantine/core';
import { forwardRef } from 'react';

interface Props extends TextInputProps {
  label: string;
}

const useStyles = createStyles(theme => ({
  textInput: {
    label: {
      color: theme.colors.fgSubtle[6],
    },
    input: {
      ':read-only': {
        'border': 'none',
        'padding': 0,
        'fontSize': theme.fontSizes.md,
        ':placeholder-shown': {
          cursor: 'default',
        },
        '::placeholder': {
          opacity: 0,
        },
      },
    },
  },
}));

export const TextInput = forwardRef<HTMLInputElement, Props>(
  ({ label, ...rest }: Props, ref) => {
    const { classes } = useStyles();

    return (
      <MantineTextInput
        label={label}
        ref={ref}
        {...rest}
        className={classes.textInput}
      />
    );
  },
);
