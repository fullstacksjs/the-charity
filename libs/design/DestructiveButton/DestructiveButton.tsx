import type { ButtonProps } from '@mantine/core';
import { Button } from '@mantine/core';
import React from 'react';

interface Props extends ButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const DestructiveButton = ({
  type = 'button',
  onClick,
  ...rest
}: Props) => {
  return (
    <Button
      size="sm"
      variant="outline"
      color="error"
      type={type}
      onClick={onClick}
      {...rest}
    />
  );
};
