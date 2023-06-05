import type { ProjectListItem } from '@camp/data-layer';
import type { AppRoute } from '@camp/router';
import { useNavigate } from '@camp/router';

interface Props {
  order: number;
  project: ProjectListItem;
}

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
    </tr>
  );
};
