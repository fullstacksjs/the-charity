import { Badge } from '@camp/design';
import type { SeverityStatus } from '@camp/domain';
import { messages } from '@camp/messages';

interface Props {
  severity: SeverityStatus;
}

export const SeverityBadge = ({ severity }: Props) => {
  return severity === 'normal' ? (
    <Badge status="warning">{messages.households.severityStatus.normal}</Badge>
  ) : (
    <Badge status="error">{messages.households.severityStatus.critical}</Badge>
  );
};
