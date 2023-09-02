import { Button } from '@mantine/core';

export const TablePagination = ({
  currentPage,
  pageCount,
  canNextPage,
  canPreviousPage,
  onPrev,
  onNext,
}: any) => {
  return (
    <div
      role="navigation"
      aria-label="pagination navigation"
      className="flex items-center justify-end space-x-2 p-4"
    >
      <span>
        Page{' '}
        <strong aria-label="page">
          {currentPage} of {Math.max(pageCount, 1)}
        </strong>
      </span>
      <div className="space-x-2">
        <Button
          aria-label="go to previous page"
          variant="outline"
          size="sm"
          onClick={onPrev}
          disabled={!canPreviousPage}
        >
          Previous
        </Button>
        <Button
          aria-label="go to next page"
          variant="outline"
          size="sm"
          onClick={onNext}
          disabled={!canNextPage}
        >
          Next
        </Button>
      </div>
    </div>
  );
};
