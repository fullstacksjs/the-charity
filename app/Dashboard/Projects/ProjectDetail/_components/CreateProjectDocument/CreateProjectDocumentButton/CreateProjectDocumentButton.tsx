import { PlusIcon } from '@camp/icons';
import { messages } from '@camp/messages';
import { Button } from '@mantine/core';

// FIXME add tests and story
export const CreateProjectDocumentButton = () => {
  const t = messages.projectDocuments;

  return (
    <Button variant="outline" size="sm" leftIcon={<PlusIcon size={16} />}>
      {t.addNewDocument}
    </Button>
  );
};
