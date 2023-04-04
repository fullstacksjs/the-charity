/* eslint-disable max-lines-per-function */
import { useMemberMutation } from '@camp/data-layer';
import type { Gender, Member, Nationality, Religion } from '@camp/domain';
import {
  DashboardCard,
  DetailCardTextField,
  showNotification,
} from '@camp/design';
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
  nationality: Nationality;
  religion: Religion;
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

const t = messages.member;
const tt = t.createForm;

interface Props {
  member?: Member | null;
  familyId: string;
}

export const MemberForm = ({ member, familyId }: Props) => {
  const [memberMutation] = useMemberMutation();
  const [opened, { toggle }] = useDisclosure(true);
  const [isEditable, toggleMode] = useToggle();
  const { classes } = useStyles();

  useEffect(() => {
    if (!member) {
      toggleMode(false);
    } else {
      toggleMode(true);
    }
  }, [member, toggleMode]);

  const {
    handleSubmit,
    watch,
    formState: { errors, isValid },
    control,
  } = useForm<FormSchema>({
    resolver,
    mode: 'onChange',
  });
  const watchAllFields = watch();

  const onSubmit = handleSubmit(FormData => {
    toggleMode();

    if (!isEditable) {
      memberMutation({
        variables: {
          ...FormData,
          familyId,
        },
      })
        .then(({ data }) => {
          showNotification({
            title: t.title,
            message: t.notification.successful(data?.member.name ?? ''),
            type: 'success',
            ...createTestAttr(ids.notification.success),
          });
        })
        .catch(() =>
          showNotification({
            title: t.title,
            message: t.notification.failed(FormData.name),
            type: 'failure',
            ...createTestAttr(ids.notification.failure),
          }),
        );
    }
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
            {!isEditable ? (
              <>
                {member?.name} {member?.surname}
              </>
            ) : (
              <>
                {watchAllFields.name} {watchAllFields.surname}
              </>
            )}
          </Title>
          <InformationBadge information="draft" />
        </Group>
      }
    >
      <Collapse in={opened}>
        <form {...createTestAttr(ids.form)} onSubmit={onSubmit}>
          <Stack spacing={25} align="end">
            <SimpleGrid w="100%" cols={3} spacing="lg" verticalSpacing={20}>
              {isEditable ? (
                <DetailCardTextField title={tt.nameInput.label}>
                  {watchAllFields.name}
                </DetailCardTextField>
              ) : (
                <Controller
                  name="name"
                  control={control}
                  defaultValue={member?.name}
                  render={({ field }) => (
                    <TextInput
                      wrapperProps={createTestAttr(ids.firstNameInput)}
                      className={classes.textInput}
                      label={`${tt.nameInput.label}:`}
                      placeholder={tt.nameInput.placeholder}
                      error={errors.name?.message}
                      {...field}
                    />
                  )}
                />
              )}
              {isEditable ? (
                <DetailCardTextField title={tt.lastNameInput.label}>
                  {watchAllFields.surname}
                </DetailCardTextField>
              ) : (
                <Controller
                  name="surname"
                  control={control}
                  defaultValue={member?.surname}
                  render={({ field }) => (
                    <TextInput
                      wrapperProps={createTestAttr(ids.lastNameInput)}
                      className={classes.textInput}
                      label={`${tt.lastNameInput.label}:`}
                      error={errors.surname?.message}
                      placeholder={tt.lastNameInput.placeholder}
                      {...field}
                    />
                  )}
                />
              )}
              {isEditable ? (
                <DetailCardTextField title={tt.fatherNameInput.label}>
                  {watchAllFields.fatherName}
                </DetailCardTextField>
              ) : (
                <Controller
                  name="fatherName"
                  control={control}
                  defaultValue={member?.fatherName}
                  render={({ field }) => (
                    <TextInput
                      wrapperProps={createTestAttr(ids.fatherNameInput)}
                      className={classes.textInput}
                      label={`${tt.fatherNameInput.label}:`}
                      error={errors.fatherName?.message}
                      placeholder={tt.fatherNameInput.placeholder}
                      {...field}
                    />
                  )}
                />
              )}
              {isEditable ? (
                <DetailCardTextField title={tt.nationalityInput.label}>
                  {watchAllFields.nationality}
                </DetailCardTextField>
              ) : (
                <Controller
                  name="nationality"
                  control={control}
                  defaultValue={member?.nationality}
                  render={({ field }) => (
                    <Select
                      wrapperProps={createTestAttr(ids.nationalityInput)}
                      data={nationalities.map(v => ({
                        value: v,
                        label: tt.nationalityInput.options[v],
                      }))}
                      placeholder={tt.selectInputs.placeholder}
                      label={`${tt.nationalityInput.label}:`}
                      error={errors.nationality?.message}
                      {...field}
                    />
                  )}
                />
              )}
              {isEditable ? (
                <DetailCardTextField title={tt.nationalIdInput.label}>
                  {watchAllFields.nationalId}
                </DetailCardTextField>
              ) : (
                <Controller
                  name="nationalId"
                  control={control}
                  defaultValue={member?.nationalId}
                  render={({ field }) => (
                    <TextInput
                      wrapperProps={createTestAttr(ids.nationalIdInput)}
                      className={classes.textInput}
                      label={`${tt.nationalIdInput.label}:`}
                      error={errors.nationalId?.message}
                      placeholder={tt.nationalIdInput.placeholder}
                      {...field}
                    />
                  )}
                />
              )}
              {isEditable ? (
                <DetailCardTextField title={tt.genderInput.label}>
                  {watchAllFields.gender}
                </DetailCardTextField>
              ) : (
                <Controller
                  name="gender"
                  control={control}
                  defaultValue={member?.gender}
                  render={({ field }) => (
                    <Select
                      wrapperProps={createTestAttr(ids.genderInput)}
                      data={genders.map(v => ({
                        value: v,
                        label: tt.genderInput.options[v],
                      }))}
                      label={`${tt.genderInput.label}:`}
                      placeholder={tt.selectInputs.placeholder}
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
                label={`${tt.dobInput.label}:`}
                sx={theme => ({
                  direction: 'ltr',
                  color: theme.colors.secondaryDefault[6],
                })}
                locale="fa"
                placeholder={tt.selectInputs.placeholder}
              />
              {isEditable ? (
                <DetailCardTextField title={tt.religionInput.label}>
                  {watchAllFields.religion}
                </DetailCardTextField>
              ) : (
                <Controller
                  name="religion"
                  control={control}
                  defaultValue={member?.religion}
                  render={({ field }) => (
                    <Select
                      wrapperProps={createTestAttr(ids.religionInput)}
                      data={religions.map(v => ({
                        value: v,
                        label: tt.religionInput.options[v],
                      }))}
                      placeholder={tt.selectInputs.placeholder}
                      label={`${tt.religionInput.label}:`}
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
              variant={isEditable ? 'outline' : 'filled'}
              leftIcon={
                isEditable ? <EditIcon size={16} /> : <CheckIcon size={16} />
              }
              disabled={!isValid && !isEditable}
            >
              {isEditable ? tt.editBtn : tt.submitBtn}
            </Button>
          </Stack>
        </form>
      </Collapse>
    </DashboardCard>
  );
};
