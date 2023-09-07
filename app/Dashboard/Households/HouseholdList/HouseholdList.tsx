import type { HouseholdListDto } from '@camp/data-layer';
import {
  useHouseholdListQuery,
  useHouseholdsCountQuery,
} from '@camp/data-layer';
import { DashboardCard, DashboardTitle, showNotification } from '@camp/design';
import { householdColumnHelper } from '@camp/domain';
import { errorMessages, messages } from '@camp/messages';
import { AppRoute } from '@camp/router';
import { tid } from '@camp/test';
import { isEmpty } from '@fullstacksjs/toolbox';
import { Group } from '@mantine/core';
import type { PaginationState, SortingState } from '@tanstack/react-table';
import { getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { useState } from 'react';

import { InformationBadge } from '../../_components/InformationBadge';
import { SeverityBadge } from '../../_components/SeverityBadge';
import { CreateHouseholdButton } from '../_components/CreateHousehold';
import { HouseholdActionButton } from '../_components/HouseholdActionButton';
import { HouseholdEmptyState } from '../HouseholdEmptyState';
import * as ids from './HouseholdList.ids';
import { HouseholdTable } from './HouseholdTable';
import { householdActionIds as actionIds } from './HouseholdTableRow.ids';

const t = messages.households.list;

const columns = [
  householdColumnHelper.display({
    header: t.table.columns.order,
    cell: order => order.row.index + 1,
  }),
  householdColumnHelper.accessor('name', {
    header: t.table.columns.name,
    cell: name => name.getValue(),
  }),
  householdColumnHelper.accessor('isCompleted', {
    id: 'status',
    header: t.table.columns.status,
    cell: status => (
      <InformationBadge status={status.getValue() ? 'completed' : 'draft'} />
    ),
  }),
  householdColumnHelper.accessor('severity', {
    header: t.table.columns.severity,
    enableSorting: true,
    cell: props => (
      <Group position="apart">
        <SeverityBadge severity={props.getValue()} />
        <HouseholdActionButton
          to={AppRoute.householdDetail}
          params={{ id: props.row.original.id }}
          householdId={props.row.original.id}
          householdName={props.row.original.name}
          menuButtonId={actionIds.actionButton}
          menuId={actionIds.actionMenu}
        />
      </Group>
    ),
  }),
];

const empty: HouseholdListDto['household'] = [];

export const HouseholdList = () => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  // FIXME: fix empty object arg
  const { data: maybeHouseholdCount } = useHouseholdsCountQuery({});
  const { data, loading, error } = useHouseholdListQuery({
    variables: {
      orderBy: sorting,
      range: pagination,
    },
  });

  const householdsCount = maybeHouseholdCount?.count ?? 0;
  const households = data?.household ?? empty;

  const table = useReactTable({
    data: households,
    columns,
    state: { sorting, pagination },
    onPaginationChange: setPagination,
    manualPagination: true,
    pageCount: Math.ceil(householdsCount / pagination.pageSize),
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
  });

  if (error) {
    showNotification({
      type: 'failure',
      title: t.title,
      message: errorMessages.UNKNOWN_ERROR,
      ...tid(ids.householdListFailureNotification),
    });
    return null;
  }

  if (isEmpty(households) && !loading) return <HouseholdEmptyState />;

  return (
    <DashboardCard
      left={<CreateHouseholdButton />}
      right={<DashboardTitle>{t.title}</DashboardTitle>}
    >
      <HouseholdTable loading={loading} table={table} />
    </DashboardCard>
  );
};
