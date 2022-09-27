import { PlusIcon } from '@camp/design';
import { Button } from '@mantine/core';
import { Link } from '@tanstack/react-location';

export const CreateProjectButton = () => {
  return (
    <Link to="/create-project">
      <Button
        sx={{ fontWeight: 500 }}
        variant="outline"
        color="indigo"
        px="lg"
        size="sm"
        id="create-project"
        leftIcon={<PlusIcon w="16" h="16" />}
      >
        ایجاد پروژه جدید
      </Button>
    </Link>
  );
};
