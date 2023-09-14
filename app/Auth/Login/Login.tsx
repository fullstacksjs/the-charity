import { useAuth0 } from '@camp/auth';
import { messages } from '@camp/messages';
import { Button, Center, Flex, Image, Text, Title } from '@mantine/core';

export const Login = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Center sx={{ height: '100%' }}>
      <Flex direction="column" w={270} sx={{ translate: '0 -8%' }}>
        <Image fit="scale-down" alt="logo" src="/login-logo.png" />
        <Flex direction="column" align="center" gap={30}>
          <Flex direction="column" align="center">
            <Title order={1}>{messages.login.title}</Title>
            <Text color="secondary">{messages.login.desc}</Text>
          </Flex>
          <Button fullWidth onClick={() => loginWithRedirect()}>
            {messages.login.button}
          </Button>
        </Flex>
      </Flex>
    </Center>
  );
};
