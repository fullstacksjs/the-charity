import type { SeverityStatus } from '@camp/data-layer';
import { Badge } from '@camp/design';
import { messages } from '@camp/messages';

interface Props {
  severity: SeverityStatus;
}

export const SeverityBadge = ({ severity }: Props) => {
  return severity === 'normal' ? (
    <Badge status="success">{messages.families.severityStatus.normal}</Badge>
  ) : (
    <Badge status="error">{messages.families.severityStatus.critical}</Badge>
  );
};
