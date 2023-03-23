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
  const t = messages.householder.detail;
  const tt = messages.householder.form;

  const { data, loading } = useHouseholderQuery({
    variables: { family_id: familyId },
  });

  const householder = data?.householder;

  return loading ? (
    <FullPageLoader />
  ) : householder?.status === 'completed' ? (
    <DetailCard
      title={tt.title}
      left={<Button variant="outline">{t.editBtn}</Button>}
      p={0}
    >
      <DetailCard.TextField title={tt.nameInput.label}>
        {householder.name}
      </DetailCard.TextField>
      <DetailCard.TextField title={tt.lastNameInput.label}>
        {householder.surname}
      </DetailCard.TextField>
      <DetailCard.TextField title={tt.fatherNameInput.label}>
        {householder.fatherName}
      </DetailCard.TextField>
      <DetailCard.TextField title={tt.nationalityInput.label}>
        {householder.nationality}
      </DetailCard.TextField>
      <DetailCard.TextField title={tt.issuedAtInput.label}>
        {householder.issuedAt}
      </DetailCard.TextField>
      <DetailCard.TextField title={tt.religionInput.label}>
        {householder.religion}
      </DetailCard.TextField>
      <DetailCard.TextField title={tt.genderInput.label}>
        {householder.gender}
      </DetailCard.TextField>
      <DetailCard.TextField title={tt.cityOfBirthInput.label}>
        {householder.cityOfBirth}
      </DetailCard.TextField>
      {/* <DetailCard.TextField title={tt.dateOfBirthInput.label}>{householder.}</DetailCard.TextField> */}
    </DetailCard>
  ) : (
    <HouseholderForm familyId={familyId} initialHouseholder={householder} />
  );
};
