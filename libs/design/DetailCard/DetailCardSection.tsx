import { SimpleGrid } from '@mantine/core';

interface Props {
  children: React.ReactNode;
}

export const DetailCardSection = ({ children }: Props) => {
  return (
    <SimpleGrid cols={3} spacing={50} verticalSpacing={20}>
      {children}
    </SimpleGrid>
  );
};
