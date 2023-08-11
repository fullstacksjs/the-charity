import { useHouseholderQuery } from '@camp/data-layer';
import { debug, DebugScopes } from '@camp/debug';
import { FullPageLoader } from '@camp/design';

import { HouseholderForm } from '../HouseholderForm';

interface Props {
  householdId: string;
  householdName: string;
}

export const HouseholderDetail = ({ householdId, householdName }: Props) => {
  const { data, loading } = useHouseholderQuery({
    variables: { id: householdId },
  });

  const householder = data?.householder;
  debug.log(DebugScopes.Householder, householder);

  if (loading) return <FullPageLoader />;

  return (
    <HouseholderForm
      householdId={householdId}
      initialHouseholder={householder}
      householdName={householdName}
    />
  );
};
