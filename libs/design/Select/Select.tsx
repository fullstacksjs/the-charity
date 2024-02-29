import type { SelectProps as MantineSelectProps } from '@mantine/core';
import { createStyles, Select as MantineSelect } from '@mantine/core';
import { forwardRef } from 'react';

import { useReadonlyInputStyles } from '../TextInput/useReadonlyInputStyles';

export type SelectProps = MantineSelectProps;
const useStyles = createStyles(theme => ({
  select: {
    label: {
      color: theme.colors.fg[5],
    },
  },
}));

export const Select = forwardRef<HTMLInputElement, SelectProps>(
  ({ className, readOnly, ...rest }, ref) => {
    const { classes, cx } = useReadonlyInputStyles();
    const {
      classes: { select: selectClass },
    } = useStyles();

    return (
      <MantineSelect
        ref={ref}
        readOnly={readOnly}
        {...rest}
        className={cx(
          { [classes.readonlyInput]: readOnly },
          className,
          selectClass,
        )}
      />
    );
  },
);
