import { PlusIcon } from '@camp/design';
import { messages } from '@camp/messages';
import { Button } from '@mantine/core';

import { createTestAttr } from '../../../utils/createTestAttr';

interface Props {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  variant?: 'filled' | 'outline';
}

export const createFamilyButtonId = 'create-family-button';

export const CreateFamilyButton = ({ onClick, variant = 'outline' }: Props) => {
  return (
    <Button
      variant={variant}
      size="sm"
      leftIcon={<PlusIcon width="16" height="16" />}
      onClick={onClick}
      {...createTestAttr(createFamilyButtonId)}
    >
      {messages.families.create}
    </Button>
  );
};
