import { useCreateProjectMutation } from '@camp/data-layer';
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

export const CreateProjectForm: React.FC<Props> = ({ dismiss }) => {
  const [createProject, mutationResult] = useCreateProjectMutation();

  const onSubmit = React.useCallback(
    ({ name, description }: FormSchema) => {
      createProject({
        variables: { name, description },
      })
        .then((result: any) => {
          dismiss();
          console.log(result);
        })
        .catch(err => console.log(err));
    },
    [createProject, dismiss],
  );

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
            data-autoFocus
            withAsterisk
            placeholder="برای مثال: خرید مدرسه"
            label="نام پروژه"
            size="sm"
            error={formState.errors.name?.message}
            {...register('name')}
          />
          <Textarea
            placeholder="توضیحی درمورد پروژه"
            label="توضیحات"
            error={formState.errors.description?.message}
            {...register('description')}
          />
        </Stack>
        <Group spacing={20}>
          <Button
            type="submit"
            size="sm"
            loading={mutationResult.loading}
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
