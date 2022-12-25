import { useFamilyListQuery } from '@camp/data-layer';
import { DashboardCard, FullPageLoader, showNotification } from '@camp/design';
import { errorMessages, messages } from '@camp/messages';
import { isEmpty, isNull } from '@fullstacksjs/toolbox';
import { Title } from '@mantine/core';

import { CreateFamilyButton } from '../CreateFamily';
import { FamilyEmptyState } from '../FamilyEmptyState';
import { FamilyTable } from './FamilyTable';

export const FamilyList = () => {
  const t = messages.families.list;
  const { data, loading, error } = useFamilyListQuery();
  const families = data?.family;

  if (error ?? isNull(families)) {
    showNotification({
      type: 'failure',
      title: t.title,
      message: errorMessages.UNKNOWN_ERROR,
    });
    return null;
  }
  if (loading) return <FullPageLoader />;

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
