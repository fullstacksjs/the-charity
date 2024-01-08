import type { BoxProps } from '@mantine/core';
import { Box } from '@mantine/core';

interface Props extends BoxProps {
  children: React.ReactNode;
}

export const TableRow = (props: Props) => {
  return <Box component="tr" {...props} />;
};
