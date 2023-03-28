/* eslint-disable max-lines-per-function */
import { DashboardCard, DashboardTitle, DetailCardField } from '@camp/design';
import type { GenderEnum } from '@camp/domain';
import {
  createResolver,
  genders,
  memberSchema,
  nationalities,
  religions,
} from '@camp/domain';
import { ArrowDownIcon, CalendarIcon, CheckIcon } from '@camp/icons';
import { messages } from '@camp/messages';
import { createTestAttr } from '@camp/test';
import { noop } from '@fullstacksjs/toolbox';
import {
  ActionIcon,
  Button,
  Center,
  Collapse,
  createStyles,
  Group,
  Select,
  SimpleGrid,
  Stack,
  TextInput,
  Title,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { DateInput } from 'mantine-datepicker-jalali';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

import { InformationBadge } from '../InformationBadge';
import { MemberEmptyState } from '../MemberEmptyState';
import { CreateMemberButton } from './CreateMemberButton';
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
  gender: GenderEnum;
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

const tt = messages.member;
const t = tt.createForm;

const MemberForm = () => {
  const [opened, { toggle }] = useDisclosure(true);
  const { classes } = useStyles();

  const {
    handleSubmit,
    register,
    watch,
    formState: { errors, isValid, isSubmitSuccessful },
    control,
  } = useForm<FormSchema>({
    resolver,
    mode: 'onChange',
  });
  const watchAllFields = watch();
  const onSubmit = handleSubmit(() => {
    noop();
  });
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
            {watchAllFields.name} {watchAllFields.surname}
          </Title>
          <InformationBadge information="draft" />
        </Group>
      }
    >
      <Collapse in={opened}>
        <form onSubmit={onSubmit} {...createTestAttr(ids.form)}>
          <Stack spacing={25} align="end">
            <SimpleGrid w="100%" cols={3} spacing="lg" verticalSpacing={20}>
              {isSubmitSuccessful ? (
                <DetailCardField title={t.nameInput.label}>
                  {watchAllFields.name}
                </DetailCardField>
              ) : (
                <TextInput
                  wrapperProps={createTestAttr(ids.firstNameInput)}
                  {...register('name')}
                  className={classes.textInput}
                  label={`${t.nameInput.label}:`}
                  placeholder={t.nameInput.placeholder}
                  error={errors.name?.message}
                />
              )}
              {isSubmitSuccessful ? (
                <DetailCardField title={t.lastNameInput.label}>
                  {watchAllFields.surname}
                </DetailCardField>
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
              {isSubmitSuccessful ? (
                <DetailCardField title={t.fatherNameInput.label}>
                  {watchAllFields.fatherName}
                </DetailCardField>
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
              {isSubmitSuccessful ? (
                <DetailCardField title={t.nationalityInput.label}>
                  {watchAllFields.nationality}
                </DetailCardField>
              ) : (
                <Controller
                  name="nationality"
                  control={control}
                  render={({ field }) => (
                    <Select
                      wrapperProps={createTestAttr(ids.nationalityInput)}
                      data={nationalities.map(v => ({
                        value: v,
                        label: messages.nationalities[v],
                      }))}
                      placeholder={t.selectInputs.placeholder}
                      label={`${t.nationalityInput.label}:`}
                      error={errors.nationality?.message}
                      {...field}
                    />
                  )}
                />
              )}
              {isSubmitSuccessful ? (
                <DetailCardField title={t.nationalIdInput.label}>
                  {watchAllFields.nationalId}
                </DetailCardField>
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
              {isSubmitSuccessful ? (
                <DetailCardField title={t.genderInput.label}>
                  {watchAllFields.gender}
                </DetailCardField>
              ) : (
                <Controller
                  name="gender"
                  control={control}
                  render={({ field }) => (
                    <Select
                      wrapperProps={createTestAttr(ids.genderInput)}
                      data={genders.map(v => ({
                        value: v,
                        label: messages.genders[v],
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
              {isSubmitSuccessful ? (
                <DetailCardField title={t.religionInput.label}>
                  {watchAllFields.religion}
                </DetailCardField>
              ) : (
                <Controller
                  name="religion"
                  control={control}
                  render={({ field }) => (
                    <Select
                      wrapperProps={createTestAttr(ids.religionInput)}
                      data={religions.map(v => ({
                        value: v,
                        label: messages.religions[v],
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
              leftIcon={<CheckIcon size={16} />}
              disabled={!isValid}
            >
              {t.submitBtn}
            </Button>
          </Stack>
        </form>
      </Collapse>
    </DashboardCard>
  );
};

export const MemberList = () => {
  const [memberForm, setMemberForm] = useState<React.ReactNode[]>([]);

  const addNewMemberHandler = () => {
    setMemberForm(memberForm.concat(<MemberForm key={memberForm.length} />));
  };

  return (
    <Stack spacing={25} sx={{ position: 'relative' }}>
      <Group position="apart">
        <DashboardTitle>{tt.title}</DashboardTitle>
        <CreateMemberButton onAddNewMember={addNewMemberHandler} />
      </Group>
      {memberForm}
      <Center h={400}>
        <MemberEmptyState addNewMember={addNewMemberHandler} />
      </Center>
    </Stack>
  );
};
