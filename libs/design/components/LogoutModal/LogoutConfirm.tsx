import { messages } from '@camp/messages';
import { Space, Stack, Text } from '@mantine/core';

const texts = messages.logout.modal;

export const LogoutConfirm = () => {
  return (
    <Stack spacing={40}>
      <Text color="fgDefault">{texts.confirmMessage}</Text>
      <Space h={0} />
    </Stack>
  );
};
