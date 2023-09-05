import { Button, Group, Text } from '@mantine/core';
import { forwardRef } from 'react';
import { Upload } from 'react-feather';

interface Props extends Omit<React.HTMLProps<HTMLInputElement>, 'onClick'> {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const FileSelect = forwardRef<HTMLInputElement, Props>(
  ({ onClick, ...props }, ref) => {
    return (
      <Group position="apart">
        <input {...props} ref={ref} />
        <Button disabled={props.disabled} onClick={onClick} variant="outline">
          بارگذاری سند
        </Button>
        <Group
          spacing="8px"
          sx={theme => ({
            color: props.disabled
              ? theme.colors.fgSubtle[6]
              : theme.colors.fgMuted[6],
          })}
        >
          <Upload />
          <Text size="sm">سند را اینجا قرار دهید</Text>
        </Group>
      </Group>
    );
  },
);
