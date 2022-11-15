import { DetailCard } from '@camp/components';
import { useDraftFamilyDetailQuery } from '@camp/data-layer';
import { messages } from '@camp/messages';
import { useMatches } from '@camp/router';

export const FamilyDetail = () => {
  const t = messages.familyDetail.familyFields;
  const [match] = useMatches();
  const familyId = match!.params.familyId;
  const { data } = useDraftFamilyDetailQuery({
    variables: { id: familyId },
  });

  return data?.family?.__typename === 'DraftFamily' ? (
    <DetailCard title={messages.familyDetail.title} id={data.family.code}>
      <DetailCard.TextField title={t.name.title}>
        {data.family.name}
      </DetailCard.TextField>
      <DetailCard.BadgeField
        status={data.family.severity}
        title={t.severityStatus.title}
      >
        {data.family.severity}
      </DetailCard.BadgeField>
      <DetailCard.BadgeField
        status={data.family.status}
        title={t.informationStatus.title}
      >
        {data.family.status}
      </DetailCard.BadgeField>
    </DetailCard>
  ) : null;
};
