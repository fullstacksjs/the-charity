import type { SelectProps as MantineSelectProps } from '@mantine/core';
import { Select as MantineSelect } from '@mantine/core';
import { forwardRef } from 'react';

import { useReadonlyInputStyles } from '../Input/useReadonlyInputStyles';

export type SelectProps = MantineSelectProps;

export const Select = forwardRef<HTMLInputElement, SelectProps>(
  ({ className = '', ...rest }: SelectProps, ref) => {
    const { classes } = useReadonlyInputStyles();

    return (
      <MantineSelect
        ref={ref}
        {...rest}
        className={`${classes.readonlyInput} ${className}`}
      />
    );
  },
);
