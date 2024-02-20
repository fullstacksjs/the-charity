import type { TextareaProps } from '@mantine/core';
import { createStyles, Textarea as MantineTextareaInput } from '@mantine/core';
import { forwardRef } from 'react';

const useStyles = createStyles(_ => ({
  readonly: {
    textarea: {
      ':read-only': {
        'border': 'none !important',
        'padding': '0',
        ':placeholder-shown': {
          cursor: 'default',
        },
        '::placeholder': {
          opacity: 0,
        },
      },
      'backgroundColor': 'transparent',
    },
  },
}));

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, readOnly, ...rest }: TextareaProps, ref) => {
    const { classes, cx } = useStyles();

    return (
      <MantineTextareaInput
        ref={ref}
        readOnly={readOnly}
        {...rest}
        className={cx(
          { [classes.readonly]: readOnly },

          className,
        )}
      />
    );
  },
);
