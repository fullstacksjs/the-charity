import { useAuth0 } from '@auth0/auth0-react';
import { messages } from '@camp/messages';
import { Button, Center, Group, Image } from '@mantine/core';

import { config } from '../../config/config';

export const Login = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Group grow spacing={0} sx={{ height: '100%' }}>
      <Center>
        <Button
          size="xl"
          onClick={() =>
            loginWithRedirect({
              audience: config.schemaUrl,
              scope: 'read:current_user',
            })
          }
        >
          {messages.login.loginFrom.submitButton.text}
        </Button>
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
