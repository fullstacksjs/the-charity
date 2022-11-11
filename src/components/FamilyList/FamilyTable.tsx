import { MenuIcon } from '@camp/design';
import { messages } from '@camp/messages';
import { ActionIcon, Group, Menu, Table } from '@mantine/core';

import { Link } from '../../router';
import { Badge } from '../atoms';
import type { ShortFamiliesInfo } from './toShortFamilyInfoTableRows';
import { toShortFamilyInfoTableRows } from './toShortFamilyInfoTableRows';

interface Props {
  shortFamiliesInfo: ShortFamiliesInfo;
}

export const FamilyTable = ({ shortFamiliesInfo }: Props) => {
  const t = messages.families.list.table;

  const columns = t.columns.map(msg => <th key={msg}>{msg}</th>);

  const rows = toShortFamilyInfoTableRows(shortFamiliesInfo).map(
    ({ name, informationStatus, severityStatus, id, order }) => {
      return (
        <tr key={informationStatus + name + severityStatus + order}>
          <td>{order}</td>
          <td>{name}</td>
          <td>
            <Badge status={informationStatus.state}>
              {informationStatus.text}
            </Badge>
          </td>
          <td>
            <Group position="apart">
              <Badge status={severityStatus.state}>{severityStatus.text}</Badge>
              <Menu width={200} shadow="md">
                <Menu.Dropdown>
                  <Menu.Item
                    component={Link}
                    to="/dashboard/families/:id"
                    params={{ id }}
                  >
                    بازکردن
                  </Menu.Item>
                </Menu.Dropdown>
                <Menu.Target>
                  <ActionIcon size="sm">
                    <MenuIcon />
                  </ActionIcon>
                </Menu.Target>
              </Menu>
            </Group>
          </td>
        </tr>
      );
    },
  );

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
