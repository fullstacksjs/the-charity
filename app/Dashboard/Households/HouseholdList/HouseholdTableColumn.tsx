import type { HouseholdKeys, HouseholdListItem } from '@camp/domain';
import { Text } from '@mantine/core';
import type { Table } from '@tanstack/react-table';
import { flexRender } from '@tanstack/react-table';
import { ArrowDown, ArrowUp } from 'react-feather';

interface Props {
  col: Table<HouseholdKeys & HouseholdListItem>;
}

export const HouseholdTableColumn = ({ col }: Props) => {
  return col.getHeaderGroups().map(headerGroup => (
    <tr key={headerGroup.id}>
      {headerGroup.headers.map(header => (
        <th key={header.id} colSpan={header.colSpan}>
          {header.isPlaceholder ? null : (
            <Text
              sx={{
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: 5,
              }}
              {...{
                className: header.column.getCanSort()
                  ? 'cursor-pointer select-none'
                  : '',
                onClick: header.column.getToggleSortingHandler(),
              }}
            >
              {flexRender(header.column.columnDef.header, header.getContext())}
              {{
                asc: <ArrowUp size={14} />,
                desc: <ArrowDown size={14} />,
              }[header.column.getIsSorted() as string] ?? null}
            </Text>
          )}
        </th>
      ))}
    </tr>
  ));
};
