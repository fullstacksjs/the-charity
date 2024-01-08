import { DashboardTitle } from '@camp/design';
import { messages } from '@camp/messages';
import { Group, Stack } from '@mantine/core';

import { CreateProjectDocumentButton } from '../CreateProjectDocument';

export const ProjectDocuments = () => {
  const t = messages.projectDetail.addDocument;

  return (
    <Stack spacing={25} sx={{ position: 'relative' }}>
      <Group position="apart" mih="100%">
        <DashboardTitle>{t.title}</DashboardTitle>
        <CreateProjectDocumentButton />
      </Group>
    </Stack>
  );
};
