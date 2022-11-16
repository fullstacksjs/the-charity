import { messages } from '@camp/messages';
import { createTestAttr } from '@camp/utils';
import { closeModal, openModal } from '@mantine/modals';

import { CreateFamilyForm } from './CreateFamilyForm';

export const createFamilyModalId = 'create-family-modal';

export const CreateFamilyModal = () => (
  <CreateFamilyForm dismiss={() => closeModal(createFamilyModalId)} />
);

export const openCreateFamilyModal = () =>
  openModal({
    modalId: createFamilyModalId,
    children: <CreateFamilyModal />,
    title: messages.families.create,
    size: 'md',
    centered: true,
    ...createTestAttr(createFamilyModalId),
  });
