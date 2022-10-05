import { PlusIcon } from '@camp/design';
import { Button } from '@mantine/core';
import { Link } from '@tanstack/react-location';

interface Props {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const CreateFamilyButton = ({ onClick }: Props) => {
  return (
    <Link to="/create-draft-family">
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
        ایجاد خانواده جدید
      </Button>
    </Link>
  );
};
