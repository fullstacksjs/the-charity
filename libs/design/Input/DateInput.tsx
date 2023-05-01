import type { DateInputProps } from 'mantine-datepicker-jalali';
import { DateInput as MantineJalaliDateInput } from 'mantine-datepicker-jalali';
import { forwardRef } from 'react';

import { useReadonlyInputStyles } from './useReadonlyInputStyles';

export const DateInput = forwardRef<HTMLInputElement, DateInputProps>(
  ({ className = '', readOnly, ...rest }: DateInputProps, ref) => {
    const { classes } = useReadonlyInputStyles();

    return (
      <MantineJalaliDateInput
        ref={ref}
        {...rest}
        readOnly={readOnly}
        rightSection={!readOnly ? rest.rightSection : null}
        className={`${classes.readonlyInput} ${className}`}
      />
    );
  },
);
