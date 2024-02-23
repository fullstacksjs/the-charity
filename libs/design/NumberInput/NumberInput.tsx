import type { Nullable } from '@fullstacksjs/toolbox';
import type { NumberInputProps } from '@mantine/core';
import { createStyles, NumberInput as MantineNumberInput } from '@mantine/core';
import { forwardRef } from 'react';
import type { Control, FieldValues, Path, PathValue } from 'react-hook-form';
import { Controller } from 'react-hook-form';

import { useReadonlyInputStyles } from '../TextInput/useReadonlyInputStyles';

const useStyles = createStyles(_ => ({
  numberInput: {
    input: {
      ':read-only': {
        ':placeholder-shown': {
          cursor: 'default',
        },
        '::placeholder': {
          opacity: 0,
        },
      },
      'backgroundColor': 'transparent',
    },
  },
}));

interface Props<T extends FieldValues> extends NumberInputProps {
  name: Path<T>;
  control: Control<T>;
  presentation?: (value: Nullable<PathValue<T, Path<T>>>) => JSX.Element;
}

export const ControlledNumberInput = <T extends FieldValues>({
  control,
  name,
  presentation,
  ...inputProps
}: Props<T>): JSX.Element => {
  const { classes, cx } = useStyles();
  const {
    classes: { readonlyInput: readonlyInputClass },
  } = useReadonlyInputStyles();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) =>
        presentation && inputProps.readOnly ? (
          presentation(field.value)
        ) : (
          <MantineNumberInput
            {...inputProps}
            className={cx(
              readonlyInputClass,
              classes.numberInput,
              inputProps.className,
            )}
          />
        )
      }
    />
  );
};
