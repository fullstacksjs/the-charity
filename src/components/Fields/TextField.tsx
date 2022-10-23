import { Text } from '@mantine/core';

interface Props {
  value: string;
}

export const TextField = ({ value }: Props) => {
  return (
    <Text size={14} color="fgDefault" weight={400}>
      {value}
    </Text>
  );
};
