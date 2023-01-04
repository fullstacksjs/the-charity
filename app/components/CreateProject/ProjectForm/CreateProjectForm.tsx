import type { ProjectListQuery } from '@camp/data-layer';
import {
  ProjectListDocument,
  useCreateProjectMutation,
} from '@camp/data-layer';
import { showNotification } from '@camp/design';
import { messages } from '@camp/messages';
import { createTestAttr } from '@camp/test';
import { isNull } from '@fullstacksjs/toolbox';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Group, Stack, Textarea, TextInput } from '@mantine/core';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { createProjectFormIds as ids } from './CreateProjectForm.ids';

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

export const CreateProjectForm = ({ dismiss }: Props) => {
  const [createProject, { loading }] = useCreateProjectMutation({
    update(cache, { data }) {
      const newProject = data?.insert_project_one;
      const prevProjects = cache.readQuery<ProjectListQuery>({
        query: ProjectListDocument,
      });

      if (prevProjects && newProject) {
        cache.writeQuery({
          query: ProjectListDocument,
          data: {
            project_aggregate: {
              nodes: [...prevProjects.project_aggregate.nodes, newProject],
            },
          },
        });
      }
    },
  });

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
