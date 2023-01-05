import { Box, Space, Title } from '@mantine/core';

interface Props {
  title: string;
  children: React.ReactNode;
}

export const DetailCardTextField = ({ title, children }: Props) => {
  return (
    <Box sx={{ textAlign: 'left' }}>
      <Title order={6} color="fgSubtle" weight={500}>
        {title}:
      </Title>
      <Space h={5} />
      {children}
    </Box>
  );
};
