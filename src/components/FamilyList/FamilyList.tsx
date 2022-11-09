import { messages } from '@camp/messages';
import { Title } from '@mantine/core';

import { CreateFamilyButton } from '../CreateFamily';
import { DashboardCard } from '../DashboardCard';

export const FamilyList = () => {
  return (
    <DashboardCard
      left={<CreateFamilyButton />}
      right={
        <Title order={4} color="fgMuted" weight="bold">
          {messages.families.list}
        </Title>
      }
    >
      hey
    </DashboardCard>
  );
};
