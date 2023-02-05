import { NumberInput as MantineNumberInput } from '@mantine/core';

import type { InputProps } from '../TextInput';

export const NumberInput = ({
  label,
  placeholder,
  description,
  error,
  withAsterisk,
}: InputProps) => {
  return (
    <MantineNumberInput
      label={`${label}:`}
      withAsterisk={withAsterisk}
      description={description}
      error={error}
      placeholder={placeholder}
      hideControls
    />
  );
};
