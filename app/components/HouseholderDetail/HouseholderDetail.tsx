import { useHouseholderQuery } from '@camp/data-layer';
import { DetailCard, FullPageLoader } from '@camp/design';
import { messages } from '@camp/messages';
import { Button } from '@mantine/core';

import { HouseholderForm } from '../HouseholderForm';

interface Props {
  familyId: string;
}

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
        {messages.nationalities[householder.nationality]}
      </DetailCard.TextField>
      <DetailCard.TextField title={tt.nationalIdInput.label}>
        {householder.nationalId}
      </DetailCard.TextField>
      <DetailCard.TextField title={tt.genderInput.label}>
        {messages.genders[householder.gender]}
      </DetailCard.TextField>
      <DetailCard.TextField title={tt.dobInput.label}>
        {messages.date.format(householder.dob)}
      </DetailCard.TextField>
      <DetailCard.TextField title={tt.religionInput.label}>
        {messages.religions[householder.religion]}
      </DetailCard.TextField>
    </DetailCard>
  ) : (
    <HouseholderForm familyId={familyId} initialHouseholder={householder} />
  );
};
