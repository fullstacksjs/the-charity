import { useHouseholderQuery } from '@camp/data-layer';
import { DetailCard, FullPageLoader } from '@camp/design';
import { messages } from '@camp/messages';
import { Button } from '@mantine/core';

import { FamilyEmptyState } from '../FamilyEmptyState';
import { HouseholderForm } from '../HouseholderForm';

interface Props {
  familyId: string;
}

export const HouseholderDetail = ({ familyId }: Props) => {
  const t = messages.householder.householderForm;

  const { data, loading } = useHouseholderQuery({
    variables: { family_id: familyId },
  });

  const householder = data?.householder;

  return loading ? (
    <FullPageLoader />
  ) : householder?.status === 'draft' ? (
    <HouseholderForm familyId={familyId} initialHouseholder={householder} />
  ) : householder?.status === 'completed' ? (
    <DetailCard
      title={t.title}
      left={<Button variant="outline">ویرایش</Button>}
      p={0}
    >
      <DetailCard.TextField title="نام">
        {householder.name}
      </DetailCard.TextField>
      <DetailCard.TextField title="نام">محمد</DetailCard.TextField>
      <DetailCard.TextField title="نام">محمد</DetailCard.TextField>
      <DetailCard.TextField title="نام">محمد</DetailCard.TextField>
      <DetailCard.TextField title="نام">محمد</DetailCard.TextField>
      <DetailCard.TextField title="نام">محمد</DetailCard.TextField>
      <DetailCard.TextField title="نام">محمد</DetailCard.TextField>
      <DetailCard.TextField title="نام">محمد</DetailCard.TextField>
      <DetailCard.TextField title="نام">محمد</DetailCard.TextField>
      <DetailCard.TextField title="نام">محمد</DetailCard.TextField>
    </DetailCard>
  ) : (
    <FamilyEmptyState />
  );
};
