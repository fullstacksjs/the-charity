import { Link } from '@camp/router';
import { ActionIcon, Group, Menu } from '@mantine/core';

import { MenuIcon } from '../../../design/icons';
import { createTestAttr } from '../../../utils/createTestAttr';

export const projectTableMenuButtonId = 'project-table-menu-button';
export const projectTableMenuId = 'project-table-menu';

interface Props {
  order: number;
  name: string;
}

export const ProjectTableRow = ({ name, order }: Props) => {
  return (
    <tr style={{ cursor: 'pointer' }}>
      <td>{order}</td>
      <td>
        <Group position="apart">
          {name}
          <Menu width={100} shadow="md" withArrow>
            <Menu.Dropdown {...createTestAttr(projectTableMenuId)}>
              <Menu.Item to="/dashboard/projects" component={Link}>
                بازکردن
              </Menu.Item>
            </Menu.Dropdown>
            <Menu.Target {...createTestAttr(projectTableMenuButtonId)}>
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
