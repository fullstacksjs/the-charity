import type { HouseholdKeys, HouseholdListItem } from '@camp/domain';
import type { AppRoute } from '@camp/router';
import { useNavigate } from '@camp/router';
import type { Table } from '@tanstack/react-table';
import { flexRender } from '@tanstack/react-table';
import React, { memo } from 'react';

interface Props {
  rows?: Table<HouseholdKeys & HouseholdListItem>;
}

export const HouseholdTableRow = memo(({ rows }: Props) => {
  const navigate = useNavigate();

  const gotoDetail = (householdId: string) => {
    navigate({ to: `/dashboard/households/${householdId}` as AppRoute });
  };

  return rows?.getRowModel().rows.map(row => (
    <tr
      style={{ cursor: 'pointer' }}
      key={row.id}
      onClick={() => gotoDetail(row.original.id)}
    >
      {row.getVisibleCells().map(cell => (
        <td key={cell.id}>
          {flexRender(cell.column.columnDef.cell, cell.getContext())}
        </td>
      ))}
    </tr>
  ));
});
