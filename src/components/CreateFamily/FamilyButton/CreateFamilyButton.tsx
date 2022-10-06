import { PlusIcon } from '@camp/design';
import { messages } from '@camp/messages';
import { Button } from '@mantine/core';

interface Props {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const CreateFamilyButton = ({ onClick }: Props) => {
  return (
    <Button
      variant="outline"
      size="sm"
      data-test="create-family-button"
      leftIcon={<PlusIcon width="16" height="16" />}
      onClick={onClick}
    >
      {messages.families.create}
    </Button>
  );
};
