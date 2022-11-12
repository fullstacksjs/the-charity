import { MenuIcon } from '@camp/design';
import { Link } from '@camp/router';
import { ActionIcon, Group, Menu } from '@mantine/core';

import { Badge } from '../../atoms';
import type { ShortFamilyInfoTableRow } from './toShortFamilyInfoTableRows';

interface Props {
  shortFamilyInfoTableRow: ShortFamilyInfoTableRow;
}

export const FamilyTableRow = ({
  shortFamilyInfoTableRow: {
    name,
    informationStatus,
    severityStatus,
    id,
    order,
  },
}: Props) => {
  return (
    <tr>
      <td>{order}</td>
      <td>{name}</td>
      <td>
        <Badge status={informationStatus.state}>{informationStatus.text}</Badge>
      </td>
      <td>
        <Group position="apart">
          <Badge status={severityStatus.state}>{severityStatus.text}</Badge>
          <Menu width={100} shadow="md" withArrow>
            <Menu.Dropdown>
              <Menu.Item
                component={Link}
                target="_blank"
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
};
