import { useUpsertHouseholderMutation } from '@camp/data-layer';
import {
  ControlledNumberInput,
  ControlledSelect,
  Textarea,
} from '@camp/design';
import type {
  AccommodationTypeEnum,
  CityEnum,
  HouseholderContact,
  HouseholderIdentity,
  NationalityEnum,
  ProvinceEnum,
} from '@camp/domain';
import {
  accommodationTypes,
  cities,
  createResolver,
  householderContactSchema,
  nationalities,
  provinces,
} from '@camp/domain';
import { messages } from '@camp/messages';
import { tid } from '@camp/test';
import { isNull } from '@fullstacksjs/toolbox';
import { SimpleGrid, Stack } from '@mantine/core';
import { useBoolean } from 'ahooks';
import { useForm } from 'react-hook-form';

import { householdNotifications } from '../../../../householdNotifications';
import { HouseholderFormActions } from '../../HouseholderFormActions';
import { householderContactFormIds as ids } from './HouseholderContactForm.ids';

interface Props {
  initialHouseholder?: HouseholderContact & HouseholderIdentity;
  householdId: string;
  householdName: string;
}

interface FormSchema {
  province: ProvinceEnum | undefined;
  neighborhood: string;
  address: string;
  zipCode: string;
  nationality: NationalityEnum | undefined;
  priorAccommodationAddress: string;
  accommodationType: AccommodationTypeEnum;
  cityOfBirth: CityEnum | undefined;
}

const resolver = createResolver<FormSchema>({
  province: householderContactSchema.province(),
  nationality: householderContactSchema.nationality(),
  neighborhood: householderContactSchema.neighborhood(),
  address: householderContactSchema.address(),
  zipCode: householderContactSchema.zipCode(),
  priorAccommodationAddress:
    householderContactSchema.priorAccommodationAddress(),
  accommodationType: householderContactSchema.accommodationType(),
  cityOfBirth: householderContactSchema.cityOfBirth(),
});

const t = messages.householder.contactForm;

export const HouseholderContactForm = ({
  initialHouseholder,
  householdId,
  householdName,
}: Props) => {
  const isCompleted = initialHouseholder?.isContactCompleted;
  const [isEditMode, { set: setIsEditing }] = useBoolean(!isCompleted);
  const isReadOnly = !isEditMode;
  const [upsertHouseholder] = useUpsertHouseholderMutation();

  const {
    reset,
    register,
    handleSubmit,
    formState: { isDirty, errors },
    control,
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
        setIsEditing(!data.householder?.isContactCompleted);
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
            name="province"
            control={control}
            wrapperProps={tid(ids.provinceInput)}
            data={provinces.map(v => ({
              value: v,
              label: messages.province[v],
            }))}
            placeholder={messages.form.selectInputs.placeholder}
            label={`${t.provinceInput.label}:`}
          />
          <ControlledSelect
            readOnly={isReadOnly}
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
          <ControlledSelect
            readOnly={isReadOnly}
            name="cityOfBirth"
            control={control}
            wrapperProps={tid(ids.cityOfBirthInput)}
            data={cities.map(v => ({
              value: v,
              label: messages.cities[v],
            }))}
            placeholder={messages.form.selectInputs.placeholder}
            label={`${t.cityOfBirthInput.label}:`}
          />
          <Textarea
            readOnly={isReadOnly}
            wrapperProps={tid(ids.addressInput)}
            {...register('address')}
            label={`${t.addressInput.label}:`}
            placeholder={t.addressInput.placeholder}
            error={errors.priorAccommodationAddress?.message}
          />
          <Textarea
            readOnly={isReadOnly}
            wrapperProps={tid(ids.neighborhoodInput)}
            {...register('neighborhood')}
            label={`${t.neighborhoodInput.label}:`}
            placeholder={t.neighborhoodInput.placeholder}
            error={errors.neighborhood?.message}
          />
          <ControlledSelect
            readOnly={isReadOnly}
            name="accommodationType"
            control={control}
            wrapperProps={tid(ids.accommodationTypeInput)}
            data={accommodationTypes.map(v => ({
              value: v,
              label: messages.accommodationTypes[v],
            }))}
            placeholder={messages.form.selectInputs.placeholder}
            label={`${t.accommodationTypeInput.label}:`}
          />
          <ControlledNumberInput
            name="zipCode"
            readOnly={isReadOnly}
            wrapperProps={tid(ids.zipCodeInput)}
            error={errors.zipCode?.message}
            control={control}
            hideControls
            thousandsSeparator=","
            placeholder={t.zipCodeInput.placeholder}
            label={`${t.zipCodeInput.label}:`}
          />

          <Textarea
            readOnly={isReadOnly}
            wrapperProps={tid(ids.priorAccommodationAddressInput)}
            {...register('priorAccommodationAddress')}
            label={`${t.priorAccommodationAddressInput.label}:`}
            placeholder={t.priorAccommodationAddressInput.placeholder}
            error={errors.priorAccommodationAddress?.message}
          />
        </SimpleGrid>
      </Stack>
    </form>
  );
};
