import 'dayjs/locale/fa';

import { useUpsertHouseholder } from '@camp/data-layer';
import { showNotification } from '@camp/design';
import {
  cities,
  countries,
  createResolver,
  genders,
  householderIdentitySchema,
  religions,
} from '@camp/domain';
import { type Gender } from '@camp/domain';
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
import { useForm } from 'react-hook-form';

import { householderIdentityFormIds as ids } from './HouseholderIdentityForm.ids';

interface Props {
  currentFamilyId: string;
}

interface FormSchema {
  firstName: string;
  lastName: string;
  fatherName: string;
  nationalId: string;
  gender: Gender;
  nationality: string;
  religion: string;
}

const resolver = createResolver<FormSchema>({
  firstName: householderIdentitySchema.firstName(),
  lastName: householderIdentitySchema.lastName(),
  fatherName: householderIdentitySchema.fatherName(),
  nationalId: householderIdentitySchema.nationalId(),
  gender: householderIdentitySchema.gender(),
  nationality: householderIdentitySchema.nationality(),
  religion: householderIdentitySchema.religion(),
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
export const HouseholderIdentityForm = ({ currentFamilyId }: Props) => {
  const t = messages.householder.householderIdentityForm;
  const { classes } = useStyles();
  const { handleSubmit, register, formState } = useForm<FormSchema>({
    resolver,
    mode: 'onChange',
  });

  const [upsertHouseholder] = useUpsertHouseholder();
  const onSubmit = handleSubmit(
    ({
      fatherName,
      firstName,
      lastName,
      nationality,
      religion,
      nationalId,
      gender,
    }) => {
      upsertHouseholder({
        variables: {
          fatherName,
          lastName,
          firstName,
          familyId: currentFamilyId,
          nationality,
          religion,
          nationalId,
          gender,
        },
      })
        .then(({ data }) => {
          showNotification({
            title: t.title,
            message: t.notification.successfulUpdate(
              data?.householder.firstName ?? '',
            ),
            type: 'success',
            ...createTestAttr(ids.notification.success),
          });
        })
        .catch(() =>
          showNotification({
            title: t.title,
            message: t.notification.failedUpdate(firstName),
            type: 'failure',
            ...createTestAttr(ids.notification.failure),
          }),
        );
    },
  );

  return (
    <form onSubmit={onSubmit}>
      <Stack spacing={25}>
        <Group position="apart">
          <Title order={4} color="fgMuted" weight="bold">
            {t.title}
          </Title>
          <Button
            {...createTestAttr(ids.submitBtn)}
            type="submit"
            size="sm"
            leftIcon={<CheckIcon size={16} />}
          >
            {t.submitBtn}
          </Button>
        </Group>
        <SimpleGrid cols={3} spacing="lg" verticalSpacing={20}>
          <TextInput
            wrapperProps={createTestAttr(ids.firstNameInput)}
            {...register('firstName')}
            className={classes.textInput}
            label={`${t.nameInput.label}:`}
            placeholder={t.nameInput.placeholder}
            error={formState.errors.firstName?.message}
          />
          <TextInput
            wrapperProps={createTestAttr(ids.lastNameInput)}
            {...register('lastName')}
            className={classes.textInput}
            label={`${t.lastNameInput.label}:`}
            error={formState.errors.lastName?.message}
            placeholder={t.lastNameInput.placeholder}
          />
          <TextInput
            wrapperProps={createTestAttr(ids.fatherNameInput)}
            {...register('fatherName')}
            className={classes.textInput}
            label={`${t.fatherNameInput.label}:`}
            placeholder={t.fatherNameInput.placeholder}
            error={formState.errors.fatherName?.message}
          />
          <Select
            wrapperProps={createTestAttr(ids.nationalityInput)}
            data={countries.map(v => ({
              value: v,
              label: t.nationalityInput.options[v],
            }))}
            placeholder={t.selectInputs.placeholder}
            label={`${t.nationalityInput.label}:`}
          />
          <TextInput
            wrapperProps={createTestAttr(ids.nationalIdInput)}
            error={formState.errors.nationalId?.message}
            className={classes.textInput}
            {...register('nationalId')}
            placeholder={t.nationalIdInput.placeholder}
            label={`${t.nationalIdInput.label}:`}
          />
          <Select
            wrapperProps={createTestAttr(ids.genderInput)}
            data={genders.map(v => ({
              value: v,
              label: t.genderInput.options[v],
            }))}
            label={`${t.genderInput.label}:`}
            placeholder={t.selectInputs.placeholder}
          />
          <Select
            wrapperProps={createTestAttr(ids.issuedAtInput)}
            data={cities.map(v => ({
              value: v,
              label: t.issuedAtInput.options[v],
            }))}
            placeholder={t.selectInputs.placeholder}
            label={`${t.issuedAtInput.label}:`}
          />
          <Select
            wrapperProps={createTestAttr(ids.religionInput)}
            data={religions.map(v => ({
              value: v,
              label: t.religionInput.options[v],
            }))}
            placeholder={t.selectInputs.placeholder}
            label={`${t.religionInput.label}:`}
          />
          <Select
            wrapperProps={createTestAttr(ids.cityOfBirthInput)}
            data={cities.map(v => ({
              value: v,
              label: t.cityOfBirthInput.options[v],
            }))}
            placeholder={t.selectInputs.placeholder}
            label={`${t.cityOfBirthInput.label}:`}
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
