import { useCreateDraftFamilyMutation } from '@camp/data-layer';
import { useNotification } from '@camp/hooks';
import { messages } from '@camp/messages';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Group, Stack, TextInput } from '@mantine/core';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { createTestAttr } from '../../../utils/createTestAttr';

type FormSchema = yup.InferType<typeof FormSchema>;

interface Props {
  dismiss: () => void;
}

export const createFamilyFormIDs = {
  form: 'create-family-form',
  nameInput: 'family-name',
  submitBtn: 'submit-button',
};

const FormSchema = yup
  .object({
    name: yup
      .string()
      .trim()
      .required(messages.families.validation.required)
      .min(3, messages.families.validation.minLength),
  })
  .required();

export const CreateFamilyForm = ({ dismiss }: Props) => {
  const { showNotification } = useNotification();

  const { failure, success } = messages.families.createForm.notification;
  const [createDraftFamily, mutationResult] = useCreateDraftFamilyMutation();

  const { setFocus, handleSubmit, register, formState } = useForm<FormSchema>({
    resolver: yupResolver(FormSchema),
    mode: 'onChange',
  });

  const onSubmit = handleSubmit(({ name }) => {
    createDraftFamily({ variables: { name } })
      .then(({ data }) => {
        const result = data?.createFamily;

        if (result?.__typename === 'DraftFamily') {
          showNotification({
            title: messages.families.create,
            message: success(result.name ?? ''),
            type: 'success',
          });
        }

        dismiss();
      })
      .catch(() =>
        showNotification({
          title: messages.families.create,
          message: failure(name),
          type: 'failure',
        }),
      );
  });

  React.useEffect(() => {
    setFocus('name');
  }, [setFocus]);

  return (
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <form onSubmit={onSubmit} {...createTestAttr(createFamilyFormIDs.form)}>
      <Stack spacing={40}>
        <TextInput
          withAsterisk
          placeholder={messages.families.createForm.nameInput.placeholder}
          label={messages.families.createForm.nameInput.label}
          description={messages.families.createForm.nameInput.description}
          size="sm"
          error={formState.errors.name?.message}
          {...register('name')}
          {...createTestAttr(createFamilyFormIDs.nameInput)}
        />
        <Group spacing={20}>
          <Button
            type="submit"
            size="sm"
            disabled={Boolean(formState.errors.name)}
            loading={mutationResult.loading}
            {...createTestAttr(createFamilyFormIDs.submitBtn)}
          >
            {messages.families.createForm.submitBtn.text}
          </Button>
          <Button size="sm" color="gray" onClick={dismiss}>
            {messages.actions.dismiss}
          </Button>
        </Group>
      </Stack>
    </form>
  );
};
