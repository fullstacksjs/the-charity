import { PeopleIcon } from '@camp/design';
import { messages } from '@camp/messages';

import { EmptyState } from '../../components';

export const Families = () => {
  return (
    <EmptyState
      icon={<PeopleIcon width="33" height="33" />}
      title={messages.families.empty.title}
      message={messages.families.empty.description}
    />
  );
};
