import { Center, Group, Image } from '@mantine/core';

import { LoginForm } from './LoginForm';

export const Login = () => {
  return (
    <Group grow spacing={0} sx={{ height: '100%' }}>
      <Center>
        <LoginForm />
      </Center>
      <Center
        sx={theme => ({
          backgroundColor: theme.colors.bgCanvas[6],
          height: '100%',
        })}
      >
        <Image fit="scale-down" alt="login" src="/login-logo.png" />
      </Center>
    </Group>
  );
};
