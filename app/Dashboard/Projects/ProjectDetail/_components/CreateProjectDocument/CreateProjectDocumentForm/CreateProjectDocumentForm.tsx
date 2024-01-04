import { messages } from '@camp/messages';
import { tid } from '@camp/test';
import { Button, Group, Stack } from '@mantine/core';

import { createProjectDocumentFormIds as ids } from './CreateProjectDocumentForm.ids';

interface Props {
  dismiss: () => void;
}

export const CreateProjectDocumentForm = ({ dismiss }: Props) => {
  const t = messages.projectDetail.addDocument.form;

  return (
    <form {...tid(ids.form)}>
      <Stack spacing={40}>
        <Group spacing={10} position="right">
          <Button
            size="sm"
            variant="filled"
            color="secondary"
            onClick={dismiss}
          >
            {messages.actions.dismiss}
          </Button>
          <Button type="submit" size="sm" {...tid(ids.submitBtn)}>
            {t.submitBtn}
          </Button>
        </Group>
      </Stack>
    </form>
  );
};
