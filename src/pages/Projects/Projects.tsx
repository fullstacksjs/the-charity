import { PackageIcon } from '@camp/design';
import { messages } from '@camp/messages';

import { EmptyState } from '../../components';

export const Projects = () => {
  return (
    <EmptyState
      icon={<PackageIcon width="33" height="33" />}
      title={messages.projects.empty.title}
      message={messages.projects.empty.description}
    />
  );
};
