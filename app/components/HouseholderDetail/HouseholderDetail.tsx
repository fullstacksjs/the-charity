import { useHouseholderQuery } from '@camp/data-layer';
import { debug, DebugScopes } from '@camp/debug';
import { FullPageLoader } from '@camp/design';

import type { HouseholdDetail, HouseholdKeys } from '../../../libs/domain/Household';
import { HouseholderForm } from '../HouseholderForm';

interface Props {
  household: HouseholdDetail & HouseholdKeys
}

export const HouseholderDetail = ({ household }: Props) => {
  const { data, loading } = useHouseholderQuery({
    variables: { id: household.id },
  });

  const householder = data?.householder;
  debug.log(DebugScopes.Householder, householder);

  if (loading) return <FullPageLoader />;

  return (
    <HouseholderForm
      householdId={household.id}
      initialHouseholder={householder}
      householdName={household.name}
    />
  );
};
