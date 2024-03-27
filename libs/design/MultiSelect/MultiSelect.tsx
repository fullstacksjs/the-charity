import type { MultiSelectProps as MantineMultiSelectProps } from '@mantine/core';
import { createStyles, MultiSelect as MantineMultiSelect } from '@mantine/core';
import { forwardRef } from 'react';

import { useReadonlyInputStyles } from '../TextInput/useReadonlyInputStyles';

export type MultiSelectProps = MantineMultiSelectProps;

const useStyles = createStyles(theme => ({
  select: {
    label: {
      color: theme.colors.fg[5],
    },
  },
}));

export const MultiSelect = forwardRef<HTMLInputElement, MultiSelectProps>(
  ({ className, readOnly, ...rest }, ref) => {
    const { classes, cx } = useReadonlyInputStyles();
    const {
      classes: { select: selectClass },
    } = useStyles();

    return (
      <MantineMultiSelect
        ref={ref}
        readOnly={readOnly}
        {...rest}
        className={cx(
          { [classes.readonlyInput]: readOnly },
          selectClass,
          className,
        )}
      />
    );
  },
);
