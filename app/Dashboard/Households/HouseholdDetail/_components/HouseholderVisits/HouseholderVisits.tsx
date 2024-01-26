import type { VisitsDto } from '@camp/data-layer';
import { useHouseholderVisitsQuery } from '@camp/data-layer';
import {
  DashboardTitle,
  formatToPersian,
  ImagePreview,
  showNotification,
} from '@camp/design';
import { visitColumnHelper } from '@camp/domain';
import { errorMessages, messages } from '@camp/messages';
import { tid } from '@camp/test';
import { isEmpty, noop } from '@fullstacksjs/toolbox';
import { Group, Stack, Text } from '@mantine/core';
import type { PaginationState, SortingState } from '@tanstack/react-table';
import { getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { useState } from 'react';

import { AddHouseholderVisitButton } from '../AddHouseholderVisit';
import * as ids from './HouseholderVisits.ids';
import { VisitActionButton } from './VisitActionButton';
import { VisitsTable } from './VisitsTable';
import { visitsActionIds as actionIds } from './VisitsTableRow.ids';

const t = messages.householder.visits;

interface Props {
  householdId: string;
}

const columns = [
  visitColumnHelper.display({
    header: t.table.columns.order,
    cell: order => order.row.index + 1,
  }),
  visitColumnHelper.accessor('documents', {
    header: t.table.columns.documents,
    cell: doc => <ImagePreview size={80} src={doc.getValue()[0]!.url} />,
  }),
  visitColumnHelper.accessor('date', {
    id: 'date',
    header: t.table.columns.date,
    cell: date => <Text>{formatToPersian(date.getValue())}</Text>,
  }),
  visitColumnHelper.accessor('description', {
    header: t.table.columns.description,
    cell: props => (
      <Group position="apart">
        <Text lineClamp={1}>{props.getValue()}</Text>
        <VisitActionButton
          open={noop}
          menuButtonId={actionIds.actionButton}
          menuId={actionIds.actionMenu}
        />
      </Group>
    ),
  }),
];

const empty: VisitsDto['visits'] = [];

export const HouseholderVisits = ({ householdId }: Props) => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  const { data, loading, error, previousData } = useHouseholderVisitsQuery({
    variables: {
      orderBy: sorting,
      range: pagination,
    },
  });

  const visitsCount = data?.totalCount ?? previousData?.totalCount ?? 0;
  const visits = data?.visits ?? empty;

  const table = useReactTable({
    data: visits,
    columns,
    state: { sorting, pagination },
    onPaginationChange: setPagination,
    manualPagination: true,
    pageCount: Math.ceil(visitsCount / pagination.pageSize),
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
  });

  if (error) {
    showNotification({
      type: 'failure',
      title: t.title,
      message: errorMessages.UNKNOWN_ERROR,
      ...tid(ids.HouseholderVisitsFailureNotification),
    });
    return null;
  }

  return (
    <Stack spacing={25} sx={{ position: 'relative' }}>
      <Group position="apart" mih="100%">
        <DashboardTitle>{t.title}</DashboardTitle>
        {isEmpty(visits) && !loading ? null : (
          <AddHouseholderVisitButton householdId={householdId} />
        )}
      </Group>
      <VisitsTable loading={loading} table={table} />
    </Stack>
  );
};
