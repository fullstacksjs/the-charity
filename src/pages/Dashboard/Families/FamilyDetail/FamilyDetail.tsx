import type { InformationStatus, SeverityStatus } from '@camp/components';
import {
  DetailCard,
  toInformationStatus,
  toSeverityStatus,
} from '@camp/components';
import type { DraftFamilyDetailQuery } from '@camp/data-layer';
import { useDraftFamilyDetailQuery } from '@camp/data-layer';
import { messages } from '@camp/messages';
import { useParams } from '@camp/router';

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
