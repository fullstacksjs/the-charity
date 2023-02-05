import { Badge } from '@camp/design';
import { type SeverityStatus } from '@camp/domain';
import { messages } from '@camp/messages';

interface Props {
  severity: SeverityStatus;
}

export const SeverityBadge = ({ severity }: Props) => {
  console.log(severity);

  return severity === 'normal' ? (
    <Badge status="warning">{messages.families.severityStatus.normal}</Badge>
  ) : (
    <Badge status="error">{messages.families.severityStatus.critical}</Badge>
  );
};