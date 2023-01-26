import { createTestAttr } from '@camp/test';
import { Table as MantineTable, useMantineTheme } from '@mantine/core';

interface Props {
  id: string;
  columns: string[];
  rows: JSX.Element[];
}

export const Table = ({ id, columns, rows }: Props) => {
  const { colors } = useMantineTheme();

  return (
    <MantineTable
      horizontalSpacing="lg"
      verticalSpacing="md"
      striped
      highlightOnHover
      withBorder
      {...createTestAttr(id)}
    >
      <thead>
        <tr>
          {columns.map(content => (
            <th key={content}>{content}</th>
          ))}
        </tr>
      </thead>
      <tbody style={{ color: colors.fgMuted[6] }}>{rows}</tbody>
    </MantineTable>
  );
};
