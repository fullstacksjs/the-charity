import {
  FamilySeverityEnum,
  FamilyStatusEnum,
  useFamilyListQuery,
} from '@camp/data-layer';
import { DashboardCard } from '@camp/design';
import { messages } from '@camp/messages';
import { Title } from '@mantine/core';

import { CreateFamilyButton } from '../CreateFamily';
import { FamilyTable } from './FamilyTable';
import type { ShortFamilyInfo } from './FamilyTable/toShortFamilyInfoTableRows';

export const FamilyList = () => {
  const t = messages.families.list;
  const { data, loading, error } = useFamilyListQuery();

  if (error) return <>error</>;
  if (loading) return <>Loading</>;

  return (
    <DashboardCard
      left={<CreateFamilyButton />}
      right={
        <Title order={4} color="fgMuted" weight="bold">
          {t.title}
        </Title>
      }
    >
      <FamilyTable shortFamiliesInfo={data?.family as ShortFamilyInfo[]} />
    </DashboardCard>
  );
};
