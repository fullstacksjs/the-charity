import { DashboardTitle } from '@camp/design';
import { messages } from '@camp/messages';
import { Group, Stack } from '@mantine/core';

import { AddHouseholderVisitButton } from '../AddHouseholderVisit';

const t = messages.householder.visits;

interface Props {
  householdId: string;
}

export const HouseholderVisits = ({ householdId }: Props) => {
  return (
    <Stack spacing={25} sx={{ position: 'relative' }}>
      <Group position="apart" mih="100%">
        <DashboardTitle>{t.title}</DashboardTitle>
        <AddHouseholderVisitButton householdId={householdId} />
      </Group>
    </Stack>
  );
};
