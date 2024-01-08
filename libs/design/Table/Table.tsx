import { tid } from '@camp/test';
import { Table as MantineTable } from '@mantine/core';

import { TableBody } from './TableBody';
import { TableCell } from './TableCell';
import { TableHead } from './TableHead';
import { TableHeader } from './TableHeader';
import { TablePagination } from './TablePagination';
import { TableRow } from './TableRow';
import { TableSkeleton } from './TableSkeleton';

interface Props {
  children: React.ReactNode;
  id: string;
}

export const Table = ({ children, id }: Props) => {
  return (
    <MantineTable
      horizontalSpacing="lg"
      verticalSpacing="md"
      striped
      highlightOnHover
      withBorder
      {...tid(id)}
    >
      {children}
    </MantineTable>
  );
};

Table.Head = TableHeader;
Table.HCell = TableHead;
Table.Row = TableRow;
Table.Body = TableBody;
Table.Pagination = TablePagination;
Table.Cell = TableCell;
Table.Skeleton = TableSkeleton;
