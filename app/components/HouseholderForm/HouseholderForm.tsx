import { useUpsertHouseholderMutation } from '@camp/data-layer';
import {
  ControlledDateInput,
  ControlledSelect,
  showNotification,
  TextInput,
} from '@camp/design';
import type {
  City,
  Gender,
  Householder,
  Nationality,
  Religion,
} from '@camp/domain';
import {
  cities,
  createResolver,
  genders,
  householderSchema,
  nationalities,
  religions,
} from '@camp/domain';
import { CheckIcon } from '@camp/icons';
import { messages } from '@camp/messages';
import { createTestAttr } from '@camp/test';
import { isNull } from '@fullstacksjs/toolbox';
import {
  Button,
  createStyles,
  Group,
  SimpleGrid,
  Stack,
  Title,
} from '@mantine/core';
import { useForm } from 'react-hook-form';

import { householderFormIds as ids } from './HouseholderForm.ids';

interface Props {
  initialHouseholder?: Householder;
  familyId: string;
}

interface FormSchema {
  name: string;
  surname: string | undefined;
  fatherName: string | undefined;
  nationalId: string | undefined;
  dob: Date | null;
  gender: Gender | undefined;
  nationality: Nationality | undefined;
  religion: Religion | undefined;
  cityOfBirth: City | undefined;
}

const resolver = createResolver<FormSchema>({
  name: householderSchema.name(),
  surname: householderSchema.surname(),
  fatherName: householderSchema.fatherName(),
  nationalId: householderSchema.nationalId(),
  gender: householderSchema.gender(),
  nationality: householderSchema.nationality(),
  religion: householderSchema.religion(),
  cityOfBirth: householderSchema.cityOfBirth(),
  dob: householderSchema.dob(),
});

const useStyles = createStyles(theme => ({
  input: {
    label: {
      color: theme.colors.fgSubtle[6],
    },
  },
}));

// eslint-disable-next-line max-lines-per-function
export const HouseholderForm = ({ initialHouseholder, familyId }: Props) => {
  const t = messages.householder.form;
  const { classes } = useStyles();

  const {
    handleSubmit,
    reset,
    register,
    formState: { errors, isValid, isDirty },
    control,
  } = useForm<FormSchema>({
    resolver,
    defaultValues: initialHouseholder,
    mode: 'onChange',
  });

  const isReadOnly = initialHouseholder?.status === 'completed';

  const [upsertHouseholder] = useUpsertHouseholderMutation();

  const onSubmit = handleSubmit(async formData => {
    try {
      const { data } = await upsertHouseholder({
        variables: { ...formData, familyId },
      });

      if (!isNull(data)) reset(data.householder);
      showNotification({
        title: t.title,
        message: t.notification.successfulUpdate(data?.householder.name ?? ''),
        type: 'success',
        ...createTestAttr(ids.notification.success),
      });
    } catch {
      showNotification({
        title: t.title,
        message: t.notification.failedUpdate(formData.name),
        type: 'failure',
        ...createTestAttr(ids.notification.failure),
      });
    }
  });

  const handleReset = () => {
    reset();
  };

  return (
    <form onSubmit={onSubmit} {...createTestAttr(ids.form)}>
      <Stack spacing={25}>
        <Group position="apart" mih="100%">
          <Title order={4} color="fgMuted" weight="bold">
            {t.title}
          </Title>
          <Group spacing={20}>
            <Button
              {...createTestAttr(ids.undoBtn)}
              size="sm"
              variant="outline"
              color="red"
              disabled={!isDirty}
              onClick={handleReset}
            >
              {t.undoBtn}
            </Button>
            <Button
              {...createTestAttr(ids.submitBtn)}
              type="submit"
              size="sm"
              leftIcon={<CheckIcon size={16} />}
              disabled={!isValid || !isDirty}
            >
              {t.submitBtn}
            </Button>
          </Group>
        </Group>

        <SimpleGrid cols={3} spacing="lg" verticalSpacing={20}>
          <TextInput
            readOnly={isReadOnly}
            className={classes.input}
            wrapperProps={createTestAttr(ids.firstNameInput)}
            {...register('name')}
            label={`${t.nameInput.label}:`}
            placeholder={t.nameInput.placeholder}
            error={errors.name?.message}
          />
          <TextInput
            readOnly={isReadOnly}
            className={classes.input}
            wrapperProps={createTestAttr(ids.lastNameInput)}
            {...register('surname')}
            label={`${t.lastNameInput.label}:`}
            error={errors.surname?.message}
            placeholder={t.lastNameInput.placeholder}
          />
          <TextInput
            readOnly={isReadOnly}
            className={classes.input}
            wrapperProps={createTestAttr(ids.fatherNameInput)}
            {...register('fatherName')}
            label={`${t.fatherNameInput.label}:`}
            placeholder={t.fatherNameInput.placeholder}
            error={errors.fatherName?.message}
          />
          <ControlledSelect
            readOnly={isReadOnly}
            name="nationality"
            control={control}
            clearable
            wrapperProps={createTestAttr(ids.nationalityInput)}
            data={nationalities.map(v => ({
              value: v,
              label: messages.nationalities[v],
            }))}
            placeholder={t.selectInputs.placeholder}
            label={`${t.nationalityInput.label}:`}
          />
          <TextInput
            readOnly={isReadOnly}
            className={classes.input}
            wrapperProps={createTestAttr(ids.nationalIdInput)}
            error={errors.nationalId?.message}
            {...register('nationalId')}
            placeholder={t.nationalIdInput.placeholder}
            label={`${t.nationalIdInput.label}:`}
          />

          <ControlledSelect
            readOnly={isReadOnly}
            name="gender"
            control={control}
            clearable
            wrapperProps={createTestAttr(ids.genderInput)}
            data={genders.map(v => ({
              value: v,
              label: messages.genders[v],
            }))}
            label={`${t.genderInput.label}:`}
            placeholder={t.selectInputs.placeholder}
          />

          <ControlledSelect
            readOnly={isReadOnly}
            name="religion"
            control={control}
            clearable
            wrapperProps={createTestAttr(ids.religionInput)}
            data={religions.map(v => ({
              value: v,
              label: messages.religions[v],
            }))}
            placeholder={t.selectInputs.placeholder}
            label={`${t.religionInput.label}:`}
          />

          <ControlledSelect
            readOnly={isReadOnly}
            name="cityOfBirth"
            control={control}
            clearable
            wrapperProps={createTestAttr(ids.cityOfBirthInput)}
            data={cities.map(v => ({
              value: v,
              label: messages.cities[v],
            }))}
            placeholder={t.selectInputs.placeholder}
            label={`${t.cityOfBirthInput.label}:`}
          />

          <ControlledDateInput
            name="dob"
            control={control}
            clearable
            readOnly={isReadOnly}
            wrapperProps={createTestAttr(ids.dobInput)}
            className={classes.input}
            label={`${t.dobInput.label}:`}
            placeholder={t.selectInputs.placeholder}
          />
        </SimpleGrid>
      </Stack>
    </form>
  );
};
