import type { ProjectKeys, ProjectListItem } from '@camp/domain';
import { Title } from '@mantine/core';
import type { Table } from '@tanstack/react-table';
import { flexRender } from '@tanstack/react-table';
import { ArrowDown, ArrowUp } from 'react-feather';

interface Props {
  col: Table<ProjectKeys & ProjectListItem>;
}

export const ProjectTableColumn = ({ col }: Props) => {
  return col.getHeaderGroups().map(headerGroup => (
    <tr key={headerGroup.id}>
      {headerGroup.headers.map(header => (
        <th key={header.id} colSpan={header.colSpan}>
          {header.isPlaceholder ? null : (
            <Title size="xs" onClick={header.column.getToggleSortingHandler()}>
              {flexRender(header.column.columnDef.header, header.getContext())}
              {{
                asc: <ArrowUp />,
                desc: <ArrowDown />,
              }[header.column.getIsSorted() as string] ?? null}
            </Title>
          )}
        </th>
      ))}
    </tr>
  ));
};
