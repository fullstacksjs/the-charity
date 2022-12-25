import type { FamilyQuery } from '@camp/data-layer';
import { useFamilyQuery } from '@camp/data-layer';
import { DetailCard, FullPageLoader, showNotification } from '@camp/design';
import { errorMessages, messages } from '@camp/messages';
import { useParams } from '@camp/router';
import { isNull } from '@fullstacksjs/toolbox';

// TODO: these should be moved to data-layer
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
  const t = messages.familyDetail;
  const familyId = useParams();
  const { data, loading, error } = useFamilyQuery({
    variables: { id: familyId },
  });
  const family = data?.family_by_pk;
  if (loading) return <FullPageLoader />;

  if (error) {
    showNotification({
      type: 'failure',
      title: t.title,
      message: errorMessages.UNKNOWN_ERROR,
    });
    return null;
  }
  if (isNull(family)) return <p>{t.notFound}</p>;

  const familyDetail = toFamilyDetail(family);

  return isNull(familyDetail) ? null : (
    <DetailCard title={t.title} id={familyDetail.code}>
      <DetailCard.TextField title={t.familyFields.name.title}>
        {familyDetail.name}
      </DetailCard.TextField>
      <DetailCard.BadgeField
        status={familyDetail.severity.state}
        title={t.familyFields.severityStatus.title}
      >
        {familyDetail.severity.text}
      </DetailCard.BadgeField>
      <DetailCard.BadgeField
        status={familyDetail.status.state}
        title={t.familyFields.informationStatus.title}
      >
        {familyDetail.status.text}
      </DetailCard.BadgeField>
    </DetailCard>
  );
};
