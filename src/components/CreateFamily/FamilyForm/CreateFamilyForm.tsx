import { useCreateDraftFamilyMutation } from '@camp/data-layer';
import { messages } from '@camp/messages';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Group, Stack, TextInput } from '@mantine/core';
import { showNotification } from '@mantine/notifications';
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

const showSuccessNotification = ({ name }: FormSchema) =>
  showNotification({
    title: 'ایجاد خانواده جدید',
    message: `خانواده ای با نام “${name}” با موفقیت ایجاد شده است.`,
    color: 'green',
  });

const showErrorNotification = ({ name }: FormSchema) =>
  showNotification({
    title: 'ایجاد خانواده جدید',
    message: `مشکلی در مرحله ایجاد خانواده ای با نام “${name}” بوجود آمده است. لطفا دوباره تلاش کنید.`,
    color: 'red',
  });

export const CreateFamilyForm = ({ dismiss }: Props) => {
  const [createDraftFamily, mutationResult] = useCreateDraftFamilyMutation();

  const { setFocus, handleSubmit, register, formState } = useForm<FormSchema>({
    resolver: yupResolver(FormSchema),
    mode: 'onChange',
  });

  const onSubmit = handleSubmit(({ name }) => {
    createDraftFamily({ variables: { name } })
      .then(res => {
        const respondedName = res.data?.createDraftFamily.name ?? '';
        showSuccessNotification({ name: respondedName });
        dismiss();
      })
      .catch(() => showErrorNotification({ name }));
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
