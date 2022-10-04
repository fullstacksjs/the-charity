import { PlusIcon } from '@camp/design';
import { Button } from '@mantine/core';
import { Link } from '@tanstack/react-location';

export const CreateFamilyButton = () => {
  return (
    <Link to="/create-draft-family">
      <Button
        variant="outline"
        size="sm"
        id="create-draft-family"
        leftIcon={<PlusIcon width="16" height="16" />}
      >
        ایجاد خانواده جدید
      </Button>
    </Link>
  );
};
