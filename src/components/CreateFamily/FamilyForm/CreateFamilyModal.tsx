import type { ModalProps } from '@mantine/core';
import { Modal } from '@mantine/core';

import { CreateFamilyForm } from './CreateFamilyForm';

export type CreateFamilyModalProps = Pick<ModalProps, 'onClose' | 'opened'>;

export const CreateFamilyModal = ({
  opened,
  onClose,
}: CreateFamilyModalProps) => {
  return (
    <Modal
      title="ایجاد خانواده جدید"
      size="md"
      centered
      opened={opened}
      onClose={onClose}
    >
      <CreateFamilyForm dismiss={onClose} />
    </Modal>
  );
};