import { DetailCard } from '@camp/components';
import { messages } from '@camp/messages';

import { useDraftFamilyDetailQuery } from '../../../../data-layer/operations/__generated__/typesAndHooks';

export const FamilyDetail = () => {
  const t = messages.familyDetail.familyFields;

  const { data } = useDraftFamilyDetailQuery({
    variables: { id: '1' },
  });

  console.log(
    data?.family?.__typename === 'DraftFamily' ? data.family.name : null,
  );
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
