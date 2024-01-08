import { messages } from '@camp/messages';
import { tid } from '@camp/test';
import { closeModal, openModal } from '@mantine/modals';

import { CreateProjectDocumentForm } from '../CreateProjectDocumentForm';
import { createProjectDocumentModalId as id } from './CreateProjectDocumentModal.ids';

export const CreateProjectDocumentModal = () => (
  <CreateProjectDocumentForm dismiss={() => closeModal(id)} />
);

export const openCreateProjectDocumentModal = () =>
  openModal({
    modalId: id,
    children: <CreateProjectDocumentModal />,
    title: messages.projectDetail.addDocument.title,
    size: '490',
    padding: '30px',
    centered: true,
    ...tid(id),
  });
