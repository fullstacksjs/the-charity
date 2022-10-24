import { useCreateProjectMutation } from '@camp/data-layer';
import { messages } from '@camp/messages';
import { isNull } from '@fullstacksjs/toolbox';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Group, Stack, Textarea, TextInput } from '@mantine/core';
import { showNotification } from '@mantine/notifications';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { createTestAttr } from '../../../utils/createTestAttr';

interface Props {
  dismiss: () => void;
}

export const createProjectFormIDs = {
  form: 'create-project-form',
  nameInput: 'project-name',
  descriptionInput: 'project-description',
  submitBtn: 'submit-button',
  notification: {
    success: 'create-project-success-notification',
    failure: 'create-project-failure-notification',
  },
} as const;

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
    ...createTestAttr(createProjectFormIDs.notification.success),
    color: 'successDefault',
    title: messages.projects.create,
    message: messages.projects.notification.successfulCreate(name),
  });

const notifyFailedCreation = (name: string) =>
  showNotification({
    ...createTestAttr(createProjectFormIDs.notification.success),
    color: 'errorDefault',
    title: messages.projects.create,
    message: messages.projects.notification.failedCreate(name),
  });

export const CreateProjectForm = ({ dismiss }: Props) => {
  const [createProject, { loading }] = useCreateProjectMutation();

  const {
    handleSubmit,
    register,
    formState: { isValid, errors },
  } = useForm<FormSchema>({
    resolver: yupResolver(FormSchema),
    mode: 'onChange',
  });

  const onSubmit = handleSubmit(async ({ name, description }) => {
    try {
      const { data } = await createProject({
        variables: { input: { name, description } },
      });

      if (isNull(data)) throw new Error('data is null');
      notifySuccessCreation(data.createProject.name);
    } catch (err) {
      console.error('error occurred', err);
      notifyFailedCreation(name);
    }
  });

  return (
    <form onSubmit={onSubmit}>
      <Stack spacing={40}>
        <Stack spacing={10}>
          <TextInput
            data-autoFocus
            withAsterisk
            placeholder={messages.projects.createForm.nameInput.placeholder}
            label={messages.projects.createForm.nameInput.label}
            size="sm"
            error={errors.name?.message}
            {...register('name')}
            {...createTestAttr(createProjectFormIDs.nameInput)}
          />
          <Textarea
            placeholder={
              messages.projects.createForm.descriptionInput.placeholder
            }
            label={messages.projects.createForm.descriptionInput.label}
            error={errors.description?.message}
            {...register('description')}
            {...createTestAttr(createProjectFormIDs.descriptionInput)}
          />
        </Stack>
        <Group spacing={20}>
          <Button
            type="submit"
            size="sm"
            loading={loading}
            disabled={!isValid}
            {...createTestAttr(createProjectFormIDs.submitBtn)}
          >
            {messages.projects.createForm.submitBtn.text}
          </Button>
          <Button size="sm" color="gray" disabled={loading} onClick={dismiss}>
            {messages.actions.dismiss}
          </Button>
        </Group>
      </Stack>
    </form>
  );
};
