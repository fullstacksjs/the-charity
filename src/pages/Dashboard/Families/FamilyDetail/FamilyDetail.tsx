import { DashboardCard } from '@camp/components';
import { messages } from '@camp/messages';

export const FamilyDetail = () => {
  const t = messages.familyDetail.familyFields;

  return (
    <DashboardCard
      title={messages.familyDetail.title}
      id={messages.familyDetail.id}
    >
      <DashboardCard.TextField title={t.name.title}>
        {t.name.value}
      </DashboardCard.TextField>
      <DashboardCard.BadgeField status="error" title={t.severityStatus.title}>
        {t.severityStatus.value}
      </DashboardCard.BadgeField>
      <DashboardCard.BadgeField
        status="warning"
        title={t.informationStatus.title}
      >
        {t.informationStatus.value}
      </DashboardCard.BadgeField>
    </DashboardCard>
  );
};
