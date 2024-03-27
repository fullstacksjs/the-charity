import type { Nullable } from '@fullstacksjs/toolbox';
import type { Control, FieldValues, Path, PathValue } from 'react-hook-form';
import { Controller } from 'react-hook-form';

import type { MultiSelectProps } from './MultiSelect';
import { MultiSelect } from './MultiSelect';

interface Props<T extends FieldValues> extends MultiSelectProps {
  name: Path<T>;
  control: Control<T>;
  presentation?: (value: Nullable<PathValue<T, Path<T>>>) => JSX.Element;
}

export const ControlledMultiSelect = <T extends FieldValues>({
  control,
  name,
  presentation,
  ...selectProps
}: Props<T>): JSX.Element => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) =>
        presentation && selectProps.readOnly ? (
          presentation(field.value)
        ) : (
          <MultiSelect
            {...selectProps}
            {...field}
            error={error?.message}
            value={(field.value ?? null) as any}
          />
        )
      }
    />
  );
};
