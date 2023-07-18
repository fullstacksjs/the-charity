import type { HouseholdKeys, HouseholdListItem } from '@camp/domain';
import { Title } from '@mantine/core';
import type { Table } from '@tanstack/react-table';
import { flexRender } from '@tanstack/react-table';

interface Props {
  col: Table<HouseholdKeys & HouseholdListItem>;
}

export const HouseholdTableColumn = ({ col }: Props) => {
  return col.getHeaderGroups().map(headerGroup => (
    <tr key={headerGroup.id}>
      {headerGroup.headers.map(header => (
        <th key={header.id} colSpan={header.colSpan}>
          {header.isPlaceholder ? null : (
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events
            <div
              {...{
                className: header.column.getCanSort()
                  ? 'cursor-pointer select-none'
                  : '',
                onClick: header.column.getToggleSortingHandler(),
              }}
            >
              {flexRender(header.column.columnDef.header, header.getContext())}
              {{
                asc: ' 🔼',
                desc: ' 🔽',
              }[header.column.getIsSorted() as string] ?? null}
            </div>
          )}
        </th>
      ))}
    </tr>
  ));
};
