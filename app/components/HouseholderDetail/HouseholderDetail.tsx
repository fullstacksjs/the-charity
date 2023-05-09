import { useHouseholderQuery } from '@camp/data-layer';
import { debug, DebugScopes } from '@camp/debug';
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
  debug.log(DebugScopes.Householder, householder);

  if (loading) return <FullPageLoader />;

  return (
    <HouseholderForm familyId={familyId} initialHouseholder={householder} />
  );
};
