import type { CompletedFamily } from '@camp/data-layer';
import { FamilySeverity, FamilyStatus } from '@camp/data-layer';
import { MenuIcon } from '@camp/design';
import { messages } from '@camp/messages';
import { ActionIcon, Group, Table } from '@mantine/core';

import type { BadgeStatus } from '../atoms';
import { Badge } from '../atoms';

const t = messages.families.list.table;

interface SeverityStatus {
  text: string;
  state: BadgeStatus;
}

const toSeverityStatus = (severity: FamilySeverity): SeverityStatus => {
  return severity === FamilySeverity.Normal
    ? { text: t.rows.severityStatus.normal, state: 'warning' }
    : { text: t.rows.severityStatus.critical, state: 'error' };
};

interface InformationStatus {
  text: string;
  state: BadgeStatus;
}

const toInformationStatus = (status: FamilyStatus): InformationStatus => {
  return status === FamilyStatus.Completed
    ? { text: t.rows.informationStatus.completed, state: 'success' }
    : { text: t.rows.informationStatus.draft, state: 'warning' };
};

export interface ShortFamilyInfoRow {
  name: string;
  severityStatus: SeverityStatus;
  informationStatus: InformationStatus;
}

export type ShortFamilyInfo = Pick<
  CompletedFamily,
  'name' | 'severity' | 'status'
>;
export type ShortFamiliesInfo = ShortFamilyInfo[];

const toShortFamilyInfoRow = ({ name, severity, status }: ShortFamilyInfo) => ({
  name,
  severityStatus: toSeverityStatus(severity),
  informationStatus: toInformationStatus(status),
});

interface Props {
  shortFamiliesInfo: ShortFamiliesInfo;
}

export const FamilyTable = ({ shortFamiliesInfo }: Props) => {
  const columns = t.columns.map(msg => <th key={msg}>{msg}</th>);

  const rows = shortFamiliesInfo
    .map(toShortFamilyInfoRow)
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
