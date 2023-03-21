import { Group, SimpleGrid, Title } from '@mantine/core';

import { DashboardCard } from '../DashboardCard';
import { DetailCardBadgeField } from './DetailCardBadgeField';
import { DetailCardTextField } from './DetailCardTextField';

interface Props {
  title: string;
  id: string;
  children: React.ReactNode;
  left?: React.ReactNode;
}

export const DetailCard = ({ title, id, children, left }: Props) => {
  return (
    <DashboardCard
      bg="bgCanvas"
      withBorder={false}
      left={left}
      right={
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
            ({id})
          </Title>
        </Group>
      }
    >
      <SimpleGrid cols={3} spacing={50} verticalSpacing={20}>
        {children}
      </SimpleGrid>
    </DashboardCard>
  );
};

DetailCard.TextField = DetailCardTextField;
DetailCard.BadgeField = DetailCardBadgeField;
