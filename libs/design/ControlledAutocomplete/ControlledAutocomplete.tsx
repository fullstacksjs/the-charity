import type { Nullable } from '@fullstacksjs/toolbox';
import type { AutocompleteProps } from '@mantine/core';
import { Autocomplete, Loader } from '@mantine/core';
import type { Control, FieldValues, Path, PathValue } from 'react-hook-form';
import { Controller } from 'react-hook-form';

interface Props<T extends FieldValues> extends AutocompleteProps {
  name: Path<T>;
  control: Control<T>;
  loading?: boolean;
  presentation?: (value: Nullable<PathValue<T, Path<T>>>) => JSX.Element;
}

export const ControlledAutocomplete = <T extends FieldValues>({
  control,
  name,
  presentation,
  loading = false,
  ...inputProps
}: Props<T>): JSX.Element => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) =>
        presentation && inputProps.readOnly ? (
          presentation(field.value)
        ) : (
          <Autocomplete
            rightSection={loading ? <Loader size={18} /> : null}
            {...inputProps}
            {...field}
            error={error?.message}
            value={field.value}
          />
        )
      }
    />
  );
};
