import { DetailCard } from '@camp/components';
import { messages } from '@camp/messages';
import { useMatches } from '@camp/router';
import { Loader } from '@mantine/core';
import { useEffect, useState } from 'react';

import { useDraftFamilyDetailQuery } from '../../../../data-layer/operations/__generated__/typesAndHooks';

export const FamilyDetail = () => {
  const t = messages.familyDetail.familyFields;
  const [familyId, setFamilyId] = useState('');
  const matches = useMatches();

  useEffect(() => {
    matches.map(match => setFamilyId(match.params.familyId));
  }, [familyId, matches]);

  const { data, loading } = useDraftFamilyDetailQuery({
    variables: { id: familyId },
  });

  if (loading) <Loader />;
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
