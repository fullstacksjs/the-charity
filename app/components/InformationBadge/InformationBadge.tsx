import { Badge } from '@camp/design';
import { messages } from '@camp/messages';

interface Props {
  information: 'completed' | 'draft';
}

export const InformationBadge = ({ information }: Props) => {
  return information === 'completed' ? (
    <Badge status="success">
      {messages.households.informationStatus.completed}
    </Badge>
  ) : (
    <Badge status="warning">
      {messages.households.informationStatus.draft}
    </Badge>
  );
};
