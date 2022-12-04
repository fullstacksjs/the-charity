import { FamilySeverityEnum, FamilyStatusEnum } from '@camp/data-layer';
import { messages } from '@camp/messages';
import { Title } from '@mantine/core';

import { CreateFamilyButton } from '../CreateFamily';
import { DashboardCard } from '../DashboardCard';
import { FamilyTable } from './FamilyTable';
import type { ShortFamiliesInfo } from './FamilyTable/toShortFamilyInfoTableRows';

/* FIXME
  this type should be removed in
  backend integration ticket of FamilyList
*/
export const shortFamiliesInfo: ShortFamiliesInfo = [
  {
    id: '(F00001)',
    name: 'فول استک زاده',
    severity: FamilySeverityEnum.CRITICAL,
    status: FamilyStatusEnum.COMPLETED,
  },
  {
    id: '(F00002)',
    name: 'فول استک زاده',
    severity: FamilySeverityEnum.CRITICAL,
    status: FamilyStatusEnum.DRAFT,
  },
  {
    id: '(F00003)',
    name: 'فول استک زاده',
    severity: FamilySeverityEnum.NORMAL,
    status: FamilyStatusEnum.COMPLETED,
  },
];

export const FamilyList = () => {
  const t = messages.families.list;

  return (
    <DashboardCard
      left={<CreateFamilyButton />}
      right={
        <Title order={4} color="fgMuted" weight="bold">
          {t.title}
        </Title>
      }
    >
      <FamilyTable shortFamiliesInfo={shortFamiliesInfo} />
    </DashboardCard>
  );
};
