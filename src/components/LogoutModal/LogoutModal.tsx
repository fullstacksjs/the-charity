import { messages } from '@camp/messages';
import type { ModalProps } from '@mantine/core';
import { Button, Group, Modal, Stack, Text } from '@mantine/core';

import { setFakeLoggedOut } from '../../fakeLogin';
import { createTestAttr } from '../../utils/createTestAttr';

type Props = Pick<ModalProps, 'onClose' | 'opened'>;
export const logoutModalIds = {
  modal: 'logout-modal',
  acceptBtn: 'logout-modal-accept-button',
};
const texts = messages.logout.modal;

export const LogoutModal = ({ opened, onClose }: Props) => {
  return (
    <Modal
      title={texts.title}
      size="md"
      centered
      opened={opened}
      onClose={onClose}
      {...createTestAttr(logoutModalIds.modal)}
    >
      <Stack spacing={40}>
        <Text color="fgDefault">{texts.text}</Text>
        <Group spacing={20}>
          <Button
            variant="filled"
            color="red"
            onClick={() => {
              setFakeLoggedOut();
            }}
          >
            {texts.accept}
          </Button>
          <Button
            variant="filled"
            color="gray"
            onClick={onClose}
            {...createTestAttr(logoutModalIds.acceptBtn)}
          >
            {texts.cancel}
          </Button>
        </Group>
      </Stack>
    </Modal>
  );
};
