import { range } from '@fullstacksjs/toolbox';
import { Skeleton } from '@mantine/core';
import { useMemo } from 'react';

import { TableCell } from './TableCell';
import { TableRow } from './TableRow';

interface Props {
  rows: number;
  cells: number;
}

export const TableSkeleton = ({ rows, cells }: Props) => {
  const rowsArray = useMemo(() => range(rows), [rows]);
  const cellsArray = useMemo(() => range(cells), [cells]);

  return rowsArray.map(rowIndex => (
    <TableRow key={`skeleton-row-${rowIndex}`}>
      {cellsArray.map(cellIndex => (
        <TableCell key={`skeleton-cell-${cellIndex}`}>
          <Skeleton width="100%" height={10} radius="md" />
        </TableCell>
      ))}
    </TableRow>
  ));
};
