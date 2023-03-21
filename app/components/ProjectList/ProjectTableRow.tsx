import { Group } from '@mantine/core';

import {
  projectTableMenuButtonId,
  projectTableMenuId,
} from './ProjectTableRow.ids';

interface Props {
  order: number;
  name: string;
}

export const ProjectTableRow = ({ name, order }: Props) => {
  return (
    <tr style={{ cursor: 'pointer' }}>
      <td>{order}</td>
      <td>
        <Group position="apart">{name}</Group>
      </td>
    </tr>
  );
};
