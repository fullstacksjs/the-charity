import type { MultiSelectProps as MantineMultiSelectProps } from '@mantine/core';
import { MultiSelect as MantineMultiSelect } from '@mantine/core';
import { forwardRef } from 'react';

import { useReadonlyInputStyles } from '../TextInput/useReadonlyInputStyles';

export type MultiSelectProps = MantineMultiSelectProps;

export const MultiSelect = forwardRef<HTMLInputElement, MultiSelectProps>(
  ({ className, readOnly, ...rest }, ref) => {
    const { classes, cx } = useReadonlyInputStyles();

    return (
      <MantineMultiSelect
        ref={ref}
        readOnly={readOnly}
        {...rest}
        className={cx({ [classes.readonlyInput]: readOnly }, className)}
      />
    );
  },
);
