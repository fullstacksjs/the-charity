import { SmallText } from '@camp/design';
import type { ProjectKeys, ProjectListItem } from '@camp/domain';
import { messages } from '@camp/messages';
import { AppRoute, useNavigate } from '@camp/router';
import { Group } from '@mantine/core';

import { ProjectActionButton } from '../ProjectActionButton';
import * as ids from './ProjectTableRow.ids';

interface Props {
  order: number;
  project: ProjectKeys & ProjectListItem;
}

export const ProjectTableRow = ({ project, order }: Props) => {
  const navigate = useNavigate();
  const { id, name } = project;
  const t = messages.projects.list.table;

  const gotoDetail = () => {
    navigate({ to: `/dashboard/projects/${id}` as AppRoute });
  };

  return (
    <tr style={{ cursor: 'pointer' }} onClick={gotoDetail}>
      <td>{order}</td>
      <td>
        <Group position="apart" spacing={90}>
          {name}
          <SmallText>{t.description}</SmallText>
          <ProjectActionButton
            menuButtonId={ids.projectTableMenuButtonId}
            menuId={ids.projectTableMenuId}
            to={AppRoute.projectDetail}
            params={{ id }}
          />
        </Group>
      </td>
    </tr>
  );
};
