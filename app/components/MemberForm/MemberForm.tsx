/* eslint-disable max-lines-per-function */
import { useMemberMutation } from '@camp/data-layer';
import { DashboardCard, DetailCardTextField } from '@camp/design';
import type { Gender, Member } from '@camp/domain';
import {
  createResolver,
  genders,
  memberSchema,
  nationalities,
  religions,
} from '@camp/domain';
import { ArrowDownIcon, CalendarIcon, CheckIcon, EditIcon } from '@camp/icons';
import { messages } from '@camp/messages';
import { createTestAttr } from '@camp/test';
import {
  ActionIcon,
  Button,
  Collapse,
  createStyles,
  Group,
  Select,
  SimpleGrid,
  Stack,
  TextInput,
  Title,
} from '@mantine/core';
import { useDisclosure, useToggle } from '@mantine/hooks';
import { DateInput } from 'mantine-datepicker-jalali';
import { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';

import { InformationBadge } from '../InformationBadge';
import { memberFormIds as ids } from './MemberForm.ids';

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

interface FormSchema {
  name: string;
  surname: string;
  fatherName: string;
  nationalId: string;
  gender: Gender;
  nationality: string;
  religion: string;
}

const resolver = createResolver<FormSchema>({
  name: memberSchema.name(),
  surname: memberSchema.surname(),
  fatherName: memberSchema.fatherName(),
  nationalId: memberSchema.nationalId(),
  gender: memberSchema.gender(),
  nationality: memberSchema.nationality(),
  religion: memberSchema.religion(),
});

const t = messages.member.createForm;

interface Props {
  member?: Member | null;
}

export const MemberForm = ({ member }: Props) => {
  const [opened, { toggle }] = useDisclosure(true);
  const [value, toggleButton] = useToggle();
  const { classes } = useStyles();

  useEffect(() => {
    if (!member) {
      toggleButton(false);
    } else {
      toggleButton(true);
    }
  }, [member, toggleButton]);

  const {
    handleSubmit,
    register,
    watch,
    formState: { errors, isValid },
    control,
  } = useForm<FormSchema>({
    resolver,
    mode: 'onChange',
  });
  const watchAllFields = watch();

  return (
    <DashboardCard
      left={
        <ActionIcon onClick={toggle}>
          <ArrowDownIcon width="16" height="16" color="black" />
        </ActionIcon>
      }
      right={
        <Group spacing={10}>
          <Title order={4} color="fgDefault" weight="bold">
            {member?.name} {member?.surname}
            {watchAllFields.name} {watchAllFields.surname}
          </Title>
          <InformationBadge information="draft" />
        </Group>
      }
    >
      <Collapse in={opened}>
        <form {...createTestAttr(ids.form)}>
          <Stack spacing={25} align="end">
            <SimpleGrid w="100%" cols={3} spacing="lg" verticalSpacing={20}>
              {value ? (
                <DetailCardTextField title={t.nameInput.label}>
                  {watchAllFields.name}
                </DetailCardTextField>
              ) : (
                <Controller
                  name="name"
                  control={control}
                  render={({ field }) => (
                    <TextInput
                      wrapperProps={createTestAttr(ids.firstNameInput)}
                      className={classes.textInput}
                      label={`${t.nameInput.label}:`}
                      placeholder={t.nameInput.placeholder}
                      error={errors.name?.message}
                      {...field}
                    />
                  )}
                />
              )}
              {value ? (
                <DetailCardTextField title={t.lastNameInput.label}>
                  {watchAllFields.surname}
                </DetailCardTextField>
              ) : (
                <TextInput
                  wrapperProps={createTestAttr(ids.lastNameInput)}
                  {...register('surname')}
                  className={classes.textInput}
                  label={`${t.lastNameInput.label}:`}
                  error={errors.surname?.message}
                  placeholder={t.lastNameInput.placeholder}
                />
              )}
              {value ? (
                <DetailCardTextField title={t.fatherNameInput.label}>
                  {watchAllFields.fatherName}
                </DetailCardTextField>
              ) : (
                <TextInput
                  wrapperProps={createTestAttr(ids.fatherNameInput)}
                  {...register('fatherName')}
                  className={classes.textInput}
                  label={`${t.fatherNameInput.label}:`}
                  placeholder={t.fatherNameInput.placeholder}
                  error={errors.fatherName?.message}
                />
              )}
              {value ? (
                <DetailCardTextField title={t.nationalityInput.label}>
                  {watchAllFields.nationality}
                </DetailCardTextField>
              ) : (
                <Controller
                  name="nationality"
                  control={control}
                  render={({ field }) => (
                    <Select
                      wrapperProps={createTestAttr(ids.nationalityInput)}
                      data={nationalities.map(v => ({
                        value: v,
                        label: t.nationalityInput.options[v],
                      }))}
                      placeholder={t.selectInputs.placeholder}
                      label={`${t.nationalityInput.label}:`}
                      error={errors.nationality?.message}
                      {...field}
                    />
                  )}
                />
              )}
              {value ? (
                <DetailCardTextField title={t.nationalIdInput.label}>
                  {watchAllFields.nationalId}
                </DetailCardTextField>
              ) : (
                <TextInput
                  wrapperProps={createTestAttr(ids.nationalIdInput)}
                  error={errors.nationalId?.message}
                  className={classes.textInput}
                  {...register('nationalId')}
                  placeholder={t.nationalIdInput.placeholder}
                  label={`${t.nationalIdInput.label}:`}
                />
              )}
              {value ? (
                <DetailCardTextField title={t.genderInput.label}>
                  {watchAllFields.gender}
                </DetailCardTextField>
              ) : (
                <Controller
                  name="gender"
                  control={control}
                  render={({ field }) => (
                    <Select
                      wrapperProps={createTestAttr(ids.genderInput)}
                      data={genders.map(v => ({
                        value: v,
                        label: t.genderInput.options[v],
                      }))}
                      label={`${t.genderInput.label}:`}
                      placeholder={t.selectInputs.placeholder}
                      error={errors.gender?.message}
                      {...field}
                    />
                  )}
                />
              )}
              <DateInput
                wrapperProps={createTestAttr(ids.dobInput)}
                className={classes.dateInput}
                rightSection={<CalendarIcon stroke="currentColor" size={16} />}
                label={`${t.dobInput.label}:`}
                sx={theme => ({
                  direction: 'ltr',
                  color: theme.colors.secondaryDefault[6],
                })}
                locale="fa"
                placeholder={t.selectInputs.placeholder}
              />
              {value ? (
                <DetailCardTextField title={t.religionInput.label}>
                  {watchAllFields.religion}
                </DetailCardTextField>
              ) : (
                <Controller
                  name="religion"
                  control={control}
                  render={({ field }) => (
                    <Select
                      wrapperProps={createTestAttr(ids.religionInput)}
                      data={religions.map(v => ({
                        value: v,
                        label: t.religionInput.options[v],
                      }))}
                      placeholder={t.selectInputs.placeholder}
                      label={`${t.religionInput.label}:`}
                      error={errors.religion?.message}
                      {...field}
                    />
                  )}
                />
              )}
            </SimpleGrid>
            <Button
              {...createTestAttr(ids.submitBtn)}
              type="submit"
              size="sm"
              variant={value ? 'outline' : 'filled'}
              leftIcon={
                value ? <EditIcon size={16} /> : <CheckIcon size={16} />
              }
              disabled={!isValid && !value}
              onClick={e => {
                e.preventDefault();
                toggleButton();
              }}
            >
              {value ? t.editBtn : t.submitBtn}
            </Button>
          </Stack>
        </form>
      </Collapse>
    </DashboardCard>
  );
};
