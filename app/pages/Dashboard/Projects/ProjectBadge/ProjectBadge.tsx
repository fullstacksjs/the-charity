import { Badge } from '@camp/design';
import type { ProjectStatus } from '@camp/domain';
import { messages } from '@camp/messages';

interface Props {
  status: ProjectStatus;
}

const t = messages.projects.informationStatus;

export const ProjectStatusBadge = ({ status }: Props) => {
  return status === 'done' ? (
    <Badge status="success">{t.completed}</Badge>
  ) : (
    <Badge status="disabled">{t.disabled}</Badge>
  );
};
