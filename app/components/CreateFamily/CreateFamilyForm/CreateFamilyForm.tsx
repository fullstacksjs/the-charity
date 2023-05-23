import { useCreateFamilyMutation } from '@camp/data-layer';
import { showNotification } from '@camp/design';
import { createResolver, familySchema } from '@camp/domain';
import { messages } from '@camp/messages';
import type { AppRoute } from '@camp/router';
import { useNavigate } from '@camp/router';
import { createTestAttr } from '@camp/test';
import { Button, Group, Stack, TextInput } from '@mantine/core';
import { useForm } from 'react-hook-form';

import { createFamilyFormIds as ids } from './CreateFamilyForm.ids';

interface FormSchema {
  name: string;
}

interface Props {
  dismiss: () => void;
}

const resolver = createResolver<FormSchema>({
  name: familySchema.name(),
});

export const CreateFamilyForm = ({ dismiss }: Props) => {
  const [createDraftFamily, mutationResult] = useCreateFamilyMutation();
  const navigate = useNavigate();

  const { handleSubmit, register, formState } = useForm<FormSchema>({
    resolver,
    mode: 'onChange',
  });

  const { nameInput, notification, submitBtn } = messages.families.createForm;

  const onSubmit = handleSubmit(({ name }) => {
    createDraftFamily({ variables: { name } })
      .then(({ data }) => {
        const result = data?.family;
        showNotification({
          title: messages.families.create,
          message: notification.success(result?.name ?? ''),
          type: 'success',
          ...createTestAttr(ids.notification.success),
        });

        dismiss();
        navigate({ to: `/dashboard/families/${result.id}` as AppRoute });
      })
      .catch(() =>
        showNotification({
          title: messages.families.create,
          message: notification.failure(name),
          type: 'failure',
          ...createTestAttr(ids.notification.failure),
        }),
      );
  });

  return (
    <form onSubmit={onSubmit} {...createTestAttr(ids.form)}>
      <Stack spacing={40}>
        <TextInput
          data-autoFocus
          withAsterisk
          placeholder={nameInput.placeholder}
          label={nameInput.label}
          description={nameInput.description}
          size="sm"
          error={formState.errors.name?.message}
          wrapperProps={createTestAttr(ids.nameInput)}
          {...register('name')}
        />
        <Group spacing={20} position="right">
          <Button size="sm" color="gray" onClick={dismiss}>
            {messages.actions.dismiss}
          </Button>
          <Button
            type="submit"
            size="sm"
            disabled={Boolean(formState.errors.name)}
            loading={mutationResult.loading}
            {...createTestAttr(ids.submitBtn)}
          >
            {submitBtn.text}
          </Button>
        </Group>
      </Stack>
    </form>
  );
};
