import { DateSummery, SmallText } from '@camp/design';
import type {
  ProjectKeys,
  ProjectListItem,
  ProjectSummery,
} from '@camp/domain';
import { ProjectStatusEnum } from '@camp/domain';
import { AppRoute, useNavigate } from '@camp/router';
import { Group } from '@mantine/core';

import { ProjectActionButton } from '../ProjectActionButton';
import { ProjectStatusBadge } from '../ProjectBadge';
import * as ids from './ProjectTableRow.ids';

interface Props {
  order: number;
  project: ProjectKeys & ProjectListItem;
}

const projectSummery: ProjectSummery = {
  description: 'خرید مک بوک و RTX برای تیم فول استکس از آقای هاشمی',
  startDate: new Date(),
  endDate: new Date(),
  status: ProjectStatusEnum.Done,
};

export const ProjectTableRow = ({ project, order }: Props) => {
  const navigate = useNavigate();
  const { id, name } = project;

  const gotoDetail = () => {
    navigate({ to: `/dashboard/projects/${id}` as AppRoute });
  };

  return (
    <tr style={{ cursor: 'pointer' }} onClick={gotoDetail}>
      <td>{order}</td>
      <td>{name}</td>
      <td>
        <SmallText>{projectSummery.description}</SmallText>
      </td>
      <td>
        <DateSummery
          startDate={projectSummery.startDate!}
          endDate={projectSummery.endDate}
        />
      </td>
      <td>
        <Group position="apart">
          <ProjectStatusBadge status={projectSummery.status} />
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
