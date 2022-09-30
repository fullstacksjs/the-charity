import type { ModalProps } from '@mantine/core';
import { Modal } from '@mantine/core';

import { CreateProjectForm } from './CreateProjectForm';

export type CreateProjectModalProps = Pick<ModalProps, 'onClose' | 'opened'>;

export const CreateProjectModal: React.FC<CreateProjectModalProps> = ({
  opened,
  onClose,
}) => {
  return (
    <Modal
      title="ایجاد پروژه جدید"
      size="md"
      centered
      opened={opened}
      onClose={onClose}
    >
      <CreateProjectForm dismiss={onClose} />
    </Modal>
  );
};
