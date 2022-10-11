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
      id="create-draft-family"
      leftIcon={<PlusIcon width="16" height="16" />}
      onClick={onClick}
      sx={theme => ({
        // eslint-disable-next-line @typescript-eslint/naming-convention
        '&:hover': {
          backgroundColor: theme.colors.primarySubtle[6],
        },
      })}
    >
      {messages.families.create}
    </Button>
  );
};
