import { useCreateVisitMutation } from '@camp/data-layer';
import { debug, DebugScopes } from '@camp/debug';
import {
  ControlledDateInput,
  ControlledFileUpload,
  showNotification,
} from '@camp/design';
import type { Document } from '@camp/domain';
import {
  createResolver,
  documentFileValidator,
  documentSchema,
} from '@camp/domain';
import { fileStorageApi } from '@camp/file-storage-api';
import { messages } from '@camp/messages';
import { tid } from '@camp/test';
import { isNull } from '@fullstacksjs/toolbox';
import { Button, createStyles, Group, Stack, TextInput } from '@mantine/core';
import { useForm } from 'react-hook-form';

import { addHouseholderVisitFormIds as ids } from './AddHouseholderVisitForm.ids';

interface FormSchema {
  name: string;
  date: Date;
  description?: string;
  documents: Document[];
}

export interface AddHouseholderVisitFormProps {
  dismiss: () => void;
  householdId: string;
}

const resolver = createResolver<FormSchema>({
  name: documentSchema.name(),
  date: documentSchema.date(),
  description: documentSchema.description(),
  documents: documentSchema.documents(),
});

const useStyle = createStyles(theme => ({
  label: {
    label: {
      color: theme.colors.fg[6],
    },
  },
}));

export const AddHouseholderVisitForm = ({
  dismiss,
  householdId,
}: AddHouseholderVisitFormProps) => {
  const t = messages.householder.visits;
  const tt = t.form;
  const { handleSubmit, register, formState, control } = useForm<FormSchema>({
    resolver,
    mode: 'onChange',
  });
  const [createVisit, { loading }] = useCreateVisitMutation();

  const onSubmit = handleSubmit(async inputs => {
    try {
      const { data } = await createVisit({
        variables: { ...inputs, householdId },
      });
      const visit = data.visit!;
      if (isNull(visit)) throw Error('Assert: Visit is null');

      showNotification({
        title: t.addVisit,
        message: messages.projects.notification.successfulCreate(inputs.name),
        type: 'success',
        ...tid(ids.notification.success),
      });
      dismiss();
    } catch (err) {
      debug.error(err);
      showNotification({
        title: t.addVisit,
        message: messages.projects.notification.failedCreate(inputs.name),
        type: 'failure',
        ...tid(ids.notification.failure),
      });
    }
  });

  const { classes } = useStyle();
  return (
    <form onSubmit={onSubmit} {...tid(ids.form)}>
      <Stack spacing={40}>
        <TextInput
          data-autoFocus
          required
          placeholder={tt.nameInput.placeholder}
          label={tt.nameInput.label}
          size="sm"
          error={formState.errors.name?.message}
          wrapperProps={tid(ids.nameInput)}
          {...register('name')}
        />
        <ControlledDateInput
          name="date"
          required
          control={control}
          className={classes.label}
          wrapperProps={tid(ids.dateInput)}
          label={tt.dateInput.label}
          placeholder={tt.dateInput.placeholder}
          error={formState.errors.date?.message}
        />
        <TextInput
          wrapperProps={tid(ids.descriptionInput)}
          {...register('description')}
          label={tt.descriptionInput.label}
          placeholder={tt.descriptionInput.placeholder}
          error={formState.errors.description?.message}
        />
        <ControlledFileUpload
          control={control}
          name="documents"
          defaultValue={[]}
          required
          label={tt.documentsInput.label}
          helper={tt.documentsInput.maxSize}
          upload={fileStorageApi.upload}
          unUpload={fileStorageApi.unUpload}
          filter={(files): File[] => {
            const res = files.map(f => {
              const parsed = documentFileValidator.safeParse(f);
              return {
                file: f,
                error: !parsed.success ? parsed.error : undefined,
              };
            });

            const firstError = res.find(r => r.error);

            if (firstError != null)
              showNotification({
                message: firstError.error!.issues[0]!.message,
                type: 'failure',
              });
            return res.filter(r => !r.error).map(r => r.file);
          }}
        />

        <Group spacing={10} position="right">
          <Button
            size="sm"
            variant="filled"
            color="secondary"
            loading={loading}
            onClick={dismiss}
          >
            {messages.actions.dismiss}
          </Button>
          <Button
            type="submit"
            size="sm"
            disabled={!formState.isValid}
            loading={loading}
            {...tid(ids.submitBtn)}
          >
            {tt.submitBtn}
          </Button>
        </Group>
      </Stack>
    </form>
  );
};
