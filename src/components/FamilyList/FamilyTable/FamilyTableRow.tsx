import { MenuIcon } from '@camp/design';
import { Link, useNavigate } from '@camp/router';
import { createTestAttr } from '@camp/utils';
import { ActionIcon, Group, Menu } from '@mantine/core';

import { Badge } from '../../atoms';
import type { ShortFamilyInfoTableRow } from './toShortFamilyInfoTableRows';

interface Props {
  shortFamilyInfoTableRow: ShortFamilyInfoTableRow;
}

export const familyTableMenuButtonId = 'family-table-menu-button';
export const familyTableMenuId = 'family-table-menu';

export const FamilyTableRow = ({
  shortFamilyInfoTableRow: {
    name,
    informationStatus,
    severityStatus,
    id,
    order,
  },
}: Props) => {
  const navigate = useNavigate();

  const gotoDetail = () => {
    navigate({ to: `/dashboard/families/${id}` as AppRoute });
  };

  return (
    <tr style={{ cursor: 'pointer' }} onClick={gotoDetail}>
      <td>{order}</td>
      <td>{name}</td>
      <td>
        <Badge status={informationStatus.state}>{informationStatus.text}</Badge>
      </td>
      <td>
        <Group position="apart">
          <Badge status={severityStatus.state}>{severityStatus.text}</Badge>
          <Menu width={100} shadow="md" withArrow>
            <Menu.Dropdown {...createTestAttr(familyTableMenuId)}>
              <Menu.Item
                component={Link}
                to="/dashboard/families/:id"
                params={{ id }}
              >
                بازکردن
              </Menu.Item>
            </Menu.Dropdown>
            <Menu.Target {...createTestAttr(familyTableMenuButtonId)}>
              <ActionIcon
                size="sm"
                onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                  e.stopPropagation()
                }
              >
                <MenuIcon />
              </ActionIcon>
            </Menu.Target>
          </Menu>
        </Group>
      </td>
    </tr>
  );
};
