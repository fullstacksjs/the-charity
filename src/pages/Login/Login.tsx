import { Box, Group, Image } from '@mantine/core';

import { LoginForm } from './LoginForm';

export const Login = () => {
  return (
    <Group grow align="stretch" spacing={0} sx={{ height: '100vh' }}>
      <Box>
        <LoginForm />
      </Box>
      <Box sx={theme => ({ backgroundColor: theme.colors.bgCanvas })}>
        <Image fit="scale-down" alt="login" src="/login-logo.png" />
      </Box>
    </Group>
  );
};
