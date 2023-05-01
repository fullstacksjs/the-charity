import { useHouseholderQuery } from '@camp/data-layer';
import { FullPageLoader } from '@camp/design';

import { HouseholderForm } from '../HouseholderForm';

interface Props {
  familyId: string;
}

export const HouseholderDetail = ({ familyId }: Props) => {
  const { data, loading } = useHouseholderQuery({
    variables: { family_id: familyId },
  });

  const householder = data?.householder;

  return loading ? (
    <FullPageLoader />
  ) : (
    <HouseholderForm familyId={familyId} initialHouseholder={householder} />
  );
};
