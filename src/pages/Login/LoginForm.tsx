/* eslint-disable @typescript-eslint/no-misused-promises */
import { messages } from '@camp/messages';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  Box,
  Button,
  PasswordInput,
  Stack,
  Text,
  TextInput,
  Title,
} from '@mantine/core';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

interface FormInputs {
  userName: string;
  password: string;
}
const FormSchema = yup.object({
  userName: yup
    .string()
    .trim()
    .email(messages.login.loginFrom.validation.emailErrorMessage)
    .required(messages.login.loginFrom.validation.required),
  password: yup
    .string()
    .trim()
    .required(messages.login.loginFrom.validation.required),
});

export const LoginForm = () => {
  const onSubmit = ({ userName, password }: FormInputs) => {
    console.log('username:', userName, 'password:', password);
  };

  const { handleSubmit, register, formState } = useForm<FormInputs>({
    resolver: yupResolver(FormSchema),
    mode: 'onSubmit',
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack sx={{ padding: '200px 220px' }} spacing={13}>
        <Title order={3} color="fgMuted">
          {messages.login.loginFrom.title}
        </Title>
        <Text size="xs" color="fgMuted">
          {messages.login.loginFrom.description}
        </Text>
        <Box sx={{ padding: '20px 0' }}>
          <TextInput
            type="email"
            placeholder={messages.login.loginFrom.emailInput.placeholder}
            label={messages.login.loginFrom.emailInput.label}
            error={formState.errors.userName?.message}
            {...register('userName')}
          />
          <PasswordInput
            type="password"
            placeholder={messages.login.loginFrom.passwordInput.placeholder}
            label={messages.login.loginFrom.passwordInput.label}
            error={formState.errors.password?.message}
            {...register('password')}
          />
        </Box>
        <Button type="submit">
          {messages.login.loginFrom.submitButton.text}
        </Button>
      </Stack>
    </form>
  );
};
