import { PlusIcon } from '@camp/icons';
import { messages } from '@camp/messages';
import { createTestAttr } from '@camp/test';
import { Button } from '@mantine/core';

import { openCreateHouseholdModal } from '../CreateHouseholdModal';
import { createHouseholdButtonId as id } from './CreateHouseholdButton.ids';

interface Props {
  variant?: 'filled' | 'outline';
}

export const CreateHouseholdButton = ({ variant = 'outline' }: Props) => {
  return (
    <Button
      variant={variant}
      size="sm"
      leftIcon={<PlusIcon width="16" height="16" />}
      onClick={() => openCreateHouseholdModal()}
      {...createTestAttr(id)}
    >
      {messages.households.create}
    </Button>
  );
};
