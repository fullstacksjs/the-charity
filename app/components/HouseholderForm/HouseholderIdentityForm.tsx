import 'dayjs/locale/fa';

import { createResolver, HouseholderIdentitySchema } from '@camp/domain';
import { CheckMark, DateIcon } from '@camp/icons';
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
import { DatePickerInput } from 'mantine-datepicker-jalali';
import { useForm } from 'react-hook-form';

import { householderIdentityFormIds as Ids } from './HouseholderIdentityForm.ids';

interface FormSchema {
  firstName: string;
  lastName: string;
  fatherName: string;
  nationalId: string;
  ssn: string;
}

const resolver = createResolver<FormSchema>({
  firstName: HouseholderIdentitySchema.firstName(),
  lastName: HouseholderIdentitySchema.lastName(),
  fatherName: HouseholderIdentitySchema.fatherName(),
  nationalId: HouseholderIdentitySchema.nationalId(),
  ssn: HouseholderIdentitySchema.ssn(),
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

export const HouseholderIdentityForm = () => {
  const t = messages.householder.householderIdentityForm;
  const { classes } = useStyles();
  const { register, formState } = useForm<FormSchema>({
    resolver,
    mode: 'onChange',
  });

  return (
    <form>
      <Stack spacing={25}>
        <Group position="apart">
          <Title order={4} color="fgMuted" weight="bold">
            {t.title}
          </Title>
          <Button
            {...createTestAttr(Ids.submitBtn)}
            type="submit"
            size="sm"
            leftIcon={<CheckMark />}
          >
            {t.submitBtn}
          </Button>
        </Group>
        <SimpleGrid cols={3} spacing="lg" verticalSpacing={20}>
          <TextInput
            wrapperProps={createTestAttr(Ids.firstNameInput)}
            {...register('firstName')}
            className={classes.textInput}
            label={`${t.nameInput.label}:`}
            placeholder={t.nameInput.placeholder}
            error={formState.errors.firstName?.message}
          />
          <TextInput
            wrapperProps={createTestAttr(Ids.lastNameInput)}
            {...register('lastName')}
            className={classes.textInput}
            label={`${t.lastNameInput.label}:`}
            error={formState.errors.lastName?.message}
            placeholder={t.lastNameInput.placeholder}
          />
          <TextInput
            wrapperProps={createTestAttr(Ids.fatherNameInput)}
            {...register('fatherName')}
            className={classes.textInput}
            label={`${t.fatherNameInput.label}:`}
            placeholder={t.fatherNameInput.placeholder}
            error={formState.errors.fatherName?.message}
          />
          <Select
            wrapperProps={createTestAttr(Ids.nationalityInput)}
            data={[
              {
                value: t.nationalityInput.data.value,
                label: t.nationalityInput.data.label,
              },
            ]}
            placeholder={t.nationalityInput.placeholder}
            label={`${t.nationalityInput.label}:`}
          />
          <TextInput
            wrapperProps={createTestAttr(Ids.nationalIdInput)}
            error={formState.errors.nationalId?.message}
            className={classes.textInput}
            {...register('nationalId')}
            placeholder={t.nationalIdInput.placeholder}
            label={`${t.nationalIdInput.label}:`}
          />
          <TextInput
            wrapperProps={createTestAttr(Ids.ssnInput)}
            error={formState.errors.ssn?.message}
            className={classes.textInput}
            {...register('ssn')}
            placeholder={t.ssnInput.placeholder}
            label={`${t.ssnInput.label}:`}
          />
          <Select
            wrapperProps={createTestAttr(Ids.issuedAtInput)}
            data={[
              {
                value: t.issuedAtInput.data.value,
                label: t.issuedAtInput.data.label,
              },
            ]}
            placeholder={t.issuedAtInput.placeholder}
            label={`${t.issuedAtInput.label}:`}
          />
          <Select
            wrapperProps={createTestAttr(Ids.religionInput)}
            data={[
              {
                value: t.religionInput.data.value,
                label: t.religionInput.data.label,
              },
            ]}
            placeholder={t.religionInput.placeholder}
            label={`${t.religionInput.label}:`}
          />
          <Select
            wrapperProps={createTestAttr(Ids.genderInput)}
            data={[
              {
                value: t.genderInput.data.value,
                label: t.genderInput.data.label,
              },
              {
                value: t.genderInput.data.secondValue,
                label: t.genderInput.data.secondLabel,
              },
            ]}
            label={`${t.genderInput.label}:`}
            placeholder={t.genderInput.placeholder}
          />
          <DatePickerInput
            wrapperProps={createTestAttr(Ids.dateOfBirthInput)}
            className={classes.dateInput}
            rightSection={<DateIcon />}
            label={t.dateOfBirthInput.label}
            style={{ direction: 'ltr' }}
            locale="fa"
            defaultValue={new Date()}
          />
          <Select
            wrapperProps={createTestAttr(Ids.cityOfBirthInput)}
            data={[
              {
                value: t.cityOfBirthInput.data.value,
                label: t.cityOfBirthInput.data.label,
              },
            ]}
            placeholder={t.cityOfBirthInput.placeholder}
            label={`${t.cityOfBirthInput.label}:`}
          />
        </SimpleGrid>
      </Stack>
    </form>
  );
};
