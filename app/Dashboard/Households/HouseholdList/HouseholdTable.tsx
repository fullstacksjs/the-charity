import { DataTable, Table } from '@camp/design';
import type { HouseholdKeys, HouseholdListItem } from '@camp/domain';
import type { AppRoute } from '@camp/router';
import { useNavigate } from '@camp/router';
import type { Table as TableType } from '@tanstack/react-table';
import { useCallback } from 'react';

import * as ids from './HouseholdList.ids';

interface Props {
  loading: boolean;
  table: TableType<HouseholdKeys & HouseholdListItem>;
}

export const HouseholdTable = ({ loading, table }: Props) => {
  const navigate = useNavigate();
  const gotoDetail = useCallback(
    (householdId: string) => {
      navigate({ to: `/dashboard/households/${householdId}` as AppRoute });
    },
    [navigate],
  );

  return (
    <DataTable<HouseholdKeys & HouseholdListItem>
      id={ids.householdTableId}
      table={table}
      loading={loading}
      fallback={<Table.Skeleton rows={10} cells={4} />}
      onRowClick={({ id }: HouseholdKeys & HouseholdListItem) => gotoDetail(id)}
    />
  );
};
