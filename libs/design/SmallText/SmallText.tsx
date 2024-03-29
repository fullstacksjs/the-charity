import { Text } from '@mantine/core';

interface Props {
  children: React.ReactNode;
}

export const SmallText = ({ children }: Props) => {
  return (
    <Text size={14} color="fg" weight={400}>
      {children}
    </Text>
  );
};
