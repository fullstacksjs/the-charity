import { callAll } from '@fullstacksjs/toolbox';
import type { Table as TableType } from '@tanstack/react-table';
import { flexRender } from '@tanstack/react-table';

import { Table } from '../Table';

interface DataTableProps<T> {
  table: TableType<T>;
  id: string;
  fallback: JSX.Element;
  loading?: boolean;
  onNext?: VoidFunction;
  onPrev?: VoidFunction;
  onRowClick?: (row: T) => void;
}

export const DataTable = <T,>({
  table,
  id,
  loading,
  fallback,
  onNext,
  onPrev,
  onRowClick,
}: DataTableProps<T>) => {
  return (
    <>
      <Table id={id}>
        <Table.Head>
          {table.getHeaderGroups().map(headerGroup => (
            <Table.Row style={{ cursor: 'pointer' }} key={headerGroup.id}>
              {headerGroup.headers.map(header => {
                return (
                  <Table.HCell
                    onClick={header.column.getToggleSortingHandler()}
                    key={header.id}
                    style={{ width: header.column.columnDef.size }}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </Table.HCell>
                );
              })}
            </Table.Row>
          ))}
        </Table.Head>
        <Table.Body>
          {loading
            ? fallback
            : table.getRowModel().rows.map(row => (
                <Table.Row
                  style={{ cursor: onRowClick ? 'pointer' : 'auto' }}
                  onClick={() => {
                    onRowClick?.(row.original);
                  }}
                  key={row.id}
                >
                  {row.getVisibleCells().map(cell => (
                    <Table.Cell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </Table.Cell>
                  ))}
                </Table.Row>
              ))}
        </Table.Body>
      </Table>
      <Table.Pagination
        currentPage={table.getState().pagination.pageIndex + 1}
        pageCount={table.getPageCount()}
        canNextPage={table.getCanNextPage()}
        canPreviousPage={table.getCanPreviousPage()}
        onPrev={callAll(table.previousPage, onPrev)}
        onNext={callAll(table.nextPage, onNext)}
      />
    </>
  );
};
