// import { useCreateProjectDocumentMutation } from '@camp/data-layer';
import { debug, DebugScopes } from '@camp/debug';
import { ControlledDateInput } from '@camp/design';
import { createResolver, documentSchema } from '@camp/domain';
import { messages } from '@camp/messages';
import { tid } from '@camp/test';
import { Button, createStyles, Group, Stack, TextInput } from '@mantine/core';
import { useForm } from 'react-hook-form';

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

export const useDateLabelStyles = createStyles(theme => ({
  label: {
    label: {
      color: theme.colors.fg[6],
    },
  },
}));

export const CreateProjectDocumentForm = ({ dismiss }: Props) => {
  const t = messages.projectDetail.addDocument.form;
  const { handleSubmit, register, formState, control } = useForm<FormSchema>({
    resolver,
    mode: 'onChange',
  });

  const onSubmit = handleSubmit(data => {
    debug.log(DebugScopes.All, data);
  });

  const { classes } = useDateLabelStyles();

  return (
    <form onSubmit={onSubmit} {...tid(ids.form)}>
      <Stack spacing={40}>
        <ControlledDateInput
          name="date"
          control={control}
          className={classes.label}
          wrapperProps={tid(ids.dateInput)}
          label={`${t.dateInput.label}:`}
          placeholder={t.dateInput.placeholder}
          error={formState.errors.date?.message}
        />
        <TextInput
          wrapperProps={tid(ids.descriptionInput)}
          required
          {...register('description')}
          label={`${t.descriptionInput.label}:`}
          placeholder={t.descriptionInput.placeholder}
          error={formState.errors.description?.message}
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
