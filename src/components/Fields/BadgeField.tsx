import type { MantineColor } from '@mantine/core';
import { Badge } from '@mantine/core';

interface Props {
  value: string;
  status: Extract<MantineColor, 'green' | 'red' | 'yellow'>;
}

export const BadgeField = ({ value, status }: Props) => {
  return (
    <Badge size="lg" radius="lg" color={status} sx={{ fontWeight: 500 }}>
      {value}
    </Badge>
  );
};
