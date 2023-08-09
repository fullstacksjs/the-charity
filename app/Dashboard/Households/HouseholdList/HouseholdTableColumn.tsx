import type { HouseholdKeys, HouseholdListItem } from '@camp/domain';
import type { Icon } from '@camp/icons';
import { ArrowDownIcon, ArrowUpIcon } from '@camp/icons';
import { Text } from '@mantine/core';
import type { Table } from '@tanstack/react-table';
import { flexRender } from '@tanstack/react-table';

interface Props {
  col: Table<HouseholdKeys & HouseholdListItem>;
}

const iconMap: Record<string, Icon> = {
  asc: ArrowUpIcon,
  desc: ArrowDownIcon,
} as const;

export const HouseholdTableColumn = ({ col }: Props) => {
  return col.getHeaderGroups().map(headerGroup => (
    <tr key={headerGroup.id}>
      {headerGroup.headers.map(header => {
        const Icon = iconMap[header.column.getIsSorted() as string];
        const canSort = header.column.getCanSort();

        return (
          <th key={header.id} colSpan={header.colSpan}>
            {header.isPlaceholder ? null : (
              <Text
                sx={{
                  cursor: canSort ? 'pointer' : undefined,
                  display: 'flex',
                  alignItems: 'center',
                  userSelect: canSort ? 'none' : undefined,
                  gap: 5,
                }}
                onClick={header.column.getToggleSortingHandler()}
              >
                {flexRender(
                  header.column.columnDef.header,
                  header.getContext(),
                )}
                {Icon ? <Icon size={14} /> : null}
              </Text>
            )}
          </th>
        );
      })}
    </tr>
  ));
};
