import type { FamilyQuery } from '@camp/data-layer';
import { useFamilyQuery } from '@camp/data-layer';
import { DetailCard } from '@camp/design';
import { messages } from '@camp/messages';
import { useParams } from '@camp/router';
import { isNull } from '@fullstacksjs/toolbox';

import type { InformationStatus, SeverityStatus } from '../../../../components';
import { toInformationStatus, toSeverityStatus } from '../../../../components';

interface FamilyDetail {
  status: InformationStatus;
  severity: SeverityStatus;
  name: string;
  code: string;
}

const toFamilyDetail = (
  family: FamilyQuery['family_by_pk'],
): FamilyDetail | undefined => {
  if (isNull(family)) return undefined;

  return {
    code: family.code!,
    name: family.name,
    severity: toSeverityStatus(family.severity),
    status: toInformationStatus(family.status),
  };
};

export const FamilyDetail = () => {
  const t = messages.familyDetail.familyFields;
  const familyId = useParams();
  const { data } = useFamilyQuery({
    variables: { id: familyId },
  });

  if (data?.family_by_pk == null) return <>Family Not Found</>;

  const familyDetail = toFamilyDetail(data.family_by_pk);

  return isNull(familyDetail) ? null : (
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
