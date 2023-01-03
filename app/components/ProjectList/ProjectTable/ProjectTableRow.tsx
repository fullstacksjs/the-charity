import { ActionButton } from '@camp/design';
import { Group } from '@mantine/core';

import {
  projectTableMenuButtonId,
  projectTableMenuId,
} from './ProjectTable.ids';

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
            menuId={projectTableMenuId}
            menuButtonId={projectTableMenuButtonId}
            to="/dashboard/projects"
          />
        </Group>
      </td>
    </tr>
  );
};
