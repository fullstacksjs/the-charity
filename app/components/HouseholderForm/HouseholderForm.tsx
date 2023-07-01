import { useUpsertHouseholderMutation } from '@camp/data-layer';
import {
  ControlledDateInput,
  ControlledSelect,
  DashboardTitle,
  showNotification,
  TextInput,
} from '@camp/design';
import type {
  CityEnum,
  GenderEnum,
  HouseholderIdentity,
  NationalityEnum,
  ReligionEnum,
} from '@camp/domain';
import {
  cities,
  createResolver,
  genders,
  householderSchema,
  nationalities,
  religions,
} from '@camp/domain';
import { CheckIcon, EditIcon } from '@camp/icons';
import { messages } from '@camp/messages';
import { createTestAttr } from '@camp/test';
import { isNull } from '@fullstacksjs/toolbox';
import { Button, createStyles, Group, SimpleGrid, Stack } from '@mantine/core';
import { useBoolean } from 'ahooks';
import { useForm } from 'react-hook-form';

import { UndoButton } from '../UndoButton';
import { householderFormIds as ids } from './HouseholderForm.ids';

interface Props {
  initialHouseholder?: HouseholderIdentity;
  householdId: string;
  householdName: string;
}

interface FormSchema {
  name: string;
  surname: string | undefined;
  fatherName: string | undefined;
  nationalId: string | undefined;
  dob: Date | null;
  gender: GenderEnum | undefined;
  nationality: NationalityEnum | undefined;
  religion: ReligionEnum | undefined;
  cityOfBirth: CityEnum | undefined;
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
export const HouseholderForm = ({
  initialHouseholder,
  householdId,
  householdName,
}: Props) => {
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

  const isCompleted = initialHouseholder?.isCompleted;

  const [isEditing, { set: setIsEditing }] = useBoolean(!isCompleted);

  const isReadOnly = !isEditing;

  const [upsertHouseholder] = useUpsertHouseholderMutation();

  const onSubmit = handleSubmit(async formData => {
    try {
      const { data } = await upsertHouseholder({
        variables: { ...formData, householdId },
      });

      if (!isNull(data)) {
        reset({ ...data.householder, dob: data.householder?.dob ?? null });
        setIsEditing(!data.householder?.isCompleted);
      }
      showNotification({
        title: t.title,
        message: t.notification.successfulUpdate(householdName),
        type: 'success',
        ...createTestAttr(ids.notification.success),
      });
    } catch {
      showNotification({
        title: t.title,
        message: t.notification.failedUpdate(householdName),
        type: 'failure',
        ...createTestAttr(ids.notification.failure),
      });
    }
  });

  return (
    <form onSubmit={onSubmit} {...createTestAttr(ids.form)}>
      <Stack spacing={25}>
        <Group position="apart" mih="100%">
          <DashboardTitle>{t.title}</DashboardTitle>
          <Group spacing={20}>
            {isEditing ? (
              <>
                <UndoButton disabled={!isDirty} onClick={() => reset()} />
                <Button
                  {...createTestAttr(ids.submitBtn)}
                  type="submit"
                  size="sm"
                  leftIcon={<CheckIcon size={16} />}
                  disabled={!isValid || !isDirty}
                >
                  {t.submitBtn}
                </Button>
              </>
            ) : (
              <Button
                key={1}
                {...createTestAttr(ids.editBtn)}
                type="button"
                size="sm"
                variant="outline"
                onClick={() => setIsEditing(true)}
                leftIcon={<EditIcon size={16} />}
              >
                {t.editBtn}
              </Button>
            )}
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
