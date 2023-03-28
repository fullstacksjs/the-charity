import { PlusIcon } from '@camp/icons';
import { messages } from '@camp/messages';
import { createTestAttr } from '@camp/test';
import { Button } from '@mantine/core';

import { createMemberButtonId as ids } from './CreateMemberButton.ids';

interface Props {
  variant?: 'filled' | 'outline';
  onAddNewMember?: React.MouseEventHandler<HTMLButtonElement>;
}

export const CreateMemberButton = ({
  variant = 'outline',
  onAddNewMember,
}: Props) => {
  const t = messages.member;
  return (
    <Button
      variant={variant}
      size="sm"
      onClick={onAddNewMember}
      {...createTestAttr(ids)}
      leftIcon={<PlusIcon width="16" height="16" />}
    >
      {t.addNewMember}
    </Button>
  );
};
