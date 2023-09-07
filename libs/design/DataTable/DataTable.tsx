import { callAll, isEmpty } from '@fullstacksjs/toolbox';
import type { Table as TableType } from '@tanstack/react-table';
import { flexRender } from '@tanstack/react-table';

import { Table } from '../Table';

interface DataTableProps<T> {
  table: TableType<T>;
  fallback: JSX.Element;
  emptyState: JSX.Element;
  loading?: boolean;
  onNext?: VoidFunction;
  onPrev?: VoidFunction;
}

export const DataTable = <T,>({
  table,
  loading,
  emptyState,
  fallback,
  onNext,
  onPrev,
}: DataTableProps<T>) => {
  return (
    <>
      <Table id="">
        <Table.Header>
          {table.getHeaderGroups().map(headerGroup => (
            <Table.Row key={headerGroup.id}>
              {headerGroup.headers.map(header => {
                return (
                  <Table.Head
                    onClick={header.column.getToggleSortingHandler()}
                    key={header.id}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </Table.Head>
                );
              })}
            </Table.Row>
          ))}
        </Table.Header>
        <Table.Body>
          {loading
            ? fallback
            : isEmpty(table.getRowModel().rows)
            ? emptyState
            : table.getRowModel().rows.map(row => (
                <Table.Row key={row.id}>
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
