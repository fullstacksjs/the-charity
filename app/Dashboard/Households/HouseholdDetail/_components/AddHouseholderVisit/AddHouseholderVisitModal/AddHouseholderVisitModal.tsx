import { messages } from '@camp/messages';
import { tid } from '@camp/test';
import { closeModal, openModal } from '@mantine/modals';

import { AddHouseholderVisitForm } from '../AddHouseholderVisitForm';
import { addHouseholderVisitModalId as id } from './AddHouseholderVisitModal.ids';

export const AddHouseholderVisitModal = () => (
  <AddHouseholderVisitForm dismiss={() => closeModal(id)} />
);

export const openAddHouseholderVisitModal = () =>
  openModal({
    modalId: id,
    children: <AddHouseholderVisitModal />,
    title: messages.householder.visits.title,
    size: '490',
    padding: '30px',
    centered: true,
    ...tid(id),
  });
