import { Badge } from '@camp/design';
import { HouseholdSeverityEnum } from '@camp/domain';
import { messages } from '@camp/messages';

interface Props {
  severity: HouseholdSeverityEnum;
}

export const SeverityBadge = ({ severity }: Props) => {
  return severity === HouseholdSeverityEnum.Normal ? (
    <Badge status="warning">{messages.households.severityStatus.Normal}</Badge>
  ) : (
    <Badge status="error">{messages.households.severityStatus.Critical}</Badge>
  );
};
