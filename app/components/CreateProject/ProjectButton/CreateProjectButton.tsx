import { PlusIcon } from '@camp/icons';
import { messages } from '@camp/messages';
import { createTestAttr } from '@camp/test';
import { Button } from '@mantine/core';

import { openCreateProjectModal } from '../ProjectForm';
import { createProjectButtonId as ids } from './CreateProjectButton.ids';

interface Props {
  variant?: 'filled' | 'outline';
}

export const CreateProjectButton = ({ variant = 'outline' }: Props) => {
  return (
    <Button
      variant={variant}
      size="sm"
      leftIcon={<PlusIcon width="16" height="16" />}
      {...createTestAttr(ids)}
      onClick={() => openCreateProjectModal()}
    >
      {messages.projects.create}
    </Button>
  );
};
