import { Group, Title } from '@mantine/core';

import type { DashboardCardProps } from '../DashboardCard';
import { DashboardCard } from '../DashboardCard';
import { DashboardTitle } from '../DashboardTitle';
import { DetailCardDateField } from './DetailCardDateField';
import { DetailCardSection } from './DetailCardSection';
import { DetailCardField } from './DetailCardTextField';

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
          <DashboardTitle>{title}</DashboardTitle>
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

DetailCard.Field = DetailCardField;
DetailCard.DateField = DetailCardDateField;
DetailCard.Section = DetailCardSection;
