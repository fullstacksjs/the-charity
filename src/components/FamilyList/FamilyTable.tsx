import { messages } from '@camp/messages';
import { Table } from '@mantine/core';

import { FamilyTableRow } from './FamilyTableRow';
import type { ShortFamiliesInfo } from './toShortFamilyInfoTableRows';
import { toShortFamilyInfoTableRows } from './toShortFamilyInfoTableRows';

interface Props {
  shortFamiliesInfo: ShortFamiliesInfo;
}

export const FamilyTable = ({ shortFamiliesInfo }: Props) => {
  const t = messages.families.list.table;

  const columns = t.columns.map(msg => <th key={msg}>{msg}</th>);

  const rows = toShortFamilyInfoTableRows(shortFamiliesInfo).map(info => (
    <FamilyTableRow
      key={Object.values(info).join('-')}
      shortFamilyInfoTableRow={info}
    />
  ));

  return (
    <Table
      horizontalSpacing="lg"
      verticalSpacing="md"
      striped
      highlightOnHover
      withBorder
    >
      <thead>
        <tr>{columns}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
};
