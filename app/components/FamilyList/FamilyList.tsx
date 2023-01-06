import { useFamilyListQuery } from '@camp/data-layer';
import { DashboardCard, FullPageLoader, showNotification } from '@camp/design';
import { errorMessages, messages } from '@camp/messages';
import { createTestAttr } from '@camp/test';
import { isEmpty, isNull } from '@fullstacksjs/toolbox';
import { Title } from '@mantine/core';

import { CreateFamilyButton } from '../CreateFamily';
import { FamilyEmptyState } from '../FamilyEmptyState';
import * as ids from './FamilyList.ids';
import { FamilyTable } from './FamilyTable';

export const FamilyList = () => {
  const t = messages.families.list;
  const { data, loading, error } = useFamilyListQuery();
  const families = data?.family;

  if (error)
    showNotification({
      type: 'failure',
      title: t.title,
      message: errorMessages.UNKNOWN_ERROR,
      ...createTestAttr(ids.familyListFailureNotification),
    });

  if (loading) return <FullPageLoader />;
  if (isNull(families)) return null;
  if (isEmpty(families)) return <FamilyEmptyState />;
  return (
    <DashboardCard
      left={<CreateFamilyButton />}
      right={
        <Title order={4} color="fgMuted" weight="bold">
          {t.title}
        </Title>
      }
    >
      <FamilyTable shortFamiliesInfo={families} />
    </DashboardCard>
  );
};
