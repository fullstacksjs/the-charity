import { PlusIcon } from '@camp/icons';
import { messages } from '@camp/messages';
import { createTestAttr } from '@camp/test';
import { Button } from '@mantine/core';

import { openCreateFamilyModal } from '../FamilyForm';
import { createFamilyButtonId as id } from './CreateFamilyButton.ids';

interface Props {
  variant?: 'filled' | 'outline';
}

export const CreateFamilyButton = ({ variant = 'outline' }: Props) => {
  return (
    <Button
      variant={variant}
      size="sm"
      leftIcon={<PlusIcon width="16" height="16" />}
      onClick={() => openCreateFamilyModal()}
      {...createTestAttr(id)}
    >
      {messages.families.create}
    </Button>
  );
};
