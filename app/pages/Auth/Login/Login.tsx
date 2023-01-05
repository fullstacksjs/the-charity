import { useAuth0 } from '@camp/auth';
import { config } from '@camp/config';
import { messages } from '@camp/messages';
import { Button, Center, Group, Image } from '@mantine/core';

export const Login = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Group grow spacing={0} sx={{ height: '100%' }}>
      <Center>
        <Button
          size="xl"
          onClick={() =>
            loginWithRedirect({
              audience: config.auth0.audience,
              scope: config.auth0.scope,
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
