import { FamilySeverity, FamilyStatus } from '@camp/data-layer';
import { messages } from '@camp/messages';
import { Title } from '@mantine/core';

import { CreateFamilyButton } from '../CreateFamily';
import { DashboardCard } from '../DashboardCard';
import { FamilyTable } from './FamilyTable';
import type { ShortFamiliesInfo } from './toShortFamilyInfoTableRow';

/* FIXME
  this type should be removed in
  backend integration ticket of FamilyList
*/
const shortFamilyInfos: ShortFamiliesInfo = [
  {
    name: 'فول استک زاده',
    severity: FamilySeverity.Critical,
    status: FamilyStatus.Completed,
  },
  {
    name: 'فول استک زاده',
    severity: FamilySeverity.Critical,
    status: FamilyStatus.Draft,
  },
  {
    name: 'فول استک زاده',
    severity: FamilySeverity.Normal,
    status: FamilyStatus.Completed,
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
      <FamilyTable shortFamiliesInfo={shortFamilyInfos} />
    </DashboardCard>
  );
};
