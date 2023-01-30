import { useFamilyQuery } from '@camp/data-layer';
import { DetailCard, FullPageLoader, showNotification } from '@camp/design';
import { errorMessages, messages } from '@camp/messages';
import { useParams } from '@camp/router';
import { isNull } from '@fullstacksjs/toolbox';

import { InformationBadge, SeverityBadge } from '../../../../components';

export const FamilyDetail = () => {
  const t = messages.familyDetail;
  const familyId = useParams();
  const { data, loading, error } = useFamilyQuery({
    variables: { id: familyId },
  });
  const family = data?.family;
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

  return (
    <DetailCard title={t.title} id={family.code}>
      <DetailCard.TextField title={t.familyFields.name.title}>
        {family.name}
      </DetailCard.TextField>
      <DetailCard.BadgeField
        title={t.familyFields.severityStatus.title}
        badge={<SeverityBadge severity={family.severity} />}
      />
      <DetailCard.BadgeField
        badge={<InformationBadge information={family.information} />}
        title={t.familyFields.informationStatus.title}
      />
    </DetailCard>
  );
};
