import { Group } from '@mantine/core';

import { ActionButton } from '../../ActionButton';

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
          <ActionButton
            MenuId={projectTableMenuId}
            MenuButtonId={projectTableMenuButtonId}
            to="/dashboard/projects"
          />
        </Group>
      </td>
    </tr>
  );
};
