import { MenuIcon } from '@camp/design';
import { messages } from '@camp/messages';
import { ActionIcon, Group, Table } from '@mantine/core';

import { Badge } from '../atoms';
import type { ShortFamiliesInfo } from './toShortFamilyInfoTableRow';
import { toShortFamilyInfoTableRow } from './toShortFamilyInfoTableRow';

interface Props {
  shortFamiliesInfo: ShortFamiliesInfo;
}

export const FamilyTable = ({ shortFamiliesInfo }: Props) => {
  const t = messages.families.list.table;

  const columns = t.columns.map(msg => <th key={msg}>{msg}</th>);

  const rows = shortFamiliesInfo
    .map(toShortFamilyInfoTableRow)
    .map(({ name, informationStatus, severityStatus }, index) => {
      return (
        <tr key={informationStatus + name + severityStatus}>
          <td>{index + 1}</td>
          <td>{name}</td>
          <td>
            <Badge status={informationStatus.state}>
              {informationStatus.text}
            </Badge>
          </td>
          <td>
            <Group position="apart">
              <Badge status={severityStatus.state}>{severityStatus.text}</Badge>
              <ActionIcon size="sm">
                <MenuIcon />
              </ActionIcon>
            </Group>
          </td>
        </tr>
      );
    });

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
