// import { useCreateProjectDocumentMutation } from '@camp/data-layer';
import { debug, DebugScopes } from '@camp/debug';
import {
  ControlledDateInput,
  FileUpload,
  showNotification,
} from '@camp/design';
import {
  createResolver,
  documentFileValidator,
  documentSchema,
} from '@camp/domain';
import { messages } from '@camp/messages';
import { tid } from '@camp/test';
import {
  Button,
  createStyles,
  Group,
  Input,
  Stack,
  TextInput,
} from '@mantine/core';
import { Controller, useForm } from 'react-hook-form';
import type { SafeParseError, SafeParseSuccess } from 'zod';

import { createProjectDocumentFormIds as ids } from './CreateProjectDocumentForm.ids';

interface FormSchema {
  date: Date;
  description: string;
  documents: File[];
}

interface Props {
  dismiss: () => void;
}

const resolver = createResolver<FormSchema>({
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

// FIXME replace with actual upload
const uploadDocument = () => {
  return new Promise<void>(res => {
    setTimeout(() => {
      res();
    }, 1000);
  });
};

const unUploadDocument = () => {
  return uploadDocument();
};

export const CreateProjectDocumentForm = ({ dismiss }: Props) => {
  const t = messages.projectDetail.addDocument.form;
  const { handleSubmit, register, formState, control } = useForm<FormSchema>({
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
        <Controller
          control={control}
          name="documents"
          defaultValue={[]}
          render={({ field }) => {
            return (
              <FileUpload
                required
                label={t.documentsInput.label}
                helper={t.documentsInput.maxSize}
                onDelete={i => {
                  // FIXME we should get the uploaded file here and set it
                  field.onChange({
                    target: {
                      value: field.value.filter((_, index) => i !== index),
                      name: field.name,
                    },
                  });
                }}
                upload={uploadDocument}
                unUpload={unUploadDocument}
                onAdd={file => {
                  // FIXME we should get the uploaded file here and set it
                  field.onChange({
                    target: {
                      value: [...field.value, file],
                      name: field.name,
                    },
                  });
                }}
                validate={(files): File[] => {
                  const res = files.map(f =>
                    documentFileValidator.safeParse(f),
                  );
                  const firstError = res.find(
                    r => !r.success,
                  ) as SafeParseError<File> | null;

                  if (firstError != null)
                    showNotification({
                      message: firstError.error.issues[0]!.message,
                      type: 'failure',
                    });
                  return res
                    .filter((r): r is SafeParseSuccess<File> => r.success)
                    .map(r => r.data);
                }}
              />
              // </Input.Wrapper>
            );
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
