import { messages } from '@camp/messages';
import { tid } from '@camp/test';
import { closeModal, openModal } from '@mantine/modals';

import { CreateHouseholdForm } from '../CreateHouseholdForm';
import { createHouseholdModalId as id } from './CreateHouseholdModal.ids';

export const CreateHouseholdModal = () => (
  <CreateHouseholdForm dismiss={() => closeModal(id)} />
);

export const openCreateHouseholdModal = () =>
  openModal({
    modalId: id,
    children: <CreateHouseholdModal />,
    title: messages.households.create,
    size: 'md',
    centered: true,
    ...tid(id),
  });
