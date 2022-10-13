import {
  Box,
  Button,
  PasswordInput,
  Stack,
  Text,
  TextInput,
  Title,
} from '@mantine/core';

export const LoginForm = () => {
  return (
    <form>
      <Stack sx={{ padding: '200px 220px' }} spacing={13}>
        <Title order={3} color="fgMuted">
          به حساب کاربری خود وارد شوید
        </Title>
        <Text size="xs" color="fgMuted">
          خوش آمدید، لطفا اطلاعات خود را وارد کنید.
        </Text>
        <Box sx={{ padding: '20px 0' }}>
          <TextInput placeholder="نام کاربری" label="نام کاربری" />
          <PasswordInput placeholder="رمز عبور" label="رمز عبور" />
        </Box>
        <Button>ورود</Button>
      </Stack>
    </form>
  );
};
