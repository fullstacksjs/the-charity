import type { Householder } from '@camp/domain';
import { Stack } from '@mantine/core';

import { HouseholderContactForm } from './_components/HouseholderContactForm';
import { HouseholderFinancialForm } from './_components/HouseholderFinancialForm';
import { HouseholderHealthForm } from './_components/HouseholderHealthForm';
import { HouseholderIdentityForm } from './_components/HouseholderIdentityForm';

interface Props {
  initialHouseholder?: Householder;
  householdId: string;
  householdName: string;
}

export const HouseholderForms = ({
  initialHouseholder,
  householdId,
  householdName,
}: Props) => {
  return (
    <Stack spacing={30}>
      <HouseholderIdentityForm
        initialHouseholder={initialHouseholder}
        householdId={householdId}
        householdName={householdName}
      />
      <HouseholderContactForm
        householdId={householdId}
        householdName={householdName}
        initialHouseholder={initialHouseholder}
      />
      <HouseholderHealthForm
        householdId={householdId}
        householdName={householdName}
        initialHouseholder={initialHouseholder}
      />
      <HouseholderFinancialForm
        householdId={householdId}
        householdName={householdName}
        initialHouseholder={initialHouseholder}
      />
    </Stack>
  );
};
