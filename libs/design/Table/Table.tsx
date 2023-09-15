import { tid } from '@camp/test';
import { Table as MantineTable } from '@mantine/core';

interface Props {
  children: React.ReactNode;
  id: string;
}

export const Table = ({ children, id }: Props) => {
  return (
    <MantineTable
      horizontalSpacing="lg"
      verticalSpacing="md"
      striped
      highlightOnHover
      withBorder
      {...tid(id)}
    >
      {children}
    </MantineTable>
  );
};
