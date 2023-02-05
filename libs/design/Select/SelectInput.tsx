import type { SelectItem } from '@mantine/core';
import { Select } from '@mantine/core';

import type { InputProps } from '../TextInput';

interface Props extends InputProps {
  data: (SelectItem | string)[];
}

export const SelectInput = ({
  label,
  placeholder,
  description,
  error,
  withAsterisk,
  data,
}: Props) => {
  return (
    <Select
      label={`${label}:`}
      withAsterisk={withAsterisk}
      description={description}
      error={error}
      placeholder={placeholder}
      data={data}
    />
  );
};
