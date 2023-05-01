import type { Control, FieldValues, Path } from 'react-hook-form';
import { Controller } from 'react-hook-form';

import type { SelectProps } from './Select';
import { Select } from './Select';

interface Props<T extends FieldValues> extends SelectProps {
  name: Path<T>;
  control: Control<T>;
}

export const ControlledSelect = <T extends FieldValues>({
  control,
  name,
  ...selectProps
}: Props<T>): JSX.Element => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Select
          {...selectProps}
          {...field}
          error={error?.message}
          value={field.value ?? null}
        />
      )}
    />
  );
};
