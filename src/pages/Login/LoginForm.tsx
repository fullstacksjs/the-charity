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
import { useNavigate } from '@tanstack/react-location';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { setFakeLoggedIn } from '../../fakeLogin';

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
  const navigate = useNavigate();

  const onSubmit = ({ userName, password }: FormInputs) => {
    console.log('username:', userName, 'password:', password);
    // FIXME should delete this after backend got integrated
    setFakeLoggedIn();
    navigate({ to: '/families', replace: true });
  };

  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
  } = useForm<FormInputs>({
    resolver: yupResolver(FormSchema),
    mode: 'onTouched',
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack sx={{ width: 300 }} spacing={20}>
        <Stack spacing={13}>
          <Title order={3} color="fgMuted">
            {messages.login.loginFrom.title}
          </Title>
          <Text size="xs" color="fgMuted">
            {messages.login.loginFrom.description}
          </Text>
        </Stack>
        <Box>
          <TextInput
            type="email"
            placeholder={messages.login.loginFrom.emailInput.placeholder}
            label={messages.login.loginFrom.emailInput.label}
            error={errors.userName?.message}
            {...register('userName')}
          />
          <PasswordInput
            placeholder={messages.login.loginFrom.passwordInput.placeholder}
            label={messages.login.loginFrom.passwordInput.label}
            error={errors.password?.message}
            {...register('password')}
          />
        </Box>
        <Button type="submit" disabled={!isValid}>
          {messages.login.loginFrom.submitButton.text}
        </Button>
      </Stack>
    </form>
  );
};
