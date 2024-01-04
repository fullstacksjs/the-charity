import { PlusIcon } from '@camp/icons';
import { messages } from '@camp/messages';
import { Button } from '@mantine/core';

import { openCreateProjectDocumentModal } from '../CreateProjectDocumentModal';

// FIXME add tests and story
export const CreateProjectDocumentButton = () => {
  const t = messages.projectDetail.addDocument;

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={openCreateProjectDocumentModal}
      leftIcon={<PlusIcon size={16} />}
    >
      {t.addDocBtn}
    </Button>
  );
};
