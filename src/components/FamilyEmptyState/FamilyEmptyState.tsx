import { PeopleIcon } from '@camp/design';
import { messages } from '@camp/messages';

import { EmptyState } from '../molecules';

export const FamilyEmptyState = () => (
  <EmptyState
    icon={<PeopleIcon width="33" height="33" />}
    title={messages.families.empty.title}
    message={messages.families.empty.description}
  />
);
