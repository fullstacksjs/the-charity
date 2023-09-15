import { EmptyState } from '@camp/design';
import { UserIcon } from '@camp/icons';
import { messages } from '@camp/messages';

import { CreateMemberButton } from '../CreateMemberButton';

interface Props {
  addNewMember: React.MouseEventHandler<HTMLButtonElement>;
}

export const MemberEmptyState = ({ addNewMember }: Props) => {
  const t = messages.member.empty;

  return (
    <EmptyState Icon={UserIcon} title={t.title} message={t.description}>
      <CreateMemberButton variant="filled" onClick={addNewMember} />
    </EmptyState>
  );
};
