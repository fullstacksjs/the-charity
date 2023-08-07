import { Badge } from '@camp/design';
import { messages } from '@camp/messages';

interface Props {
  status: 'completed' | 'draft';
}

export const InformationBadge = ({ status }: Props) => {
  return status === 'completed' ? (
    <Badge status="success">
      {messages.households.informationStatus.completed}
    </Badge>
  ) : (
    <Badge status="warning">
      {messages.households.informationStatus.draft}
    </Badge>
  );
};
