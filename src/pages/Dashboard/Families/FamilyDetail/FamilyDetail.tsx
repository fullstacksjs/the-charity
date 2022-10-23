import { messages } from '@camp/messages';
import { SimpleGrid } from '@mantine/core';

import {
  BadgeField,
  DashboardCard,
  DashboardCardField,
  TextField,
} from '../../../../components';

export const FamilyDetail = () => {
  const t = messages.familyDetail.familyFields;

  return (
    <DashboardCard
      title={messages.familyDetail.title}
      id={messages.familyDetail.id}
    >
      <SimpleGrid
        cols={3}
        spacing={50}
        verticalSpacing={20}
        sx={{ minWidth: 951 }}
      >
        <DashboardCardField title={t.name.title}>
          <TextField value={t.name.value} />
        </DashboardCardField>
        <DashboardCardField title={t.householder.title}>
          <TextField value={t.householder.value} />
        </DashboardCardField>
        <DashboardCardField title={t.members.title}>
          <TextField value={t.members.value} />
        </DashboardCardField>
        <DashboardCardField title={t.severityStatus.title}>
          <BadgeField value={t.severityStatus.value} status="red" />
        </DashboardCardField>
        <DashboardCardField title={t.informationStatus.title}>
          <BadgeField value={t.informationStatus.value} status="yellow" />
        </DashboardCardField>
      </SimpleGrid>
    </DashboardCard>
  );
};
