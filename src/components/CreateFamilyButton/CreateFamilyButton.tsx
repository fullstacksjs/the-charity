import { PlusIcon } from '@camp/design';
import { Button } from '@mantine/core';
import { Link } from '@tanstack/react-location';

export const CreateFamilyButton = () => {
  return (
    <Link to="/create-draft-family">
      <Button
        px="xl"
        py="xxxs"
        size="sm"
        variant="outline"
        color="primaryDefault"
        id="create-draft-family"
        leftIcon={<PlusIcon width="16" height="16" />}
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
