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
import { Button, createStyles, Group, Stack, TextInput } from '@mantine/core';
import { useForm } from 'react-hook-form';

import { addHouseholderVisitFormIds as ids } from './AddHouseholderVisitForm.ids';

interface FormSchema {
  name: string;
  date?: Date;
  description: string;
  documents: Document[];
}

interface Props {
  dismiss: () => void;
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

export const AddHouseholderVisitForm = ({ dismiss }: Props) => {
  const t = messages.householder.visits.form;
  const { handleSubmit, register, formState, control, getValues } =
    useForm<FormSchema>({
      resolver,
      mode: 'onChange',
    });

  const onSubmit = handleSubmit(data => {
    debug.log(DebugScopes.All, data);
  });

  const { classes } = useStyle();
  return (
    <form onSubmit={onSubmit} {...tid(ids.form)}>
      <Stack spacing={40}>
        <TextInput
          data-autoFocus
          withAsterisk
          placeholder={t.nameInput.placeholder}
          label={t.nameInput.label}
          size="sm"
          error={formState.errors.name?.message}
          wrapperProps={tid(ids.nameInput)}
          {...register('name')}
        />
        <ControlledDateInput
          name="date"
          control={control}
          className={classes.label}
          wrapperProps={tid(ids.dateInput)}
          label={t.dateInput.label}
          placeholder={t.dateInput.placeholder}
          error={formState.errors.date?.message}
        />
        <TextInput
          wrapperProps={tid(ids.descriptionInput)}
          required
          {...register('description')}
          label={t.descriptionInput.label}
          placeholder={t.descriptionInput.placeholder}
          error={formState.errors.description?.message}
        />
        <ControlledFileUpload
          control={control}
          name="documents"
          defaultValue={[]}
          required
          label={t.documentsInput.label}
          helper={t.documentsInput.maxSize}
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
            onClick={dismiss}
          >
            {messages.actions.dismiss}
          </Button>
          <Button
            type="submit"
            size="sm"
            disabled={!formState.isValid}
            {...tid(ids.submitBtn)}
          >
            {t.submitBtn}
          </Button>
        </Group>
      </Stack>
    </form>
  );
};
