import { EmptyState } from '@camp/design';
import { PeopleIcon } from '@camp/icons';
import { messages } from '@camp/messages';

import { CreateHouseholdButton } from '../_components/CreateHousehold';

export const HouseholdEmptyState = () => {
  return (
    <EmptyState
      Icon={PeopleIcon}
      title={messages.households.empty.title}
      message={messages.households.empty.description}
    >
      <CreateHouseholdButton variant="filled" />
    </EmptyState>
  );
};
