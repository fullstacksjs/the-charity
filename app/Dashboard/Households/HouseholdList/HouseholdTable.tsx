import { DataTable, Table } from '@camp/design';
import type { HouseholdKeys, HouseholdListItem } from '@camp/domain';
import type { Icon } from '@camp/icons';
import { ArrowDownIcon, ArrowUpIcon } from '@camp/icons';
import type { AppRoute } from '@camp/router';
import { useNavigate } from '@camp/router';
import { noop } from '@fullstacksjs/toolbox';
import { Text } from '@mantine/core';
import type { Table as TableType } from '@tanstack/react-table';
import { flexRender } from '@tanstack/react-table';
import { useCallback } from 'react';

import * as ids from './HouseholdList.ids';

interface Props {
  table: TableType<HouseholdKeys & HouseholdListItem>;
}

const iconMap: Record<string, Icon> = {
  asc: ArrowUpIcon,
  desc: ArrowDownIcon,
} as const;

export const HouseholdTable = ({ table }: Props) => {
  const navigate = useNavigate();
  const gotoDetail = useCallback(
    (householdId: string) => {
      navigate({ to: `/dashboard/households/${householdId}` as AppRoute });
    },
    [navigate],
  );

  return (
    <DataTable<HouseholdKeys & HouseholdListItem>
      // id={ids.householdTableId}
      table={table}
      loading={false}
      onNext={noop}
      onPrev={noop}
      fallback={<></>}
      emptyState={
        <Table.Cell
          colSpan={table.getAllColumns().length}
          className="h-24 text-center"
        >
          No results.
        </Table.Cell>
      }
    />
    //   <thead>
    //     {table.getHeaderGroups().map(headerGroup => (
    //       <tr key={headerGroup.id}>
    //         {headerGroup.headers.map(header => {
    //           const Icon = iconMap[header.column.getIsSorted() as string];
    //           const canSort = header.column.getCanSort();

    //           return (
    //             <th key={header.id} colSpan={header.colSpan}>
    //               {header.isPlaceholder ? null : (
    //                 <Text
    //                   sx={{
    //                     cursor: canSort ? 'pointer' : undefined,
    //                     display: 'flex',
    //                     alignItems: 'center',
    //                     userSelect: canSort ? 'none' : undefined,
    //                     gap: 5,
    //                   }}
    //                   onClick={header.column.getToggleSortingHandler()}
    //                 >
    //                   {flexRender(
    //                     header.column.columnDef.header,
    //                     header.getContext(),
    //                   )}
    //                   {Icon ? <Icon size={14} /> : null}
    //                 </Text>
    //               )}
    //             </th>
    //           );
    //         })}
    //       </tr>
    //     ))}
    //   </thead>
    //   <tbody>
    //     {table.getRowModel().rows.map(row => (
    //       <tr
    //         style={{ cursor: 'pointer' }}
    //         key={row.id}
    //         onClick={() => gotoDetail(row.original.id)}
    //       >
    //         {row.getVisibleCells().map(cell => (
    //           <td key={cell.id}>
    //             {flexRender(cell.column.columnDef.cell, cell.getContext())}
    //           </td>
    //         ))}
    //       </tr>
    //     ))}
    //   </tbody>
    // </DataTable>
  );
};
