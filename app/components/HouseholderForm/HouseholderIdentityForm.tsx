import 'dayjs/locale/fa';

import { createResolver, householderIdentitySchema } from '@camp/domain';
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

import { householderIdentityFormIds as Ids } from './HouseholderIdentityForm.ids';

interface FormSchema {
  firstName: string;
  lastName: string;
  fatherName: string;
  nationalId: string;
  ssn: string;
}

const resolver = createResolver<FormSchema>({
  firstName: householderIdentitySchema.firstName(),
  lastName: householderIdentitySchema.lastName(),
  fatherName: householderIdentitySchema.fatherName(),
  nationalId: householderIdentitySchema.nationalId(),
  ssn: householderIdentitySchema.ssn(),
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
  const [male, female] = t.genderInput.options;
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
            leftIcon={<CheckIcon />}
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
            placeholder={t.selectInputs.placeholder}
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
            placeholder={t.selectInputs.placeholder}
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
            placeholder={t.selectInputs.placeholder}
            label={`${t.religionInput.label}:`}
          />
          <Select
            wrapperProps={createTestAttr(Ids.genderInput)}
            data={[
              {
                value: male.value,
                label: male.label,
              },
              {
                value: female.value,
                label: female.label,
              },
            ]}
            label={`${t.genderInput.label}:`}
            placeholder={t.selectInputs.placeholder}
          />
          <DateInput
            wrapperProps={createTestAttr(Ids.dateOfBirthInput)}
            className={classes.dateInput}
            rightSection={<CalendarIcon stroke="currentColor" size={16} />}
            label={`${t.dateOfBirthInput.label}:`}
            sx={theme => ({
              direction: 'rtl',
              color: theme.colors.secondaryDefault[6],
            })}
            locale="fa"
            placeholder={t.selectInputs.placeholder}
          />
          <Select
            wrapperProps={createTestAttr(Ids.cityOfBirthInput)}
            data={[
              {
                value: t.cityOfBirthInput.data.value,
                label: t.cityOfBirthInput.data.label,
              },
            ]}
            placeholder={t.selectInputs.placeholder}
            label={`${t.cityOfBirthInput.label}:`}
          />
        </SimpleGrid>
      </Stack>
    </form>
  );
};
