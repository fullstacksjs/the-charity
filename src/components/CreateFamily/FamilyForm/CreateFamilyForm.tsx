/* eslint-disable @typescript-eslint/no-misused-promises */
import { messages } from '@camp/messages';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Group, Stack, TextInput } from '@mantine/core';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

type FormSchema = yup.InferType<typeof FormSchema>;

interface Props {
  dismiss: () => void;
}

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
  const onSubmit = useCallback(({ name }: FormSchema) => {
    console.log('name:', name);
  }, []);

  const { handleSubmit, register, formState } = useForm<FormSchema>({
    resolver: yupResolver(FormSchema),
    mode: 'onChange',
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={40}>
        <TextInput
          data-test="family-name"
          data-autoFocus
          withAsterisk
          placeholder={messages.families.createForm.nameInput.placeholder}
          label={messages.families.createForm.nameInput.label}
          description={messages.families.createForm.nameInput.description}
          size="sm"
          error={formState.errors.name?.message}
          {...register('name')}
        />
        <Group spacing={20}>
          <Button
            data-test="submit-button"
            type="submit"
            size="sm"
            disabled={Boolean(formState.errors.name)}
          >
            {messages.families.createForm.submitBtn.text}
          </Button>
          <Button size="sm" color="gray" onClick={dismiss}>
            {messages.families.createForm.dismissBtn.text}
          </Button>
        </Group>
      </Stack>
    </form>
  );
};
