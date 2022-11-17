import { PlusIcon } from '@camp/design';
import { messages } from '@camp/messages';
import { createTestAttr } from '@camp/utils';
import { Button } from '@mantine/core';

import { openCreateFamilyModal } from '../FamilyForm';

interface Props {
  variant?: 'filled' | 'outline';
}

export const createFamilyButtonId = 'create-family-button';

export const CreateFamilyButton = ({ variant = 'outline' }: Props) => {
  return (
    <Button
      variant={variant}
      size="sm"
      leftIcon={<PlusIcon width="16" height="16" />}
      onClick={() => openCreateFamilyModal()}
      {...createTestAttr(createFamilyButtonId)}
    >
      {messages.families.create}
    </Button>
  );
};
