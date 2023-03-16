import { TrashIcon } from '@camp/icons';
import { Button, Group, SimpleGrid, Title } from '@mantine/core';

import { DashboardCard } from '../DashboardCard';
import { DetailCardBadgeField } from './DetailCardBadgeField';
import { DetailCardTextField } from './DetailCardTextField';

interface Props {
  title: string;
  id: string;
  deleteButton: string;
  children: React.ReactNode;
  onDelete: React.MouseEventHandler<HTMLButtonElement>;
}

export const DetailCard = ({
  title,
  id,
  children,
  deleteButton,
  onDelete,
}: Props) => {
  return (
    <DashboardCard
      bg="bgCanvas"
      withBorder={false}
      left={
        <Button
          variant="outline"
          color="red"
          leftIcon={<TrashIcon />}
          onClick={onDelete}
        >
          {deleteButton}
        </Button>
      }
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
