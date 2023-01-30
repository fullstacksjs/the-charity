import { Box, Space, Title } from '@mantine/core';

interface Props {
  title: string;
  badge: JSX.Element;
}

export const DetailCardBadgeField = ({ title, badge }: Props) => {
  return (
    <Box sx={{ textAlign: 'left' }}>
      <Title order={6} color="fgSubtle" weight={500}>
        {title}:
      </Title>
      <Space h={5} />
      {badge}
    </Box>
  );
};
