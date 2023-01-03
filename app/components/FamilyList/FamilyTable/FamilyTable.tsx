import { messages } from '@camp/messages';
import { createTestAttr } from '@camp/test';
import { Table, useMantineTheme } from '@mantine/core';

import { FamilyTableRow } from './FamilyTableRow';
import type { ShortFamiliesInfo } from './toShortFamilyInfoTableRows';
import { toShortFamilyInfoTableRows } from './toShortFamilyInfoTableRows';

interface Props {
  shortFamiliesInfo: ShortFamiliesInfo;
}

export const familyTableId = 'family-list-table';

export const FamilyTable = ({ shortFamiliesInfo }: Props) => {
  const { colors } = useMantineTheme();
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
      {...createTestAttr(familyTableId)}
    >
      <thead>
        <tr>{columns}</tr>
      </thead>
      <tbody style={{ color: colors.fgMuted[6] }}>{rows}</tbody>
    </Table>
  );
};
