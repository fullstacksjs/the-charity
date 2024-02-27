import {
  useDeleteMemberMutation,
  useUpsertMemberMutation,
} from '@camp/data-layer';
import { debug } from '@camp/debug';
import {
  CollapsibleDashboardCard,
  ControlledDateInput,
  ControlledSelect,
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
import { messages } from '@camp/messages';
import { tid } from '@camp/test';
import { isNull } from '@fullstacksjs/toolbox';
import { SimpleGrid, Stack } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useBoolean } from 'ahooks';
import { useForm } from 'react-hook-form';

import { memberFormIds as ids } from './MemberForm.ids';
import { MemberFormActions } from './MemberFormActions';
import { MemberFormHeader } from './MemberFormHeader';
import { memberFormNotifications as notifications } from './memberFormNotifications';

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

const t = messages.member.createForm;

interface Props {
  initialMember?: MemberListItem;
  householdId: string;
  memberId?: string;
  onSuccess?: VoidFunction;
  onUndo?: VoidFunction;
}

// NOTE: Cannot extract anymore concerns without loosing cohesion.
// eslint-disable-next-line max-lines-per-function
export const MemberForm = ({
  initialMember,
  onSuccess,
  householdId,
  memberId,
  onUndo,
}: Props) => {
  const [createMember, { loading: isCreating }] = useUpsertMemberMutation();
  const [opened, { toggle }] = useDisclosure(!initialMember?.isCompleted);
  const [isEditMode, { toggle: toggleEditMode }] = useBoolean(!initialMember);
  const [deleteMember, { loading: isDeleting }] = useDeleteMemberMutation();

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

  const onDeleteMember = async () => {
    const member = initialMember;
    const id = memberId;

    if (!member || !id) return;

    try {
      const { data } = await deleteMember({ variables: { id } });
      if (isNull(data.member)) throw Error('Assert: data is null');
      notifications.delete.success(member.name);
    } catch (err) {
      debug.error(err);
      notifications.delete.failure(member.name);
    }
  };

  const onSubmit = handleSubmit(async values => {
    try {
      await createMember({
        variables: { id: memberId, ...values, householdId },
      });
      toggleEditMode();
      notifications.create.success(values.name);
      onSuccess?.();
    } catch {
      notifications.create.failure(values.name);
    }
  });

  const handleUndo = () => {
    if (initialMember) toggleEditMode();
    reset();
    onUndo?.();
  };

  return (
    <CollapsibleDashboardCard
      onToggle={toggle}
      open={opened}
      header={
        <MemberFormHeader
          name={name}
          surname={surname}
          isCompleted={initialMember?.isCompleted}
        />
      }
    >
      <form {...tid(ids.form)} onSubmit={onSubmit}>
        <Stack spacing={25} align="end">
          <SimpleGrid w="100%" cols={3} spacing="lg" verticalSpacing={20}>
            <TextInput
              required
              readOnly={!isEditMode}
              wrapperProps={tid(ids.firstNameInput)}
              {...register('name')}
              label={`${t.nameInput.label}:`}
              placeholder={t.nameInput.placeholder}
              error={errors.name?.message}
            />
            <TextInput
              readOnly={!isEditMode}
              wrapperProps={tid(ids.lastNameInput)}
              {...register('surname')}
              label={`${t.lastNameInput.label}:`}
              placeholder={t.lastNameInput.placeholder}
              error={errors.surname?.message}
            />
            <TextInput
              readOnly={!isEditMode}
              wrapperProps={tid(ids.fatherNameInput)}
              {...register('fatherName')}
              label={`${t.fatherNameInput.label}:`}
              placeholder={t.fatherNameInput.placeholder}
              error={errors.fatherName?.message}
            />
            <ControlledSelect
              readOnly={!isEditMode}
              name="nationality"
              control={control}
              wrapperProps={tid(ids.nationalityInput)}
              data={nationalities.map(v => ({
                value: v,
                label: messages.nationalities[v],
              }))}
              placeholder={messages.form.selectInputs.placeholder}
              label={`${t.nationalityInput.label}:`}
            />
            <TextInput
              readOnly={!isEditMode}
              wrapperProps={tid(ids.nationalIdInput)}
              {...register('nationalId')}
              label={`${t.nationalIdInput.label}:`}
              placeholder={t.nationalIdInput.placeholder}
              error={errors.nationalId?.message}
            />
            <ControlledSelect
              readOnly={!isEditMode}
              name="gender"
              control={control}
              wrapperProps={tid(ids.genderInput)}
              data={genders.map(v => ({
                value: v,
                label: messages.genders[v],
              }))}
              label={`${t.genderInput.label}:`}
              placeholder={messages.form.selectInputs.placeholder}
            />
            <ControlledDateInput
              name="dob"
              control={control}
              readOnly={!isEditMode}
              wrapperProps={tid(ids.dobInput)}
              label={`${t.dobInput.label}:`}
              placeholder={messages.form.selectInputs.placeholder}
            />
            <ControlledSelect
              readOnly={!isEditMode}
              name="religion"
              control={control}
              wrapperProps={tid(ids.religionInput)}
              data={religions.map(v => ({
                value: v,
                label: messages.religions[v],
              }))}
              placeholder={messages.form.selectInputs.placeholder}
              label={`${t.religionInput.label}:`}
            />
          </SimpleGrid>
          <MemberFormActions
            isDeleting={isDeleting}
            onDelete={() => onDeleteMember()}
            isEditMode={isEditMode}
            toggleEditMode={toggleEditMode}
            isCreating={isCreating}
            onUndo={handleUndo}
            canSubmit={isValid && isDirty}
          />
        </Stack>
      </form>
    </CollapsibleDashboardCard>
  );
};
