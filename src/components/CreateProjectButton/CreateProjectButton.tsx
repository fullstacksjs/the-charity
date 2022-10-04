import { PlusIcon } from '@camp/design';
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
        color="primaryDefault"
        sx={theme => ({
          // eslint-disable-next-line @typescript-eslint/naming-convention
          '&:hover': {
            backgroundColor: theme.colors.primarySubtle[6],
          },
        })}
        px="lg"
        size="sm"
        id="create-project"
        leftIcon={<PlusIcon width="16" height="16" />}
        onClick={onClick}
      >
        ایجاد پروژه جدید
      </Button>
    </Link>
  );
};
