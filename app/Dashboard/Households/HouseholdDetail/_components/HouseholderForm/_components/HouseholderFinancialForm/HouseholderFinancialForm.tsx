/* eslint-disable max-lines-per-function */
import { useUpsertHouseholderMutation } from '@camp/data-layer';
import {
  ControlledMultiSelect,
  ControlledNumberInput,
  ControlledSelect,
  Textarea,
  TextInput,
} from '@camp/design';
import type {
  HouseholderFinancial,
  HouseholderIdentity,
  JobEnum,
  SkillEnum,
  SubsideTypeEnum,
} from '@camp/domain';
import {
  createResolver,
  householderFinancialSchema,
  jobs,
  skills,
  subsideTypes,
} from '@camp/domain';
import { messages } from '@camp/messages';
import { tid } from '@camp/test';
import { isNull } from '@fullstacksjs/toolbox';
import { SimpleGrid, Stack } from '@mantine/core';
import { useBoolean } from 'ahooks';
import { useForm } from 'react-hook-form';

import { householdNotifications } from '../../../../householdNotifications';
import { HouseholderFormActions } from '../../HouseholderFormActions';
import { HouseholderFinancialFormIds as ids } from './HouseholderFinancialForm.ids';

interface Props {
  initialHouseholder?: HouseholderFinancial & HouseholderIdentity;
  householdId: string;
  householdName: string;
}

interface FormSchema {
  job: JobEnum;
  income: number;
  skills: SkillEnum[];
  subsideTypes: SubsideTypeEnum[];
  subside: number;
  rent: string;
  bankCardNumber: string;
  bankAccountNumber: string;
  financialComment: string;
}

const resolver = createResolver<FormSchema>({
  job: householderFinancialSchema.job(),
  income: householderFinancialSchema.income(),
  skills: householderFinancialSchema.skills(),
  subsideTypes: householderFinancialSchema.subsideTypes(),
  subside: householderFinancialSchema.subside(),
  rent: householderFinancialSchema.rent(),
  bankCardNumber: householderFinancialSchema.bankCardNumber(),
  bankAccountNumber: householderFinancialSchema.bankAccountNumber(),
  financialComment: householderFinancialSchema.financialComment(),
});

const t = messages.householder.financialForm;

export const HouseholderFinancialForm = ({
  initialHouseholder,
  householdId,
  householdName,
}: Props) => {
  const isCompleted = initialHouseholder?.isFinancialCompleted;
  const [isEditMode, { set: setIsEditing }] = useBoolean(!isCompleted);
  const isReadOnly = !isEditMode;
  const [upsertHouseholder] = useUpsertHouseholderMutation();

  const {
    reset,
    register,
    handleSubmit,
    control,
    formState: { isDirty, errors },
  } = useForm<FormSchema>({
    resolver,
    defaultValues: initialHouseholder,
    mode: 'onChange',
  });

  const handleReset = () => {
    reset();
    setIsEditing(false);
  };

  const onSubmit = handleSubmit(async values => {
    try {
      const { data } = await upsertHouseholder({
        variables: { ...initialHouseholder, ...values, householdId },
      });

      if (!isNull(data)) {
        reset({ ...data.householder });
        setIsEditing(!data.householder?.isFinancialCompleted);
      }
      householdNotifications.edit.success(householdName);
    } catch {
      householdNotifications.edit.failure(householdName);
    }
  });

  return (
    <form onSubmit={onSubmit} {...tid(ids.form)}>
      <Stack spacing={25}>
        <HouseholderFormActions
          idPrefix={ids.idPrefix}
          title={t.title}
          isEditMode={isEditMode}
          canUndo={isDirty || isCompleted}
          canSubmit={isDirty}
          onUndo={handleReset}
          onEdit={() => setIsEditing(true)}
        />
        <SimpleGrid cols={3} spacing="lg" verticalSpacing={20}>
          <ControlledSelect
            readOnly={isReadOnly}
            name="job"
            control={control}
            wrapperProps={tid(ids.jobInput)}
            data={jobs.map(v => ({
              value: v,
              label: messages.jobs[v],
            }))}
            placeholder={messages.form.selectInputs.placeholder}
            label={`${t.jobInput.label}:`}
          />

          <ControlledNumberInput
            name="income"
            readOnly={isReadOnly}
            wrapperProps={tid(ids.incomeInput)}
            error={errors.income?.message}
            control={control}
            hideControls
            thousandsSeparator=","
            placeholder={t.incomeInput.placeholder}
            label={`${t.incomeInput.label}:`}
          />
          <ControlledMultiSelect
            readOnly={isReadOnly}
            name="skills"
            control={control}
            wrapperProps={tid(ids.skillsInput)}
            data={skills.map(v => ({
              value: v,
              label: messages.skills[v],
            }))}
            placeholder={messages.form.selectInputs.placeholder}
            label={`${t.skillsInput.label}:`}
          />
          <ControlledMultiSelect
            readOnly={isReadOnly}
            name="subsideTypes"
            control={control}
            wrapperProps={tid(ids.subsideTypesInput)}
            data={subsideTypes.map(v => ({
              value: v,
              label: messages.subsideTypes[v],
            }))}
            placeholder={messages.form.selectInputs.placeholder}
            label={`${t.subsideTypesInput.label}:`}
          />

          <ControlledNumberInput
            name="subside"
            placeholder={t.subsideInput.placeholder}
            readOnly={isReadOnly}
            wrapperProps={tid(ids.subsideInput)}
            error={errors.subside?.message}
            control={control}
            hideControls
            thousandsSeparator=","
            label={`${t.subsideInput.label}:`}
          />

          <ControlledNumberInput
            name="rent"
            readOnly={isReadOnly}
            wrapperProps={tid(ids.rentInput)}
            placeholder={t.rentInput.placeholder}
            error={errors.rent?.message}
            control={control}
            hideControls
            thousandsSeparator=","
            label={`${t.rentInput.label}:`}
          />

          <TextInput
            readOnly={isReadOnly}
            wrapperProps={tid(ids.bankCardNumberInput)}
            placeholder={t.bankCardNumberInput.placeholder}
            error={errors.bankCardNumber?.message}
            {...register('bankCardNumber')}
            label={`${t.bankCardNumberInput.label}:`}
          />

          <TextInput
            readOnly={isReadOnly}
            wrapperProps={tid(ids.bankAccountNumberInput)}
            placeholder={t.bankAccountNumberInput.placeholder}
            error={errors.bankAccountNumber?.message}
            {...register('bankAccountNumber')}
            label={`${t.bankAccountNumberInput.label}:`}
          />

          <Textarea
            readOnly={isReadOnly}
            wrapperProps={tid(ids.financialCommentInput)}
            {...register('financialComment')}
            label={`${t.financialCommentInput.label}:`}
            error={errors.financialComment?.message}
          />
        </SimpleGrid>
      </Stack>
    </form>
  );
};
