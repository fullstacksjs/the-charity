import { PlusIcon } from '@camp/icons';
import { messages } from '@camp/messages';
import { tid } from '@camp/test';
import { Button } from '@mantine/core';

import { createMemberButtonId as ids } from './CreateMemberButton.ids';

interface Props {
  variant?: 'filled' | 'outline';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const CreateMemberButton = ({ variant = 'outline', onClick }: Props) => {
  const t = messages.member;
  return (
    <Button
      variant={variant}
      size="sm"
      onClick={onClick}
      {...tid(ids)}
      leftIcon={<PlusIcon size={16} />}
    >
      {t.addNewMember}
    </Button>
  );
};
