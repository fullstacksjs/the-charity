import { Box, Group, Image } from '@mantine/core';

import { LoginForm } from './LoginForm';

export const Login = () => {
  return (
    <Group position="center" spacing="xl" grow align="start">
      <Box>
        <LoginForm />
      </Box>
      <Box>
        <Image fit="scale-down" alt="login" src="/login-logo.png" />
      </Box>
    </Group>
  );
};
