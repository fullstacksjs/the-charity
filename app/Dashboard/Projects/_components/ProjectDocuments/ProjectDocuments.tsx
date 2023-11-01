import { DashboardTitle } from '@camp/design';
import { messages } from '@camp/messages';
import { Button, Group } from '@mantine/core';

import { PlusIcon } from '../../../../../libs/icons';

export const ProjectDocuments = () => {
  const t = messages.projectDocuments;

  return (
    <Group position="apart" mih="100%">
      <DashboardTitle>{t.title}</DashboardTitle>
      <Button variant="outline" size="sm" leftIcon={<PlusIcon size={16} />}>
        {t.addNewDocument}
      </Button>
    </Group>
  );
};
