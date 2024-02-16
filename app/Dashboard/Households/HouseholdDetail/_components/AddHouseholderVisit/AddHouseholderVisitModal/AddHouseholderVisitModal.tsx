import { messages } from '@camp/messages';
import { tid } from '@camp/test';
import { closeModal, openModal } from '@mantine/modals';

import type { AddHouseholderVisitFormProps } from '../AddHouseholderVisitForm';
import { AddHouseholderVisitForm } from '../AddHouseholderVisitForm';
import { addHouseholderVisitModalId as id } from './AddHouseholderVisitModal.ids';

type Props = Omit<AddHouseholderVisitFormProps, 'dismiss'>;

export const AddHouseholderVisitModal = (props: Props) => (
  <AddHouseholderVisitForm {...props} dismiss={() => closeModal(id)} />
);

export const openAddHouseholderVisitModal = (props: Props) =>
  openModal({
    modalId: id,
    children: <AddHouseholderVisitModal {...props} />,
    title: messages.householder.visits.title,
    size: '490',
    padding: '30px',
    centered: true,
    ...tid(id),
  });
