import { messages } from '@camp/messages';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  Alert,
  Box,
  Button,
  PasswordInput,
  Stack,
  Text,
  TextInput,
  Title,
} from '@mantine/core';
import { useNavigate } from '@tanstack/react-location';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { useLoginMutation } from '../../data-layer/operations';
import { loginLocally } from '../../data-layer/variables';
import { ErrorAlertIcon } from '../../design/icons';
import { toClientErrorMessage } from '../../domain';

interface FormInputs {
  username: string;
  password: string;
}
const FormSchema = yup.object({
  username: yup
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
  const [errMsg, setErrMsg] = useState<string | null>(null);
  const [login, mutationResult] = useLoginMutation();

  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
  } = useForm<FormInputs>({
    resolver: yupResolver(FormSchema),
    mode: 'onTouched',
  });

  const onSubmit = handleSubmit(async ({ username, password }: FormInputs) => {
    try {
      await login({
        variables: { input: { username, password } },
      });
      loginLocally();
      navigate({ to: '/families', replace: true });
    } catch (err) {
      const clientError = toClientErrorMessage(err);
      setErrMsg(clientError);
    }
  });

  return (
    <form onSubmit={onSubmit}>
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
            error={errors.username?.message}
            {...register('username')}
          />
          <PasswordInput
            placeholder={messages.login.loginFrom.passwordInput.placeholder}
            label={messages.login.loginFrom.passwordInput.label}
            error={errors.password?.message}
            {...register('password')}
          />
        </Box>
        <Button
          type="submit"
          disabled={!isValid}
          loading={mutationResult.loading}
        >
          {messages.login.loginFrom.submitButton.text}
        </Button>
        {errMsg ? (
          <Alert
            icon={<ErrorAlertIcon width={18} height={18} />}
            title={errMsg}
            color="red"
            sx={theme => ({
              'color': theme.colors.errorDefault[6],
              'padding': '12px 14px',
              '.mantine-rtl-Alert-title': {
                fontSize: 12,
                fontWeight: 400,
              },
            })}
          >
            {''}
          </Alert>
        ) : null}
      </Stack>
    </form>
  );
};
