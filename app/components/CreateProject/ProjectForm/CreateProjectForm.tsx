import { useCreateProjectMutation } from '@camp/data-layer';
import { showNotification } from '@camp/design';
import { messages } from '@camp/messages';
import { createTestAttr } from '@camp/test';
import { isNull } from '@fullstacksjs/toolbox';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Group, Stack, Textarea, TextInput } from '@mantine/core';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { createProjectFormIds as ids } from './CreateProjectForm.ids';

interface Props {
  dismiss: () => void;
}

type FormSchema = z.infer<typeof FormSchema>;

const FormSchema = z
  .object({
    description: z.string().trim(),
    name: z
      .string({ required_error: messages.projects.validation.required })
      .trim()
      .min(3, messages.projects.validation.minLength),
  })
  .required();

export const CreateProjectForm = ({ dismiss }: Props) => {
  const [createProject, { loading }] = useCreateProjectMutation();

  const {
    handleSubmit,
    register,
    formState: { isValid, errors },
  } = useForm<FormSchema>({
    resolver: zodResolver(FormSchema),
    mode: 'onChange',
  });

  const onSubmit = handleSubmit(async ({ name, description }) => {
    try {
      const { data } = await createProject({
        variables: { input: { name, description } },
      });

      if (isNull(data)) throw new Error('data is null');
      showNotification({
        title: messages.projects.create,
        message: messages.projects.notification.successfulCreate(name),
        type: 'success',
        ...createTestAttr(ids.notification.success),
      });
      dismiss();
    } catch (err) {
      console.error('error occurred', err);

      showNotification({
        title: messages.projects.create,
        message: messages.projects.notification.failedCreate(name),
        type: 'failure',
        ...createTestAttr(ids.notification.failure),
      });
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
            {...createTestAttr(ids.nameInput)}
          />
          <Textarea
            placeholder={
              messages.projects.createForm.descriptionInput.placeholder
            }
            label={messages.projects.createForm.descriptionInput.label}
            error={errors.description?.message}
            {...register('description')}
            {...createTestAttr(ids.descriptionInput)}
          />
        </Stack>
        <Group spacing={20}>
          <Button
            type="submit"
            size="sm"
            loading={loading}
            disabled={!isValid}
            {...createTestAttr(ids.submitBtn)}
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
