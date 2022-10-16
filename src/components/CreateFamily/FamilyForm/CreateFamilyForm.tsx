import { useCreateDraftFamilyMutation } from '@camp/data-layer';
import { messages } from '@camp/messages';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Group, Stack, TextInput } from '@mantine/core';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { createTestAttr } from '../../../utils/createTestAttr';
import { showNotification } from '../../Notification';

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
  const [createDraftFamily, mutationResult] = useCreateDraftFamilyMutation();

  const { setFocus, handleSubmit, register, formState } = useForm<FormSchema>({
    resolver: yupResolver(FormSchema),
    mode: 'onChange',
  });

  const { nameInput, notification, submitBtn } = messages.families.createForm;

  const onSubmit = handleSubmit(({ name }) => {
    createDraftFamily({ variables: { name } })
      .then(({ data }) => {
        const result = data?.createFamily;

        if (result?.__typename === 'DraftFamily') {
          showNotification({
            title: messages.families.create,
            message: notification.success(result.name ?? ''),
            type: 'success',
          });
        }

        dismiss();
      })
      .catch(() =>
        showNotification({
          title: messages.families.create,
          message: notification.failure(name),
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
          placeholder={nameInput.placeholder}
          label={nameInput.label}
          description={nameInput.description}
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
