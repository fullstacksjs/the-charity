/* eslint-disable max-lines-per-function */
import { DashboardCard } from '@camp/design';
import type { Gender } from '@camp/domain';
import {
  createResolver,
  genders,
  memberSchema,
  nationalities,
  religions,
} from '@camp/domain';
import { ArrowDownIcon, CalendarIcon, CheckIcon, PlusIcon } from '@camp/icons';
import { messages } from '@camp/messages';
import { createTestAttr } from '@camp/test';
import { noop } from '@fullstacksjs/toolbox';
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
import { useDisclosure } from '@mantine/hooks';
import { DateInput } from 'mantine-datepicker-jalali';
import React, { useState } from 'react';
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

const tt = messages.member;
const t = tt.createForm;

const MemberForm = () => {
  const [opened, { toggle }] = useDisclosure(true);

  const { classes } = useStyles();

  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
    control,
  } = useForm<FormSchema>({
    resolver,
    mode: 'onChange',
  });

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
            {'علی علیان'}
          </Title>
          <InformationBadge information="draft" />
        </Group>
      }
    >
      <Collapse in={opened}>
        <form onSubmit={onSubmit} {...createTestAttr(ids.form)}>
          <Stack spacing={25} align="end">
            <SimpleGrid w="100%" cols={3} spacing="lg" verticalSpacing={20}>
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
              <TextInput
                wrapperProps={createTestAttr(ids.nationalIdInput)}
                error={errors.nationalId?.message}
                className={classes.textInput}
                {...register('nationalId')}
                placeholder={t.nationalIdInput.placeholder}
                label={`${t.nationalIdInput.label}:`}
              />

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
    <Stack spacing={25}>
      <Group position="apart">
        <Title order={4} color="fgMuted" weight="bold">
          {tt.title}
        </Title>
        <Button
          variant="outline"
          size="sm"
          onClick={addNewMemberHandler}
          leftIcon={<PlusIcon width="16" height="16" />}
        >
          {tt.addNewMember}
        </Button>
      </Group>
      {memberForm}
    </Stack>
  );
};
