import { useCreateProjectMutation } from '@camp/data-layer';
import { messages } from '@camp/messages';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Group, Stack, Textarea, TextInput } from '@mantine/core';
import { showNotification } from '@mantine/notifications';
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
      .required(messages.projects.validation.required)
      .min(3, messages.projects.validation.minLength),
  })
  .required();

// NOTE: the spread is to avoid the type error with notification props not accepting data attribute
const notifySuccessCreation = (name: string) =>
  showNotification({
    ...{ 'data-test': 'notification-success' },
    color: 'successDefault',
    title: messages.projects.create,
    message: messages.projects.notification.successfulCreate(name),
  });

const notifyFailedCreation = (name: string) =>
  showNotification({
    ...{ 'data-test': 'notification-fail' },
    color: 'errorDefault',
    title: messages.projects.create,
    message: messages.projects.notification.failedCreate(name),
  });

export const CreateProjectForm = ({ dismiss }: Props) => {
  const [createProject, { loading }] = useCreateProjectMutation();
  notifySuccessCreation('hey');

  const onSubmit = React.useCallback(
    ({ name, description }: FormSchema) => {
      createProject({ variables: { input: { name, description } } })
        .then(({ data }) => {
          if (data == null) throw new Error('data is null');
          notifySuccessCreation(data.createProject.name);
        })
        .catch(err => {
          console.error('error occurred', err);
          notifyFailedCreation(name);
        });
    },
    [createProject],
  );

  const { handleSubmit, register, formState } = useForm<FormSchema>({
    resolver: yupResolver(FormSchema),
    mode: 'onChange',
  });

  return (
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
            loading={loading}
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
