import { messages } from '@camp/messages';
import type { ModalProps } from '@mantine/core';
import { Modal } from '@mantine/core';

import { CreateProjectForm } from './CreateProjectForm';

type Props = Pick<ModalProps, 'onClose' | 'opened'>;

export const CreateProjectModal = ({ opened, onClose }: Props) => {
  return (
    <Modal
      title={messages.projects.create}
      size="md"
      centered
      opened={opened}
      onClose={onClose}
    >
      <CreateProjectForm dismiss={onClose} />
    </Modal>
  );
};
