import { useCreateProjectMutation } from '@camp/data-layer';
import { debug } from '@camp/debug';
import { showNotification } from '@camp/design';
import { createResolver, projectSchema } from '@camp/domain';
import { messages } from '@camp/messages';
import type { AppRoute } from '@camp/router';
import { useNavigate } from '@camp/router';
import { tid } from '@camp/test';
import { isNull } from '@fullstacksjs/toolbox';
import { Button, Group, Stack, Textarea, TextInput } from '@mantine/core';
import { useForm } from 'react-hook-form';

import { createProjectFormIds as ids } from './CreateProjectForm.ids';

interface Props {
  dismiss: () => void;
}

interface FormSchema {
  name: string;
  description: string;
}

const resolver = createResolver<FormSchema>({
  description: projectSchema.description(),
  name: projectSchema.name(),
});

export const CreateProjectForm = ({ dismiss }: Props) => {
  const [createProject, { loading }] = useCreateProjectMutation();
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { isValid, errors },
  } = useForm<FormSchema>({
    resolver,
    mode: 'onChange',
  });

  const onSubmit = handleSubmit(async ({ name, description }) => {
    try {
      const { data } = await createProject({
        variables: { name, description },
      });
      const project = data.project;
      if (isNull(project)) throw Error('Assert: Project is null');

      showNotification({
        title: messages.projects.create,
        message: messages.projects.notification.successfulCreate(name),
        type: 'success',
        ...tid(ids.notification.success),
      });
      dismiss();
      navigate({ to: `/dashboard/projects/${project.id}` as AppRoute });
    } catch (err) {
      debug.error(err);

      showNotification({
        title: messages.projects.create,
        message: messages.projects.notification.failedCreate(name),
        type: 'failure',
        ...tid(ids.notification.failure),
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
            wrapperProps={tid(ids.nameInput)}
          />
          <Textarea
            placeholder={
              messages.projects.createForm.descriptionInput.placeholder
            }
            label={messages.projects.createForm.descriptionInput.label}
            error={errors.description?.message}
            {...register('description')}
            wrapperProps={tid(ids.descriptionInput)}
          />
        </Stack>
        <Group spacing={10} position="right">
          <Button
            variant="default"
            color="secondary"
            size="sm"
            disabled={loading}
            onClick={dismiss}
          >
            {messages.actions.dismiss}
          </Button>
          <Button
            size="sm"
            type="submit"
            loading={loading}
            disabled={!isValid}
            {...tid(ids.submitBtn)}
          >
            {messages.projects.createForm.submitBtn.text}
          </Button>
        </Group>
      </Stack>
    </form>
  );
};
