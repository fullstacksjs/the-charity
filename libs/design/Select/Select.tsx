import type { SelectProps as MantineSelectProps } from '@mantine/core';
import { Select as MantineSelect } from '@mantine/core';
import { forwardRef } from 'react';

import { useReadonlyInputStyles } from '../Input/useReadonlyInputStyles';

export type SelectProps = MantineSelectProps;

export const Select = forwardRef<HTMLInputElement, SelectProps>(
  ({ className, readOnly, ...rest }: SelectProps, ref) => {
    const { classes, cx } = useReadonlyInputStyles();

    return (
      <MantineSelect
        ref={ref}
        {...rest}
        className={cx({ [classes.readonlyInput]: readOnly }, className)}
      />
    );
  },
);
