import { DetailCard } from '@camp/components';
import { messages } from '@camp/messages';

export const FamilyDetail = () => {
  const t = messages.familyDetail.familyFields;

  return (
    <DetailCard
      title={messages.familyDetail.title}
      id={messages.familyDetail.id}
    >
      <DetailCard.TextField title={t.name.title}>
        {t.name.value}
      </DetailCard.TextField>
      <DetailCard.BadgeField status="error" title={t.severityStatus.title}>
        {t.severityStatus.value}
      </DetailCard.BadgeField>
      <DetailCard.BadgeField status="warning" title={t.informationStatus.title}>
        {t.informationStatus.value}
      </DetailCard.BadgeField>
    </DetailCard>
  );
};
