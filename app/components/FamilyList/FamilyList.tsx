import { FamilySeverityEnum, FamilyStatusEnum } from '@camp/data-layer';
import { DashboardCard } from '@camp/design';
import { messages } from '@camp/messages';
import { Title } from '@mantine/core';

import { CreateFamilyButton } from '../CreateFamily';
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
    severity: FamilySeverityEnum.Critical,
    status: FamilyStatusEnum.Completed,
  },
  {
    id: '(F00002)',
    name: 'فول استک زاده',
    severity: FamilySeverityEnum.Critical,
    status: FamilyStatusEnum.Draft,
  },
  {
    id: '(F00003)',
    name: 'فول استک زاده',
    severity: FamilySeverityEnum.Normal,
    status: FamilyStatusEnum.Completed,
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
