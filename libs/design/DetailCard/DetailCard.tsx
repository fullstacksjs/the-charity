import { Group, Title } from '@mantine/core';

import type { DashboardCardProps } from '../DashboardCard';
import { DashboardCard } from '../DashboardCard';
import { DetailCardBadgeField } from './DetailCardBadgeField';
import { DetailCardDateField } from './DetailCardDateField';
import { DetailCardSection } from './DetailCardSection';
import { DetailCardTextField } from './DetailCardTextField';

interface Props extends DashboardCardProps {
  title: string;
  id?: string;
  children: React.ReactNode;
}

export const DetailCard = ({ title, id, children, ...cardProps }: Props) => {
  return (
    <DashboardCard
      bg="transparent"
      withBorder={false}
      pb={25}
      right={
        <Group spacing={10}>
          <Title order={4} color="fgMuted" weight="bold">
            {title}
          </Title>
          {id == null ? null : (
            <Title
              order={6}
              color="fgSubtle"
              weight={500}
              sx={{ fontFamily: 'IRANSans' }}
            >
              ({id})
            </Title>
          )}
        </Group>
      }
      {...cardProps}
    >
      {children}
    </DashboardCard>
  );
};

DetailCard.TextField = DetailCardTextField;
DetailCard.BadgeField = DetailCardBadgeField;
DetailCard.DateField = DetailCardDateField;
DetailCard.Section = DetailCardSection;
