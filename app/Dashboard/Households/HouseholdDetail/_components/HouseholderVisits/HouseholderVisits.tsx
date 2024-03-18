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
import { isEmpty } from '@fullstacksjs/toolbox';
import { Group, Stack, Text } from '@mantine/core';
import type { PaginationState, SortingState } from '@tanstack/react-table';
import { getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { useState } from 'react';

import { AddHouseholderVisitButton } from '../AddHouseholderVisit';
import * as ids from './HouseholderVisits.ids';
import { VisitActionButton } from './VisitActionButton';
import { openVisitDetailModal } from './VisitDetail';
import { VisitsTable } from './VisitsTable';
import { visitsActionIds as actionIds } from './VisitsTableRow.ids';

const t = messages.householder.visits;

interface Props {
  householdId: string;
}

const columns = [
  visitColumnHelper.accessor('documents', {
    header: t.table.columns.documents,
    cell: doc => <ImagePreview size={80} src={doc.getValue()[0]?.url} />,
  }),
  visitColumnHelper.accessor('date', {
    id: 'date',
    header: t.table.columns.date,
    cell: date => <Text>{formatToPersian(date.getValue())}</Text>,
  }),
  visitColumnHelper.accessor('description', {
    header: t.table.columns.description,
    size: '100%' as any,
    cell: props => <Text lineClamp={1}>{props.getValue()}</Text>,
  }),
  visitColumnHelper.display({
    id: 'action',
    cell: props => (
      <VisitActionButton
        visitId={props.row.original.id}
        open={() => {
          openVisitDetailModal({ id: props.row.original.id });
        }}
        visitDate={props.row.original.date}
        menuButtonId={actionIds.actionButton}
        menuId={actionIds.actionMenu}
      />
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
      householdId,
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
        <AddHouseholderVisitButton householdId={householdId} />
      </Group>
      {/* FIXME: we need empty state here to */}
      {isEmpty(visits) && !loading ? null : (
        <VisitsTable loading={loading} table={table} />
      )}
    </Stack>
  );
};
