import type { DateInputProps } from 'mantine-datepicker-jalali';
import { DateInput as MantineJalaliDateInput } from 'mantine-datepicker-jalali';
import { forwardRef } from 'react';

import { useReadonlyInputStyles } from '../TextInput/useReadonlyInputStyles';

export type { DateInputProps };

export const DateInput = forwardRef<HTMLInputElement, DateInputProps>(
  ({ className, readOnly, ...rest }: DateInputProps, ref) => {
    const { classes, cx } = useReadonlyInputStyles();

    return (
      <MantineJalaliDateInput
        allowDeselect
        popoverProps={{
          position: 'left',
        }}
        ref={ref}
        sx={theme => ({
          direction: 'ltr',
          color: theme.colors.secondaryDefault[6],
        })}
        locale="fa"
        readOnly={readOnly}
        rightSectionProps={{
          style: {
            display: readOnly ? 'none' : 'flex',
          },
        }}
        rightSection={!readOnly ? rest.rightSection : null}
        className={cx(classes.readonlyInput, className)}
        {...rest}
      />
    );
  },
);
