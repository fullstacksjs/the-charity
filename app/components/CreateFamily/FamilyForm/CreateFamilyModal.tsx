import { messages } from '@camp/messages';
import { createTestAttr } from '@camp/test';
import { closeModal, openModal } from '@mantine/modals';

import { CreateFamilyForm } from './CreateFamilyForm';
import { createFamilyModalId as id } from './CreateFamilyModal.ids';

export const CreateFamilyModal = () => (
  <CreateFamilyForm dismiss={() => closeModal(id)} />
);

export const openCreateFamilyModal = () =>
  openModal({
    modalId: id,
    children: <CreateFamilyModal />,
    title: messages.families.create,
    size: 'md',
    centered: true,
    ...createTestAttr(id),
  });
