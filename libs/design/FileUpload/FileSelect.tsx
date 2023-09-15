import { messages } from '@camp/messages';
import { Button, Group, Text } from '@mantine/core';
import { forwardRef } from 'react';
import { Upload } from 'react-feather';

interface Props extends Omit<React.HTMLProps<HTMLInputElement>, 'onClick'> {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const t = messages.projectDetail.addDocument;

export const FileSelect = forwardRef<HTMLInputElement, Props>(
  ({ onClick, ...props }, ref) => {
    return (
      <Group position="apart">
        <input {...props} ref={ref} />
        <Button disabled={props.disabled} onClick={onClick} variant="outline">
          {t.addDocBtn}
        </Button>
        <Group
          spacing="8px"
          sx={theme => ({
            color: props.disabled ? theme.colors.fg[4] : theme.colors.fg[5],
          })}
        >
          <Upload />
          <Text size="sm">{t.note}</Text>
        </Group>
      </Group>
    );
  },
);
