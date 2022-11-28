import { PlusIcon } from '@camp/design';
import { messages } from '@camp/messages';
import { createTestAttr } from '@camp/utils';
import { Button } from '@mantine/core';

import { createProjectButtonId as ids } from './CreateProjectButton.ids';

interface Props {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  variant?: 'filled' | 'outline';
}

export const CreateProjectButton = ({
  onClick,
  variant = 'outline',
}: Props) => {
  return (
    <Button
      variant={variant}
      size="sm"
      leftIcon={<PlusIcon width="16" height="16" />}
      onClick={onClick}
      {...createTestAttr(ids)}
    >
      {messages.projects.create}
    </Button>
  );
};
