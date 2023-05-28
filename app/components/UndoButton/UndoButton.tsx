import { messages } from '@camp/messages';
import { createTestAttr } from '@camp/test';
import type { ButtonProps } from '@mantine/core';
import { Button } from '@mantine/core';
import React from 'react';

import { UndoButtonIds as id } from './UndoButton.ids';

interface Props extends ButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const UndoButton = ({ onClick, ...rest }: Props) => {
  const t = messages.actions;
  return (
    <Button
      {...createTestAttr(id)}
      size="sm"
      variant="outline"
      color="red"
      onClick={onClick}
      {...rest}
    >
      {t.undoBtn}
    </Button>
  );
};