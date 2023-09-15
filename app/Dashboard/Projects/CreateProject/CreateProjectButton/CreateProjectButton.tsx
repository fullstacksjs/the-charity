import { PlusIcon } from '@camp/icons';
import { messages } from '@camp/messages';
import { tid } from '@camp/test';
import { Button } from '@mantine/core';

import { openCreateProjectModal } from '../CreateProjectModal';
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
      {...tid(ids)}
      onClick={() => openCreateProjectModal()}
    >
      {messages.projects.create}
    </Button>
  );
};
