import { useFamilyListQuery } from '@camp/data-layer';
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

import { CreateFamilyButton } from '../CreateFamily';
import { FamilyEmptyState } from '../FamilyEmptyState';
import * as ids from './FamilyList.ids';
import { FamilyTableRow } from './FamilyTableRow';

export const FamilyList = () => {
  const t = messages.families.list;
  const { data, loading, error } = useFamilyListQuery();
  const families = data.families;

  if (error) {
    showNotification({
      type: 'failure',
      title: t.title,
      message: errorMessages.UNKNOWN_ERROR,
      ...createTestAttr(ids.familyListFailureNotification),
    });
    return null;
  }

  if (loading) return <FullPageLoader />;
  if (isNull(families)) return null;
  if (isEmpty(families)) return <FamilyEmptyState />;

  const rows = families.map((info, i) => (
    <FamilyTableRow
      order={i + 1}
      key={Object.values(info).join('-')}
      family={info}
    />
  ));

  return (
    <DashboardCard
      left={<CreateFamilyButton />}
      right={
        <Title order={4} color="fgMuted" weight="bold">
          {t.title}
        </Title>
      }
    >
      <Table
        id={ids.familyTableId}
        columns={t.table.columns as unknown as string[]}
        rows={rows}
      />
    </DashboardCard>
  );
};
