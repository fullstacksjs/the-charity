import { useCreateFamilyModalState } from '@camp/hooks';
import { messages } from '@camp/messages';
import { createTestAttr } from '@camp/utils';
import { Modal } from '@mantine/core';

import { CreateFamilyForm } from './CreateFamilyForm';

export const createFamilyModalId = 'create-family-modal';

export const CreateFamilyModal = () => {
  const { isModalOpen, closeModal } = useCreateFamilyModalState();

  return (
    <Modal
      title={messages.families.create}
      size="md"
      centered
      opened={isModalOpen}
      onClose={closeModal}
      {...createTestAttr(createFamilyModalId)}
    >
      <CreateFamilyForm dismiss={closeModal} />
    </Modal>
  );
};
