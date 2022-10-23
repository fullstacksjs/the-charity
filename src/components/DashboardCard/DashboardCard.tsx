import { Card, Group, SimpleGrid, Stack, Title } from '@mantine/core';

import { DashboardCardBadgeField } from './DashboardCardBadgeField';
import { DashboardCardTextField } from './DashboardCardTextField';

interface Props {
  title: string;
  id: string;
  children: React.ReactNode;
}

export const DashboardCard = ({ title, id, children }: Props) => {
  return (
    <Card radius="md" withBorder px={30} py={30}>
      <Stack spacing={30}>
        <Group>
          <Title order={4} color="fgMuted" weight="bold">
            {title}
          </Title>
          <Title
            order={6}
            color="fgSubtle"
            weight={500}
            sx={{ fontFamily: 'IRANSans' }}
          >
            {id}
          </Title>
        </Group>
        <SimpleGrid cols={3} spacing={50} verticalSpacing={20}>
          {children}
        </SimpleGrid>
      </Stack>
    </Card>
  );
};

DashboardCard.TextField = DashboardCardTextField;
DashboardCard.BadgeField = DashboardCardBadgeField;
