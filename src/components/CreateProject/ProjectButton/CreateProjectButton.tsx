import { PlusIcon } from '@camp/design';
import { messages } from '@camp/messages';
import { Button } from '@mantine/core';
import { Link } from '@tanstack/react-location';

interface Props {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const CreateProjectButton = ({ onClick }: Props) => {
  return (
    <Link to="/create-project">
      <Button
        variant="outline"
        size="sm"
        id="create-project"
        leftIcon={<PlusIcon width="16" height="16" />}
        onClick={onClick}
      >
        {messages.projects.create}
      </Button>
    </Link>
  );
};
