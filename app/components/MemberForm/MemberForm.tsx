/* eslint-disable max-lines-per-function */
import { useUpsertMemberMutation } from '@camp/data-layer';
import {
  ControlledDateInput,
  ControlledSelect,
  DashboardCard,
  showNotification,
  TextInput,
} from '@camp/design';
import type {
  GenderEnum,
  MemberListItem,
  NationalityEnum,
  ReligionEnum,
} from '@camp/domain';
import {
  createResolver,
  genders,
  memberSchema,
  nationalities,
  religions,
} from '@camp/domain';
import { ArrowDownIcon, CheckIcon, EditIcon, TrashIcon } from '@camp/icons';
import { messages } from '@camp/messages';
import { createTestAttr } from '@camp/test';
import {
  ActionIcon,
  Button,
  Collapse,
  createStyles,
  Group,
  SimpleGrid,
  Stack,
  Title,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useBoolean } from 'ahooks';
import { useForm } from 'react-hook-form';

import { InformationBadge } from '../InformationBadge';
import { UndoButton } from '../UndoButton';
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
  surname: string | undefined;
  fatherName: string | undefined;
  nationalId: string | undefined;
  dob: Date | null;
  gender: GenderEnum | undefined;
  nationality: NationalityEnum | undefined;
  religion: ReligionEnum | undefined;
}

const resolver = createResolver<FormSchema>({
  name: memberSchema.name(),
  surname: memberSchema.surname(),
  fatherName: memberSchema.fatherName(),
  nationalId: memberSchema.nationalId(),
  gender: memberSchema.gender(),
  nationality: memberSchema.nationality(),
  religion: memberSchema.religion(),
  dob: memberSchema.dob(),
});

const t = messages.member;
const tt = t.createForm;

interface Props {
  initialMember?: MemberListItem;
  householdId: string;
  memberId?: string;
  onSuccess?: VoidFunction;
}

export const MemberForm = ({
  initialMember,
  onSuccess,
  householdId,
  memberId,
}: Props) => {
  const [createMemberMutation] = useUpsertMemberMutation();
  const [opened, { toggle }] = useDisclosure(true);
  const [isEditableMode, { toggle: toggleEditableMode }] = useBoolean(
    !initialMember,
  );
  const { classes } = useStyles();

  const {
    handleSubmit,
    watch,
    register,
    formState: { errors, isValid, isDirty },
    control,
    reset,
  } = useForm<FormSchema>({
    resolver,
    defaultValues: initialMember,
    mode: 'onChange',
  });
  const [name, surname] = watch(['name', 'surname']);

  const onSubmit = handleSubmit(async values => {
    try {
      const { data } = await createMemberMutation({
        variables: {
          id: memberId,
          ...values,
          householdId,
        },
      });
      toggleEditableMode();
      showNotification({
        title: t.title,
        message: t.notification.successful(data?.member?.name ?? ''),
        type: 'success',
        ...createTestAttr(ids.notification.success),
      });
      onSuccess?.();
    } catch {
      return showNotification({
        title: t.title,
        message: t.notification.failed(values.name),
        type: 'failure',
        ...createTestAttr(ids.notification.failure),
      });
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
            {name} {surname}
          </Title>
          <InformationBadge information="draft" />
        </Group>
      }
    >
      <Collapse in={opened}>
        <form {...createTestAttr(ids.form)} onSubmit={onSubmit}>
          <Stack spacing={25} align="end">
            <SimpleGrid w="100%" cols={3} spacing="lg" verticalSpacing={20}>
              <TextInput
                readOnly={!isEditableMode}
                className={classes.textInput}
                wrapperProps={createTestAttr(ids.firstNameInput)}
                {...register('name')}
                label={`${tt.nameInput.label}:`}
                placeholder={tt.nameInput.placeholder}
                error={errors.name?.message}
              />
              <TextInput
                readOnly={!isEditableMode}
                className={classes.textInput}
                wrapperProps={createTestAttr(ids.lastNameInput)}
                {...register('surname')}
                label={`${tt.lastNameInput.label}:`}
                placeholder={tt.lastNameInput.placeholder}
                error={errors.surname?.message}
              />
              <TextInput
                readOnly={!isEditableMode}
                className={classes.textInput}
                wrapperProps={createTestAttr(ids.fatherNameInput)}
                {...register('fatherName')}
                label={`${tt.fatherNameInput.label}:`}
                placeholder={tt.fatherNameInput.placeholder}
                error={errors.fatherName?.message}
              />
              <ControlledSelect
                readOnly={!isEditableMode}
                name="nationality"
                control={control}
                wrapperProps={createTestAttr(ids.nationalityInput)}
                data={nationalities.map(v => ({
                  value: v,
                  label: messages.nationalities[v],
                }))}
                placeholder={tt.selectInputs.placeholder}
                label={`${tt.nationalityInput.label}:`}
              />
              <TextInput
                readOnly={!isEditableMode}
                className={classes.textInput}
                wrapperProps={createTestAttr(ids.nationalIdInput)}
                {...register('nationalId')}
                label={`${tt.nationalIdInput.label}:`}
                placeholder={tt.nationalIdInput.placeholder}
                error={errors.nationalId?.message}
              />
              <ControlledSelect
                readOnly={!isEditableMode}
                name="gender"
                control={control}
                wrapperProps={createTestAttr(ids.genderInput)}
                data={genders.map(v => ({
                  value: v,
                  label: messages.genders[v],
                }))}
                label={`${tt.genderInput.label}:`}
                placeholder={tt.selectInputs.placeholder}
              />
              <ControlledDateInput
                name="dob"
                control={control}
                readOnly={!isEditableMode}
                wrapperProps={createTestAttr(ids.dobInput)}
                className={classes.textInput}
                label={`${tt.dobInput.label}:`}
                placeholder={tt.selectInputs.placeholder}
              />
              <ControlledSelect
                readOnly={!isEditableMode}
                name="religion"
                control={control}
                wrapperProps={createTestAttr(ids.religionInput)}
                data={religions.map(v => ({
                  value: v,
                  label: messages.religions[v],
                }))}
                placeholder={tt.selectInputs.placeholder}
                label={`${tt.religionInput.label}:`}
              />
            </SimpleGrid>
            {!isEditableMode ? (
              <Group>
                <Button
                  {...createTestAttr(ids.deleteBtn)}
                  type="button"
                  variant="outline"
                  color="red"
                  leftIcon={<TrashIcon size={16} />}
                >
                  {messages.actions.delete}
                </Button>
                <Button
                  key={1}
                  {...createTestAttr(ids.editBtn)}
                  type="button"
                  size="sm"
                  variant="outline"
                  onClick={() => toggleEditableMode()}
                  leftIcon={<EditIcon size={16} />}
                >
                  {messages.actions.editBtn}
                </Button>
              </Group>
            ) : (
              <Group>
                <UndoButton
                  disabled={!isDirty && isEditableMode}
                  onClick={() => {
                    reset();
                    toggleEditableMode();
                  }}
                />
                <Button
                  key={2}
                  {...createTestAttr(ids.submitBtn)}
                  type="submit"
                  size="sm"
                  variant="filled"
                  leftIcon={<CheckIcon size={16} />}
                  disabled={!isValid || (!isDirty && isEditableMode)}
                >
                  {messages.actions.submitBtn}
                </Button>
              </Group>
            )}
          </Stack>
        </form>
      </Collapse>
    </DashboardCard>
  );
};
