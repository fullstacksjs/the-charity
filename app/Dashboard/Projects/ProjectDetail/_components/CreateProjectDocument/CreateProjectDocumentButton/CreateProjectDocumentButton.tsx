import { PlusIcon } from '@camp/icons';
import { messages } from '@camp/messages';
import { tid } from '@camp/test';
import { Button } from '@mantine/core';

import { openCreateProjectDocumentModal } from '../CreateProjectDocumentModal';
import { createProjectDocumentButtonId as id } from './CreateProjectDocumentButton.ids';

export const CreateProjectDocumentButton = () => {
  const t = messages.projectDetail.addDocument;

  return (
    <Button
      variant="outline"
      size="sm"
      {...tid(id)}
      onClick={openCreateProjectDocumentModal}
      leftIcon={<PlusIcon size={16} />}
    >
      {t.addDocBtn}
    </Button>
  );
};
