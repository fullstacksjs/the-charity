import { DetailCard } from '@camp/components';
import { useDraftFamilyDetailQuery } from '@camp/data-layer';
import { messages } from '@camp/messages';
import { useParams } from '@camp/router';

import type { InformationStatus } from '../../../../components/FamilyList/FamilyTable/InformationStatus';
import { toInformationStatus } from '../../../../components/FamilyList/FamilyTable/InformationStatus';
import type { SeverityStatus } from '../../../../components/FamilyList/FamilyTable/SeverityStatus';
import { toSeverityStatus } from '../../../../components/FamilyList/FamilyTable/SeverityStatus';
import type { DraftFamilyDetailQuery } from '../../../../data-layer/operations/__generated__/typesAndHooks';

interface FamilyDetail {
  status: InformationStatus;
  severity: SeverityStatus;
  name: string;
  code: string;
}

const toFamilyDetail = (
  family: DraftFamilyDetailQuery['family'],
): FamilyDetail | null => {
  if (family?.__typename === 'DraftFamily') {
    return {
      code: family.code,
      name: family.name!,
      severity: toSeverityStatus(family.severity),
      status: toInformationStatus(family.status),
    };
  }

  return null;
};

export const FamilyDetail = () => {
  const t = messages.familyDetail.familyFields;
  const familyId = useParams();
  const { data } = useDraftFamilyDetailQuery({
    variables: { id: familyId },
  });
  const familyDetail = toFamilyDetail(data?.family);

  return familyDetail === null ? null : (
    <DetailCard title={messages.familyDetail.title} id={familyDetail.code}>
      <DetailCard.TextField title={t.name.title}>
        {familyDetail.name}
      </DetailCard.TextField>
      <DetailCard.BadgeField
        status={familyDetail.severity.state}
        title={t.severityStatus.title}
      >
        {familyDetail.severity.text}
      </DetailCard.BadgeField>
      <DetailCard.BadgeField
        status={familyDetail.status.state}
        title={t.informationStatus.title}
      >
        {familyDetail.status.text}
      </DetailCard.BadgeField>
    </DetailCard>
  );
};
