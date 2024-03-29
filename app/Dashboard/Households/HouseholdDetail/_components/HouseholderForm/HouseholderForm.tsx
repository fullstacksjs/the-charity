import { useUpsertHouseholderMutation } from '@camp/data-layer';
import { ControlledDateInput, ControlledSelect, TextInput } from '@camp/design';
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
import { messages } from '@camp/messages';
import { tid } from '@camp/test';
import { isNull } from '@fullstacksjs/toolbox';
import { SimpleGrid, Stack } from '@mantine/core';
import { useBoolean } from 'ahooks';
import { useForm } from 'react-hook-form';

import { householdNotifications } from '../../householdNotifications';
import { householderFormIds as ids } from './HouseholderForm.ids';
import { HouseholderFormActions } from './HouseholderFormActions';

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

const t = messages.householder.form;

// eslint-disable-next-line max-lines-per-function
export const HouseholderForm = ({
  initialHouseholder,
  householdId,
  householdName,
}: Props) => {
  const isCompleted = initialHouseholder?.isCompleted;
  const [isEditMode, { set: setIsEditing }] = useBoolean(!isCompleted);
  const [upsertHouseholder] = useUpsertHouseholderMutation();
  const isReadOnly = !isEditMode;

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

  const onSubmit = handleSubmit(async values => {
    try {
      const { data } = await upsertHouseholder({
        variables: { ...values, householdId },
      });

      if (!isNull(data)) {
        reset({ ...data.householder, dob: data.householder?.dob ?? null });
        setIsEditing(!data.householder?.isCompleted);
      }
      householdNotifications.edit.success(householdName);
    } catch {
      householdNotifications.edit.failure(householdName);
    }
  });

  const handleReset = () => {
    reset();
    setIsEditing(false);
  };

  return (
    <form onSubmit={onSubmit} {...tid(ids.form)}>
      <Stack spacing={25}>
        <HouseholderFormActions
          isEditMode={isEditMode}
          canUndo={isDirty || isCompleted}
          canSubmit={isValid && isDirty}
          onUndo={handleReset}
          onEdit={() => setIsEditing(true)}
        />

        <SimpleGrid cols={3} spacing="lg" verticalSpacing={20}>
          <TextInput
            readOnly={isReadOnly}
            wrapperProps={tid(ids.firstNameInput)}
            required
            {...register('name')}
            label={`${t.nameInput.label}:`}
            placeholder={t.nameInput.placeholder}
            error={errors.name?.message}
          />
          <TextInput
            readOnly={isReadOnly}
            wrapperProps={tid(ids.lastNameInput)}
            {...register('surname')}
            label={`${t.lastNameInput.label}:`}
            error={errors.surname?.message}
            placeholder={t.lastNameInput.placeholder}
          />
          <TextInput
            readOnly={isReadOnly}
            wrapperProps={tid(ids.fatherNameInput)}
            {...register('fatherName')}
            label={`${t.fatherNameInput.label}:`}
            placeholder={t.fatherNameInput.placeholder}
            error={errors.fatherName?.message}
          />
          <ControlledSelect
            readOnly={isReadOnly}
            name="nationality"
            control={control}
            wrapperProps={tid(ids.nationalityInput)}
            data={nationalities.map(v => ({
              value: v,
              label: messages.nationalities[v],
            }))}
            placeholder={t.selectInputs.placeholder}
            label={`${t.nationalityInput.label}:`}
          />
          <TextInput
            readOnly={isReadOnly}
            wrapperProps={tid(ids.nationalIdInput)}
            error={errors.nationalId?.message}
            {...register('nationalId')}
            placeholder={t.nationalIdInput.placeholder}
            label={`${t.nationalIdInput.label}:`}
          />

          <ControlledSelect
            readOnly={isReadOnly}
            name="gender"
            control={control}
            wrapperProps={tid(ids.genderInput)}
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
            wrapperProps={tid(ids.religionInput)}
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
            wrapperProps={tid(ids.cityOfBirthInput)}
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
            readOnly={isReadOnly}
            wrapperProps={tid(ids.dobInput)}
            label={`${t.dobInput.label}:`}
            placeholder={t.selectInputs.placeholder}
          />
        </SimpleGrid>
      </Stack>
    </form>
  );
};
