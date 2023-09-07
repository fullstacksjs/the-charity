import { ChevronLeftIcon, ChevronRightIcon } from '@camp/icons';
import { Button, Group, Text } from '@mantine/core';

interface Props {
  currentPage: number;
  pageCount: number;
  canNextPage?: boolean;
  canPreviousPage?: boolean;
  onPrev: VoidFunction;
  onNext: VoidFunction;
}

export const TablePagination = ({
  currentPage,
  pageCount,
  canNextPage,
  canPreviousPage,
  onPrev,
  onNext,
}: Props) => {
  return (
    <Group position="apart">
      <Text weight="bold">
        صفحه {currentPage} از {Math.max(pageCount, 1)}
      </Text>
      <Group spacing={10}>
        <Button
          aria-label="go to previous page"
          variant="outline"
          size="sm"
          color="dark"
          leftIcon={<ChevronRightIcon />}
          onClick={onPrev}
          disabled={!canPreviousPage}
        >
          صفحه قبل
        </Button>
        <Button
          aria-label="go to next page"
          variant="outline"
          size="sm"
          color="dark"
          rightIcon={<ChevronLeftIcon />}
          onClick={onNext}
          disabled={!canNextPage}
        >
          صفحه بعد
        </Button>
      </Group>
    </Group>
  );
};
