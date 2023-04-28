import { Badge } from '@camp/design';
import type { InformationStatus } from '@camp/domain';
import { messages } from '@camp/messages';

interface Props {
  information: InformationStatus;
}

export const InformationBadge = ({ information }: Props) => {
  return information === 'completed' ? (
    <Badge status="success">
      {messages.families.informationStatus.completed}
    </Badge>
  ) : (
    <Badge status="warning">{messages.families.informationStatus.draft}</Badge>
  );
};
