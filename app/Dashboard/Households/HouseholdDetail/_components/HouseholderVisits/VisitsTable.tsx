import { DataTable, Table } from '@camp/design';
import type { VisitKeys, VisitListItem } from '@camp/domain';
import type { Table as TableType } from '@tanstack/react-table';

import * as ids from './HouseholderVisits.ids';
import { openVisitDetailModal } from './VisitDetail';

interface Props {
  loading: boolean;
  table: TableType<VisitKeys & VisitListItem>;
}

export const VisitsTable = ({ loading, table }: Props) => {
  // FIXME: should open full page modal with the specific id

  return (
    <DataTable<VisitKeys & VisitListItem>
      id={ids.HouseholderVisitsTableId}
      table={table}
      loading={loading}
      fallback={<Table.Skeleton rows={3} cells={4} />}
      onRowClick={({ id }: VisitKeys & VisitListItem) => {
        openVisitDetailModal({ id });
      }}
    />
  );
};
