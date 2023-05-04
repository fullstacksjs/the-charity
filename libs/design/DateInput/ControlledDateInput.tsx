import { CalendarIcon } from '@camp/icons';
import type { Control, FieldValues, Path } from 'react-hook-form';
import { Controller } from 'react-hook-form';

import type { DateInputProps } from './DateInput';
import { DateInput } from './DateInput';

interface Props<T extends FieldValues> extends DateInputProps {
  name: Path<T>;
  control: Control<T>;
}

export const ControlledDateInput = <T extends FieldValues>({
  control,
  name,
  ...dateInputProps
}: Props<T>): JSX.Element => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <DateInput
          {...dateInputProps}
          {...field}
          rightSection={
            field.value ? undefined : (
              <CalendarIcon stroke="currentColor" size={16} />
            )
          }
          error={error?.message}
          value={field.value ?? null}
        />
      )}
    />
  );
};
