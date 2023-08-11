import { EmptyState } from '@camp/design';
import { UserIcon } from '@camp/icons';
import { messages } from '@camp/messages';
import { useMantineTheme } from '@mantine/core';

import { CreateMemberButton } from '../CreateMemberButton';

interface Props {
  addNewMember: React.MouseEventHandler<HTMLButtonElement>;
}

export const MemberEmptyState = ({ addNewMember }: Props) => {
  const theme = useMantineTheme();
  const t = messages.member.empty;

  return (
    <EmptyState
      icon={
        <UserIcon
          width="33"
          height="33"
          color={theme.colors.primaryEmphasized[6]}
        />
      }
      title={t.title}
      message={t.description}
    >
      <CreateMemberButton variant="filled" onClick={addNewMember} />
    </EmptyState>
  );
};
