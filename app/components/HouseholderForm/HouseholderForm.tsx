import { useUpsertHouseholder } from '@camp/data-layer';
import { showNotification } from '@camp/design';
import { type Gender, type Householder } from '@camp/domain';
import {
  cities,
  countries,
  createResolver,
  type Gender,
  genders,
  householderIdentitySchema,
  religions,
} from '@camp/domain';
import { CalendarIcon, CheckIcon } from '@camp/icons';
import { messages } from '@camp/messages';
import { createTestAttr } from '@camp/test';
import {
  Button,
  createStyles,
  Group,
  Select,
  SimpleGrid,
  Stack,
  TextInput,
  Title,
} from '@mantine/core';
import { DateInput } from 'mantine-datepicker-jalali';
import { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';

import { householderFormIds as ids } from './HouseholderForm.ids';

// FIXME fix validation massages to persian

interface Props {
  initialHouseholder?: Householder;
  familyId: string;
}

interface FormSchema {
  name: string;
  surname: string;
  fatherName: string;
  // nationalId: string;
  gender: Gender;
  nationality: string;
  religion: string;
  cityOfBirth: string;
  issuedAt: string;
}

const resolver = createResolver<FormSchema>({
  name: householderIdentitySchema.name(),
  surname: householderIdentitySchema.surname(),
  fatherName: householderIdentitySchema.fatherName(),
  // nationalId: householderIdentitySchema.nationalId(),
  gender: householderIdentitySchema.gender(),
  nationality: householderIdentitySchema.nationality(),
  religion: householderIdentitySchema.religion(),
  cityOfBirth: householderIdentitySchema.cityOfBirth(),
  issuedAt: householderIdentitySchema.issuedAt(),
});

const useStyles = createStyles(theme => ({
  textInput: {
    label: {
      color: theme.colors.fgSubtle[6],
    },
  },
  dateInput: {
    label: {
      color: theme.colors.fgSubtle[6],
    },
  },
}));

// eslint-disable-next-line max-lines-per-function
export const HouseholderForm = ({ initialHouseholder, familyId }: Props) => {
  const t = messages.householder.householderForm;
  const { classes } = useStyles();

  const {
    handleSubmit,
    reset,
    register,
    formState: { errors, isValid, isDirty },
    control,
  } = useForm<FormSchema>({
    resolver,
    mode: 'onChange',
  });

  const [upsertHouseholder] = useUpsertHouseholder();

  useEffect(() => {
    if (initialHouseholder != null) reset(initialHouseholder);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit = handleSubmit(formData => {
    upsertHouseholder({
      variables: { ...formData, familyId },
    })
      .then(({ data: d }) => {
        showNotification({
          title: t.title,
          message: t.notification.successfulUpdate(d?.householder.name ?? ''),
          type: 'success',
          ...createTestAttr(ids.notification.success),
        });
      })
      .catch(() =>
        showNotification({
          title: t.title,
          message: t.notification.failedUpdate(formData.name),
          type: 'failure',
          ...createTestAttr(ids.notification.failure),
        }),
      );
  });

  return (
    <form onSubmit={onSubmit} {...createTestAttr(ids.form)}>
      <Stack spacing={25}>
        <Group position="apart" mih="100%">
          <Title order={4} color="fgMuted" weight="bold">
            {t.title}
          </Title>
          <Group spacing={20}>
            <Button
              size="sm"
              variant="outline"
              color="red"
              onClick={() => reset()}
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
            wrapperProps={createTestAttr(ids.firstNameInput)}
            {...register('name')}
            className={classes.textInput}
            label={`${t.nameInput.label}:`}
            placeholder={t.nameInput.placeholder}
            error={errors.name?.message}
          />
          <TextInput
            wrapperProps={createTestAttr(ids.lastNameInput)}
            {...register('surname')}
            className={classes.textInput}
            label={`${t.lastNameInput.label}:`}
            error={errors.surname?.message}
            placeholder={t.lastNameInput.placeholder}
          />
          <TextInput
            wrapperProps={createTestAttr(ids.fatherNameInput)}
            {...register('fatherName')}
            className={classes.textInput}
            label={`${t.fatherNameInput.label}:`}
            placeholder={t.fatherNameInput.placeholder}
            error={errors.fatherName?.message}
          />
          <Controller
            name="nationality"
            control={control}
            render={({ field }) => (
              <Select
                clearable
                wrapperProps={createTestAttr(ids.nationalityInput)}
                data={countries.map(v => ({
                  value: v,
                  label: t.nationalityInput.options[v],
                }))}
                placeholder={t.selectInputs.placeholder}
                label={`${t.nationalityInput.label}:`}
                error={errors.nationality?.message}
                {...field} // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
                value={field.value ?? null}
              />
            )}
          />
          {/* <TextInput
            wrapperProps={createTestAttr(ids.nationalIdInput)}
            error={errors.nationalId?.message}
            className={classes.textInput}
            {...register('nationalId')}
            placeholder={t.nationalIdInput.placeholder}
            label={`${t.nationalIdInput.label}:`}
          /> */}

          <Controller
            name="gender"
            control={control}
            render={({ field }) => (
              <Select
                clearable
                wrapperProps={createTestAttr(ids.genderInput)}
                data={genders.map(v => ({
                  value: v,
                  label: t.genderInput.options[v],
                }))}
                label={`${t.genderInput.label}:`}
                placeholder={t.selectInputs.placeholder}
                error={errors.gender?.message}
                {...field} // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
                value={field.value ?? null}
              />
            )}
          />

          <Controller
            name="issuedAt"
            control={control}
            render={({ field }) => (
              <Select
                clearable
                wrapperProps={createTestAttr(ids.issuedAtInput)}
                data={cities.map(v => ({
                  value: v,
                  label: t.issuedAtInput.options[v],
                }))}
                placeholder={t.selectInputs.placeholder}
                label={`${t.issuedAtInput.label}:`}
                error={errors.issuedAt?.message}
                {...field} // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
                value={field.value ?? null}
              />
            )}
          />

          <Controller
            name="religion"
            control={control}
            render={({ field }) => (
              <Select
                clearable
                wrapperProps={createTestAttr(ids.religionInput)}
                data={religions.map(v => ({
                  value: v,
                  label: t.religionInput.options[v],
                }))}
                placeholder={t.selectInputs.placeholder}
                label={`${t.religionInput.label}:`}
                error={errors.religion?.message}
                {...field} // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
                value={field.value ?? null}
              />
            )}
          />

          <Controller
            name="cityOfBirth"
            control={control}
            render={({ field }) => (
              <Select
                clearable
                wrapperProps={createTestAttr(ids.cityOfBirthInput)}
                data={cities.map(v => ({
                  value: v,
                  label: t.cityOfBirthInput.options[v],
                }))}
                placeholder={t.selectInputs.placeholder}
                label={`${t.cityOfBirthInput.label}:`}
                error={errors.cityOfBirth?.message}
                {...field} // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
                value={field.value ?? null}
              />
            )}
          />

          <DateInput
            wrapperProps={createTestAttr(ids.dateOfBirthInput)}
            className={classes.dateInput}
            rightSection={<CalendarIcon stroke="currentColor" size={16} />}
            label={`${t.dateOfBirthInput.label}:`}
            sx={theme => ({
              direction: 'ltr',
              color: theme.colors.secondaryDefault[6],
            })}
            locale="fa"
            placeholder={t.selectInputs.placeholder}
          />
        </SimpleGrid>
      </Stack>
    </form>
  );
};
