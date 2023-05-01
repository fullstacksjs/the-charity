import type { SelectProps as MantineSelectProps } from '@mantine/core';
import { createStyles, Select as MantineSelect } from '@mantine/core';
import { forwardRef } from 'react';

export type SelectProps = MantineSelectProps;

const useStyles = createStyles(theme => ({
  select: {
    input: {
      ':read-only': {
        border: 'none',
        padding: 0,
        userSelect: 'text',
        cursor: 'text',
        fontSize: theme.fontSizes.md,
      },
    },
  },
}));

export const Select = forwardRef<HTMLInputElement, SelectProps>(
  ({ readOnly, ...rest }: SelectProps, ref) => {
    const { classes } = useStyles();

    return (
      <MantineSelect
        readOnly={readOnly}
        ref={ref}
        {...rest}
        className={classes.select}
      />
    );
  },
);
