import { useCreateDraftFamilyMutation } from '@camp/data-layer';
import { messages } from '@camp/messages';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Group, Stack, TextInput } from '@mantine/core';
import { showNotification } from '@mantine/notifications';
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

  const { handleSubmit, register, formState } = useForm<FormSchema>({
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

  return (
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <form onSubmit={onSubmit}>
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
            loading={mutationResult.loading}
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
