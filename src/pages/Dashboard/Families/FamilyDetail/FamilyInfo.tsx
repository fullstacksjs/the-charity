import type { MantineColor } from '@mantine/core';
import { Badge, Box, Space, Text, Title } from '@mantine/core';

interface Props {
  title: string;
  value: string;
  isBadge?: boolean;
  badgeStatus?: Extract<MantineColor, 'green' | 'red' | 'yellow'>;
}

export const FamilyInfo = ({ title, value, isBadge, badgeStatus }: Props) => {
  return (
    <>
      <Box sx={{ textAlign: 'left' }}>
        <Title order={6} color="fgSubtle" weight={500}>
          {title}:
        </Title>
        <Space h={5} />
        {isBadge ? (
          <Badge
            size="lg"
            radius="lg"
            color={badgeStatus}
            sx={{ fontWeight: 500 }}
          >
            {value}
          </Badge>
        ) : (
          <Text size={14} color="fgDefault" weight={400}>
            {value}
          </Text>
        )}
      </Box>
    </>
  );
};
