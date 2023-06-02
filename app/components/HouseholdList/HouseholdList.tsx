import { useHouseholdListQuery } from '@camp/data-layer';
import {
  DashboardCard,
  FullPageLoader,
  showNotification,
  Table,
} from '@camp/design';
import { errorMessages, messages } from '@camp/messages';
import { createTestAttr } from '@camp/test';
import { isEmpty, isNull } from '@fullstacksjs/toolbox';
import { Title } from '@mantine/core';

import { CreateHouseholdButton } from '../CreateHousehold';
import { HouseholdEmptyState } from '../HouseholdEmptyState';
import * as ids from './HouseholdList.ids';
import { HouseholdTableRow } from './HouseholdTableRow';

export const HouseholdList = () => {
  const t = messages.families.list;
  const { data, loading, error } = useHouseholdListQuery();
  const families = data?.families;

  if (error) {
    showNotification({
      type: 'failure',
      title: t.title,
      message: errorMessages.UNKNOWN_ERROR,
      ...createTestAttr(ids.householdListFailureNotification),
    });
    return null;
  }

  if (loading) return <FullPageLoader />;
  if (isNull(families)) return null;
  if (isEmpty(families)) return <HouseholdEmptyState />;

  const rows = families.map((info, i) => (
    <HouseholdTableRow
      order={i + 1}
      key={Object.values(info).join('-')}
      household={info}
    />
  ));

  return (
    <DashboardCard
      left={<CreateHouseholdButton />}
      right={
        <Title order={4} color="fgMuted" weight="bold">
          {t.title}
        </Title>
      }
    >
      <Table
        id={ids.householdTableId}
        columns={t.table.columns as unknown as string[]}
        rows={rows}
      />
    </DashboardCard>
  );
};
