import { createTestAttr } from '@camp/test';
import { Table as MantineTable } from '@mantine/core';

interface Props {
  rows: JSX.Element;
  columns: JSX.Element;
  id: string;
}

export const Table = ({ columns, rows, id }: Props) => {
  return (
    <MantineTable
      horizontalSpacing="lg"
      verticalSpacing="md"
      striped
      highlightOnHover
      withBorder
      {...createTestAttr(id)}
    >
      <thead>{columns}</thead>
      <tbody>{rows}</tbody>
    </MantineTable>
  );
};
