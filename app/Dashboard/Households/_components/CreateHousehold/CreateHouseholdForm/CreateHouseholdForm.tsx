import { useCreateHouseholdMutation } from '@camp/data-layer';
import { showNotification } from '@camp/design';
import { createResolver, householdSchema } from '@camp/domain';
import { messages } from '@camp/messages';
import type { AppRoute } from '@camp/router';
import { useNavigate } from '@camp/router';
import { tid } from '@camp/test';
import { isNull } from '@fullstacksjs/toolbox';
import { Button, Group, Stack, TextInput } from '@mantine/core';
import { useForm } from 'react-hook-form';

import { createHouseholdFormIds as ids } from './CreateHouseholdForm.ids';

interface FormSchema {
  name: string;
}

interface Props {
  dismiss: () => void;
}

const resolver = createResolver<FormSchema>({
  name: householdSchema.name(),
});

export const CreateHouseholdForm = ({ dismiss }: Props) => {
  const [createDraftHousehold, mutationResult] = useCreateHouseholdMutation();
  const navigate = useNavigate();

  const { handleSubmit, register, formState } = useForm<FormSchema>({
    resolver,
    mode: 'onChange',
  });

  const { nameInput, notification, submitBtn } = messages.households.createForm;

  const onSubmit = handleSubmit(({ name }) => {
    createDraftHousehold({ variables: { name } })
      .then(({ data }) => {
        const household = data.household;
        if (isNull(household))
          throw Error('Assert: household should not be null');

        showNotification({
          title: messages.households.create,
          message: notification.success(household.name),
          type: 'success',
          ...tid(ids.notification.success),
        });

        dismiss();
        navigate({ to: `/dashboard/households/${household.id}` as AppRoute });
      })
      .catch(() =>
        showNotification({
          title: messages.households.create,
          message: notification.failure(),
          type: 'failure',
          ...tid(ids.notification.failure),
        }),
      );
  });

  return (
    <form onSubmit={onSubmit} {...tid(ids.form)}>
      <Stack spacing={40}>
        <TextInput
          data-autoFocus
          withAsterisk
          placeholder={nameInput.placeholder}
          label={nameInput.label}
          description={nameInput.description}
          size="sm"
          error={formState.errors.name?.message}
          wrapperProps={tid(ids.nameInput)}
          {...register('name')}
        />
        <Group spacing={10} position="right">
          <Button
            size="sm"
            variant="default"
            color="secondary"
            onClick={dismiss}
          >
            {messages.actions.dismiss}
          </Button>
          <Button
            type="submit"
            size="sm"
            disabled={!formState.isValid}
            loading={mutationResult.loading}
            {...tid(ids.submitBtn)}
          >
            {submitBtn.text}
          </Button>
        </Group>
      </Stack>
    </form>
  );
};
