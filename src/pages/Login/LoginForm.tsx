/* eslint-disable @typescript-eslint/no-misused-promises */
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
    .email('لطفا یک ایمیل معتبر را وارد کنید.')
    .required('این فیلد ضروری است'),
  password: yup.string().trim().required('این فیلد ضروری است'),
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
          به حساب کاربری خود وارد شوید
        </Title>
        <Text size="xs" color="fgMuted">
          خوش آمدید، لطفا اطلاعات خود را وارد کنید.
        </Text>
        <Box sx={{ padding: '20px 0' }}>
          <TextInput
            placeholder="you@email.com"
            label="نام کاربری"
            error={formState.errors.userName?.message}
            {...register('userName')}
          />
          <PasswordInput
            placeholder="رمز عبور"
            label="رمز عبور"
            error={formState.errors.password?.message}
            {...register('password')}
          />
        </Box>
        <Button type="submit">ورود</Button>
      </Stack>
    </form>
  );
};
