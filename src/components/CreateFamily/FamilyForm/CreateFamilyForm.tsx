/* eslint-disable @typescript-eslint/no-misused-promises */
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Group, Stack, TextInput } from '@mantine/core';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

type FormSchema = yup.InferType<typeof FormSchema>;

interface Props {
  dismiss: () => void;
}

const FormSchema = yup
  .object({
    name: yup
      .string()
      .trim()
      .required('این فیلد ضروری است')
      .min(5, 'نام خانو باید حداقل ۵ حرف باشد'),
  })
  .required();

export const CreateFamilyForm = ({ dismiss }: Props) => {
  const onSubmit = useCallback(({ name }: FormSchema) => {
    console.log('name:', name);
  }, []);

  const { handleSubmit, register, formState } = useForm<FormSchema>({
    resolver: yupResolver(FormSchema),
    mode: 'onChange',
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={40}>
        <Stack spacing={10}>
          <TextInput
            data-test="family-name"
            data-autoFocus
            withAsterisk
            placeholder="برای مثال: مرادی"
            label="نام"
            description="نام مناسب برای خانواده می تواند نام خانوادگی سرپرست خانوار باشد"
            size="sm"
            error={formState.errors.name?.message}
            {...register('name')}
          />
        </Stack>
        <Group spacing={20}>
          <Button
            data-test="submit-button"
            type="submit"
            size="sm"
            disabled={Boolean(formState.errors.name)}
          >
            ایجاد خانواده
          </Button>
          <Button size="sm" color="gray" onClick={dismiss}>
            انصراف
          </Button>
        </Group>
      </Stack>
    </form>
  );
};
