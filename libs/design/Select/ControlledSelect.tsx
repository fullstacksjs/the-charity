import { type SelectProps } from '@mantine/core';
import { Select } from '@mantine/core';
import { type Control, type FieldValues, type Path } from 'react-hook-form';
import { Controller } from 'react-hook-form';

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
