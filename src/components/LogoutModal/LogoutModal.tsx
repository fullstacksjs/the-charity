import type { ModalProps } from '@mantine/core';
import { Button, Group, Modal, Stack, Text } from '@mantine/core';

import { setFakeLoggedOut } from '../../fakeLogin';

type Props = Pick<ModalProps, 'onClose' | 'opened'>;

export const LogoutModal = ({ opened, onClose }: Props) => {
  return (
    <Modal
      title="خروج از حساب کاربری"
      size="md"
      centered
      opened={opened}
      onClose={onClose}
    >
      <Stack spacing={40}>
        <Text color="fgDefault">
          آیا می خواهید از حساب کاربری خود خارج شوید؟
        </Text>
        <Group spacing={20}>
          <Button
            variant="filled"
            color="red"
            onClick={() => {
              setFakeLoggedOut();
            }}
          >
            بله، خارج میشوم
          </Button>
          <Button variant="filled" color="gray" onClick={onClose}>
            انصراف
          </Button>
        </Group>
      </Stack>
    </Modal>
  );
};
