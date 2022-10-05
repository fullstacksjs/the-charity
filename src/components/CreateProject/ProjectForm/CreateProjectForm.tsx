import { messages } from '@camp/messages';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Group, Stack, Textarea, TextInput } from '@mantine/core';
import { showNotification } from '@mantine/notifications';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { useCreateProjectMutation } from '../../data-layer';

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
      .required(messages.projects.validation.required)
      .min(3, messages.projects.validation.minLength),
  })
  .required();

const notifySuccessCreation = (name: string) =>
  showNotification({
    color: 'successDefault',
    title: 'ایجاد پروژه جدید',
    message: `پروژه با نام ${name} با موفقیت ساخته شد`,
  });

const notifyFailedCreation = (name: string) =>
  showNotification({
    color: 'errorDefault',
    title: 'ایجاد پروژه جدید',
    message: `مشکلی در مرحله ایجاد پروژه ای بانام ${name} به وجود آمده است. لطفا دوباره تلاش کنید`,
  });

export const CreateProjectForm = ({ dismiss }: Props) => {
  const [createProject] = useCreateProjectMutation();
  const onSubmit = React.useCallback(({ name, description }: FormSchema) => {
    createProject({ variables: { name, description } })
      .then(({ data }) => {
        console.log(data);
        notifySuccessCreation(name);
      })
      .catch(err => {
        console.error(err);
        notifyFailedCreation(name);
      });
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
            placeholder={messages.projects.createForm.nameInput.placeholder}
            label={messages.projects.createForm.nameInput.label}
            size="sm"
            error={formState.errors.name?.message}
            {...register('name')}
          />
          <Textarea
            data-test="project-description"
            placeholder={
              messages.projects.createForm.descriptionInput.placeholder
            }
            label={messages.projects.createForm.descriptionInput.label}
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
            {messages.projects.createForm.submitBtn.text}
          </Button>
          <Button size="sm" color="gray" onClick={dismiss}>
            {messages.actions.dismiss}
          </Button>
        </Group>
      </Stack>
    </form>
  );
};
