import { Badge } from '@camp/design';
import { ProjectStatusEnum } from '@camp/domain';
import { messages } from '@camp/messages';

interface Props {
  status: ProjectStatusEnum;
}

const t = messages.projects.informationStatus;

export const ProjectStatusBadge = ({ status }: Props) => {
  return status === ProjectStatusEnum.Done ? (
    <Badge status="success">{t.completed}</Badge>
  ) : (
    <Badge status="neutral">{t.disabled}</Badge>
  );
};
