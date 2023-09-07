import { ChevronLeftIcon, ChevronRightIcon } from '@camp/icons';
import { messages } from '@camp/messages';
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
  const t = messages.tablePagination;
  return (
    <Group position="apart">
      <Text weight="bold">{t.page(currentPage, pageCount)}</Text>
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
          {t.prevPage}
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
          {t.nextPage}
        </Button>
      </Group>
    </Group>
  );
};
