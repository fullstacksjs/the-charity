import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Group, Stack, Textarea, TextInput } from '@mantine/core';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

interface Props {
  dismiss: () => void;
}

type FormSchema = yup.InferType<typeof FormSchema>;

const FormSchema = yup
  .object({
    description: yup.string().trim(),
    name: yup
      .string()
      .trim()
      .required('این فیلد ضروری است')
      .min(3, 'نام پروژه باید حداقل ۳ حرف باشد'),
  })
  .required();

export const CreateProjectForm = ({ dismiss }: Props) => {
  const onSubmit = React.useCallback(({ name, description }: FormSchema) => {
    console.log('name:', name, 'description:', description);
  }, []);

  const { handleSubmit, register, formState } = useForm<FormSchema>({
    resolver: yupResolver(FormSchema),
    mode: 'onChange',
  });

  return (
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={40}>
        <Stack spacing={10}>
          <TextInput
            data-test="project-name"
            data-autoFocus
            withAsterisk
            placeholder="برای مثال: خرید مدرسه"
            label="نام پروژه"
            size="sm"
            error={formState.errors.name?.message}
            {...register('name')}
          />
          <Textarea
            data-test="project-description"
            placeholder="توضیحی درمورد پروژه"
            label="توضیحات"
            error={formState.errors.description?.message}
            {...register('description')}
          />
        </Stack>
        <Group spacing={20}>
          <Button
            data-test="submit-button"
            type="submit"
            size="sm"
            disabled={Boolean(formState.errors.name)}
          >
            ایجاد پروژه جدید
          </Button>
          <Button size="sm" color="gray" onClick={dismiss}>
            انصراف
          </Button>
        </Group>
      </Stack>
    </form>
  );
};
