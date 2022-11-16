import { messages } from '@camp/messages';
import { createTestAttr } from '@camp/utils';
import type { ContextModalProps } from '@mantine/modals';
import { openContextModal } from '@mantine/modals';

import { modalNames } from '../../ModalProvider/modalNames';
import { CreateFamilyForm } from './CreateFamilyForm';

export const createFamilyModalId = 'create-family-modal';

export const CreateFamilyModal = ({
  context,
  id,
}: ContextModalProps<{ modalBody: string }>) => {
  return (
    <>
      <CreateFamilyForm dismiss={() => context.closeModal(id)} />
    </>
  );
};

export const openCreateFamilyModal = () =>
  openContextModal({
    modal: modalNames.familyModal,
    title: messages.families.create,
    size: 'md',
    centered: true,
    ...createTestAttr(createFamilyModalId),
    innerProps: {},
  });
