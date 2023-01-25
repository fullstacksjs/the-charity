import type { FamilyListQuery } from '@camp/data-layer';
import { FamilyListDocument, useCreateFamilyMutation } from '@camp/data-layer';
import { showNotification } from '@camp/design';
import { messages } from '@camp/messages';
import { createTestAttr } from '@camp/test';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Group, Stack, TextInput } from '@mantine/core';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { createFamilyFormIds as ids } from './CreateFamilyForm.ids';

type FormSchema = z.infer<typeof FormSchema>;

interface Props {
  dismiss: () => void;
}

const FormSchema = z
  .object({
    name: z
      .string({ required_error: messages.families.validation.required })
      .trim()
      .min(1, messages.families.validation.required)
      .min(3, messages.families.validation.minLength),
  })
  .required();

export const CreateFamilyForm = ({ dismiss }: Props) => {
  const [createDraftFamily, mutationResult] = useCreateFamilyMutation({
    update(cache, { data }) {
      const newFamilies = data?.insert_family_one;
      const prevFamiliesQuery = cache.readQuery<FamilyListQuery>({
        query: FamilyListDocument,
      });

      if (prevFamiliesQuery && newFamilies) {
        cache.writeQuery({
          query: FamilyListDocument,
          data: {
            family: [...prevFamiliesQuery.family, newFamilies],
          },
        });
      }
    },
  });

  const { handleSubmit, register, formState } = useForm<FormSchema>({
    resolver: zodResolver(FormSchema),
    mode: 'onChange',
  });

  const { nameInput, notification, submitBtn } = messages.families.createForm;

  const onSubmit = handleSubmit(({ name }) => {
    createDraftFamily({ variables: { name } })
      .then(({ data }) => {
        const result = data?.insert_family_one;

        showNotification({
          title: messages.families.create,
          message: notification.success(result?.name ?? ''),
          type: 'success',
          ...createTestAttr(ids.notification.success),
        });

        dismiss();
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
          {...register('name')}
          {...createTestAttr(ids.nameInput)}
        />
        <Group spacing={20}>
          <Button
            type="submit"
            size="sm"
            disabled={Boolean(formState.errors.name)}
            loading={mutationResult.loading}
            {...createTestAttr(ids.submitBtn)}
          >
            {submitBtn.text}
          </Button>
          <Button size="sm" color="gray" onClick={dismiss}>
            {messages.actions.dismiss}
          </Button>
        </Group>
      </Stack>
    </form>
  );
};
