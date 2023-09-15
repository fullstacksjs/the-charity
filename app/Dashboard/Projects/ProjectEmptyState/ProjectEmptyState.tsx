import { EmptyState } from '@camp/design';
import { PackageIcon } from '@camp/icons';
import { messages } from '@camp/messages';

import { CreateProjectButton } from '../CreateProject';

export const ProjectEmptyState = () => {
  return (
    <EmptyState
      Icon={PackageIcon}
      title={messages.projects.empty.title}
      message={messages.projects.empty.description}
    >
      <CreateProjectButton variant="filled" />
    </EmptyState>
  );
};
