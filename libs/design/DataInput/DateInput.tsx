import 'dayjs/locale/fa';

import { DateIcon } from '@camp/icons';
import { createStyles } from '@mantine/core';
import { DatePickerInput } from 'mantine-datepicker-jalali';

import type { InputProps } from '../TextInput';

const useStyles = createStyles(theme => ({
  DateInput: {
    label: {
      color: theme.colors.fgSubtle[6],
    },
  },
}));

export const DateInput = ({ label, placeholder, error }: InputProps) => {
  const { classes } = useStyles();
  return (
    <DatePickerInput
      className={classes.DateInput}
      rightSection={<DateIcon />}
      label={`${label}:`}
      error={error}
      placeholder={placeholder}
      style={{ direction: 'rtl' }}
      locale="fa"
      defaultValue={new Date()}
    />
  );
};
