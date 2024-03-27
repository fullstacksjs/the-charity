import { useUpsertHouseholderMutation } from '@camp/data-layer';
import {
  ControlledMultiSelect,
  ControlledSelect,
  Textarea,
} from '@camp/design';
import type {
  AddictionStatusEnum,
  DisabilityStatusEnum,
  HealthStatusEnum,
  HouseholderHealth,
  HouseholderIdentity,
  InsuranceEnum,
} from '@camp/domain';
import {
  addictionStatus,
  createResolver,
  disabilityStatus,
  healthStatus,
  householderHealthSchema,
  insurances,
} from '@camp/domain';
import { messages } from '@camp/messages';
import { tid } from '@camp/test';
import { isNull } from '@fullstacksjs/toolbox';
import { SimpleGrid, Stack } from '@mantine/core';
import { useBoolean } from 'ahooks';
import { useForm } from 'react-hook-form';

import { householdNotifications } from '../../../../householdNotifications';
import { HouseholderFormActions } from '../../HouseholderFormActions';
import { HouseholderHealthFormIds as ids } from './HouseholderHealthForm.ids';

interface Props {
  initialHouseholder?: HouseholderHealth & HouseholderIdentity;
  householdId: string;
  householdName: string;
}

interface FormSchema {
  addictionStatus: AddictionStatusEnum;
  disabilityStatus: DisabilityStatusEnum;
  disabilityDescription: string;
  healthStatus: HealthStatusEnum;
  healthComment: string;
  insurances: InsuranceEnum[];
  healthDescription: string;
}

const resolver = createResolver<FormSchema>({
  healthDescription: householderHealthSchema.healthDescription(),
  addictionStatus: householderHealthSchema.addictionStatus(),
  disabilityStatus: householderHealthSchema.disabilityStatus(),
  disabilityDescription: householderHealthSchema.disabilityDescription(),
  healthStatus: householderHealthSchema.healthStatus(),
  healthComment: householderHealthSchema.healthComment(),
  insurances: householderHealthSchema.insurances(),
});

const t = messages.householder.healthForm;

export const HouseholderHealthForm = ({
  initialHouseholder,
  householdId,
  householdName,
}: Props) => {
  const isCompleted = initialHouseholder?.isHealthCompleted;
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
        setIsEditing(!data.householder?.isHealthCompleted);
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
            name="disabilityStatus"
            control={control}
            wrapperProps={tid(ids.disabilityStatusInput)}
            data={disabilityStatus.map(v => ({
              value: v,
              label: messages.disabilityStatus[v],
            }))}
            placeholder={messages.form.selectInputs.placeholder}
            label={`${t.disabilityStatusInput.label}:`}
          />
          <ControlledMultiSelect
            readOnly={isReadOnly}
            name="insurances"
            control={control}
            wrapperProps={tid(ids.insuranceInput)}
            data={insurances.map(v => ({
              value: v,
              label: messages.insurance[v],
            }))}
            placeholder={messages.form.selectInputs.placeholder}
            label={`${t.insuranceInput.label}:`}
          />

          <Textarea
            readOnly={isReadOnly}
            wrapperProps={tid(ids.disabilityDescriptionInput)}
            {...register('disabilityDescription')}
            label={`${t.disabilityDescriptionInput.label}:`}
            placeholder={t.disabilityDescriptionInput.placeholder}
            error={errors.disabilityDescription?.message}
          />
          <ControlledSelect
            readOnly={isReadOnly}
            name="healthStatus"
            control={control}
            wrapperProps={tid(ids.healthStatusInput)}
            data={healthStatus.map(v => ({
              value: v,
              label: messages.healthStatus[v],
            }))}
            placeholder={messages.form.selectInputs.placeholder}
            label={`${t.healthStatusInput.label}:`}
          />
          <ControlledSelect
            readOnly={isReadOnly}
            name="addictionStatus"
            control={control}
            wrapperProps={tid(ids.addictionStatusInput)}
            data={addictionStatus.map(v => ({
              value: v,
              label: messages.addictionStatus[v],
            }))}
            placeholder={messages.form.selectInputs.placeholder}
            label={`${t.addictionStatusInput.label}:`}
          />
          <Textarea
            readOnly={isReadOnly}
            wrapperProps={tid(ids.healthDescriptionInput)}
            {...register('healthDescription')}
            label={`${t.healthDescriptionInput.label}:`}
            placeholder={t.healthDescriptionInput.placeholder}
            error={errors.healthDescription?.message}
          />
        </SimpleGrid>
      </Stack>
    </form>
  );
};
