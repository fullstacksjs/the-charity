import { Box, Group, Image } from '@mantine/core';

import { LoginForm } from './LoginForm';

export const Login = () => {
  return (
    <Group grow align="stretch" spacing={0} sx={{ height: '100%' }}>
      <Box
        sx={{ alignItems: 'center', justifyContent: 'center', display: 'flex' }}
      >
        <LoginForm />
      </Box>
      <Box
        sx={theme => ({
          backgroundColor: theme.colors.bgCanvas[6],
          display: 'flex',
          alignItems: 'center',
        })}
      >
        <Image fit="scale-down" alt="login" src="/login-logo.png" />
      </Box>
    </Group>
  );
};
