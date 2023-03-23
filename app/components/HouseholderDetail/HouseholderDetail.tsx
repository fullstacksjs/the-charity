import { useHouseholderQuery } from '@camp/data-layer';
import { DetailCard, FullPageLoader } from '@camp/design';
import { messages } from '@camp/messages';
import { Button } from '@mantine/core';

import { HouseholderForm } from '../HouseholderForm';

interface Props {
  familyId: string;
}

// FIXME whe adding mappers for other field add custom content shower like <Nationality> for those types too

export const HouseholderDetail = ({ familyId }: Props) => {
  const t = messages.householder.householderForm;

  const { data, loading } = useHouseholderQuery({
    variables: { family_id: familyId },
  });

  const householder = data?.householder;

  return loading ? (
    <FullPageLoader />
  ) : householder?.status === 'completed' ? (
    <DetailCard
      title={t.title}
      left={<Button variant="outline">ویرایش</Button>}
      p={0}
    >
      <DetailCard.TextField title={t.nameInput.label}>
        {householder.name}
      </DetailCard.TextField>
      <DetailCard.TextField title={t.lastNameInput.label}>
        {householder.surname}
      </DetailCard.TextField>
      <DetailCard.TextField title={t.fatherNameInput.label}>
        {householder.fatherName}
      </DetailCard.TextField>
      <DetailCard.TextField title={t.nationalityInput.label}>
        {householder.nationality}
      </DetailCard.TextField>
      <DetailCard.TextField title={t.issuedAtInput.label}>
        {householder.issuedAt}
      </DetailCard.TextField>
      <DetailCard.TextField title={t.religionInput.label}>
        {householder.religion}
      </DetailCard.TextField>
      <DetailCard.TextField title={t.genderInput.label}>
        {householder.gender}
      </DetailCard.TextField>
      <DetailCard.TextField title={t.cityOfBirthInput.label}>
        {householder.cityOfBirth}
      </DetailCard.TextField>
      {/* <DetailCard.TextField title={t.dateOfBirthInput.label}>{householder.}</DetailCard.TextField> */}
    </DetailCard>
  ) : (
    <HouseholderForm familyId={familyId} initialHouseholder={householder} />
  );
};
