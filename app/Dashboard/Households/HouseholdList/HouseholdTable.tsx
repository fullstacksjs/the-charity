import { DataTable } from '@camp/design';
import type { HouseholdKeys, HouseholdListItem } from '@camp/domain';
import type { Table as TableType } from '@tanstack/react-table';

import * as ids from './HouseholdList.ids';

interface Props {
  loading: boolean;
  table: TableType<HouseholdKeys & HouseholdListItem>;
}

export const HouseholdTable = ({ loading, table }: Props) => {
  return (
    <DataTable<HouseholdKeys & HouseholdListItem>
      id={ids.householdTableId}
      table={table}
      loading={loading}
      // TODO add skeleton here
      fallback={<></>}
    />
  );
};
