import type { SelectProps as MantineSelectProps } from '@mantine/core';
import { Select as MantineSelect } from '@mantine/core';
import { forwardRef } from 'react';

import { useReadonlyInputStyles } from '../TextInput/useReadonlyInputStyles';

export type SelectProps = MantineSelectProps;

// FIXME fix label color
export const Select = forwardRef<HTMLInputElement, SelectProps>(
  ({ className, readOnly, ...rest }, ref) => {
    const { classes, cx } = useReadonlyInputStyles();

    return (
      <MantineSelect
        ref={ref}
        readOnly={readOnly}
        {...rest}
        className={cx({ [classes.readonlyInput]: readOnly }, className)}
      />
    );
  },
);
