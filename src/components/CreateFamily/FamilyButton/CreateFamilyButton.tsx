import { PlusIcon } from '@camp/design';
import { useCreateFamilyModalState } from '@camp/hooks';
import { messages } from '@camp/messages';
import { Button } from '@mantine/core';

import { createTestAttr } from '../../../utils/createTestAttr';

interface Props {
  variant?: 'filled' | 'outline';
}

export const createFamilyButtonId = 'create-family-button';

export const CreateFamilyButton = ({ variant = 'outline' }: Props) => {
  const { openModal } = useCreateFamilyModalState();

  return (
    <Button
      variant={variant}
      size="sm"
      leftIcon={<PlusIcon width="16" height="16" />}
      onClick={openModal}
      {...createTestAttr(createFamilyButtonId)}
    >
      {messages.families.create}
    </Button>
  );
};
