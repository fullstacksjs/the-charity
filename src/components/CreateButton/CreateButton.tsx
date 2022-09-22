import { Button } from '@mantine/core';
import { Link } from '@tanstack/react-location';

import { PlusIcon } from '../Icons';

export const CreateButton: React.FC = () => {
  return (
    <Link to="/create-draft-family">
      <Button
        px="xl"
        py="xxxs"
        variant="outline"
        color="primaryDefault"
        leftIcon={<PlusIcon />}
      >
        ایجاد خانواده جدید
      </Button>
    </Link>
  );
};
