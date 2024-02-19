import { ControlledSelect } from '@camp/design';
import type { AccommodationTypeEnum } from '@camp/domain';
import { createResolver, householderContactSchema } from '@camp/domain';
import { messages } from '@camp/messages';
import { tid } from '@camp/test';
import { SimpleGrid, Stack } from '@mantine/core';
import { useBoolean } from 'ahooks';
import { useForm } from 'react-hook-form';

import { HouseholderFormActions } from '../../HouseholderFormActions';
import { householderContactFormIds as ids } from './HouseholderContactForm.ids';

interface FormSchema {
  province: string;
  city: string;
  neighborhood: string;
  address: string;
  zipCode: string;
  priorAccommodationAddress: string;
  accommodationType: AccommodationTypeEnum;
  description: string;
}

const resolver = createResolver<FormSchema>({
  province: householderContactSchema.province(),
  city: householderContactSchema.city(),
  neighborhood: householderContactSchema.neighborhood(),
  address: householderContactSchema.address(),
  zipCode: householderContactSchema.zipCode(),
  priorAccommodationAddress:
    householderContactSchema.priorAccommodationAddress(),
  accommodationType: householderContactSchema.accommodationType(),
  description: householderContactSchema.description(),
});

const t = messages.householder.contactForm;

export const HouseholderContactForm = ({ initialHouseholder }: any) => {
  const isCompleted = initialHouseholder?.isCompleted;
  const [isEditMode, { set: setIsEditing }] = useBoolean(!isCompleted);
  const isReadOnly = !isEditMode;

  const {
    reset,
    formState: { isDirty },
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

  return (
    <form>
      <Stack spacing={25}>
        <HouseholderFormActions
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
            data={['tehran']}
            label={`${t.provinceInput.label}:`}
            placeholder={t.selectInputs.placeholder}
          />
        </SimpleGrid>
      </Stack>
    </form>
  );
};
