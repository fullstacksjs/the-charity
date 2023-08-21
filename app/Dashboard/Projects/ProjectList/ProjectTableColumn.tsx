import type { ProjectKeys, ProjectListItem } from '@camp/domain';
import { ArrowDownIcon, ArrowUpIcon } from '@camp/icons';
import { Title } from '@mantine/core';
import type { Table } from '@tanstack/react-table';
import { flexRender } from '@tanstack/react-table';

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
                asc: <ArrowUpIcon />,
                desc: <ArrowDownIcon />,
              }[header.column.getIsSorted() as string] ?? null}
            </Title>
          )}
        </th>
      ))}
    </tr>
  ));
};
