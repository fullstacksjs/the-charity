import { PlusIcon } from '@camp/design';
import { messages } from '@camp/messages';
import { Button } from '@mantine/core';

import { createTestAttr } from '../../../utils/createTestAttr';

interface Props {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const createFamilyButtonId = 'create-family-button';

export const CreateFamilyButton = ({ onClick }: Props) => {
  return (
    <Button
      variant="outline"
      size="sm"
      leftIcon={<PlusIcon width="16" height="16" />}
      onClick={onClick}
      {...createTestAttr(createFamilyButtonId)}
    >
      {messages.families.create}
    </Button>
  );
};
