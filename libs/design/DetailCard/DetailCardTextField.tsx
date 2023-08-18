import { Box, Space, Title } from '@mantine/core';

interface Props {
  title: string;
  children: React.ReactNode;
}

export const DetailCardField = ({ title, children, ...props }: Props) => {
  return (
    <Box sx={{ textAlign: 'left' }} {...props}>
      <Title order={6} color="fgSubtle" weight={500}>
        {title}:
      </Title>
      <Space h={11} />
      {children}
    </Box>
  );
};
