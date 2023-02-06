import { DateInput, NumberInput, SelectInput, TextInput } from '@camp/design';
import { messages } from '@camp/messages';
import { SimpleGrid } from '@mantine/core';

export const HouseholderIdentityForm = () => {
  const t = messages.householder.householderIdentityForm;

  return (
    <form>
      <SimpleGrid cols={3} spacing="lg" verticalSpacing={20}>
        <TextInput
          label={t.nameInput.label}
          placeholder={t.nameInput.placeholder}
          withAsterisk={false}
        />

        <TextInput
          label={t.lastNameInput.label}
          placeholder={t.lastNameInput.placeholder}
          withAsterisk={false}
        />
        <TextInput
          label={t.fatherNameInput.label}
          placeholder={t.fatherNameInput.placeholder}
          withAsterisk={false}
        />
        <SelectInput
          data={[{ value: 'IR', label: 'ایرانی' }]}
          placeholder={t.nationalityInput.placeholder}
          withAsterisk={false}
          label={t.nationalityInput.label}
        />
        <NumberInput
          placeholder={t.nationalIdInput.placeholder}
          withAsterisk={false}
          label={t.nationalIdInput.label}
        />
        <NumberInput
          placeholder={t.ssnInput.placeholder}
          withAsterisk={false}
          label={t.ssnInput.label}
        />
        <SelectInput
          data={[{ value: 'tehran', label: 'تهران' }]}
          placeholder={t.issuedAtInput.placeholder}
          withAsterisk={false}
          label={t.issuedAtInput.label}
        />
        <SelectInput
          data={[{ value: 'islam', label: 'اسلام' }]}
          placeholder={t.religionInput.placeholder}
          withAsterisk={false}
          label={t.religionInput.label}
        />
        <SelectInput
          data={[
            { value: 'male', label: 'مرد' },
            { value: 'female', label: 'زن' },
          ]}
          placeholder={t.genderInput.placeholder}
          withAsterisk={false}
          label={t.genderInput.label}
        />
        <DateInput
          label={t.dateOfBirthInput.label}
          placeholder={t.dateOfBirthInput.placeholder}
          withAsterisk={false}
        />
        <SelectInput
          data={[{ value: 'tehran', label: 'تهران' }]}
          placeholder={t.cityOfBirthInput.placeholder}
          withAsterisk={false}
          label={t.cityOfBirthInput.label}
        />
      </SimpleGrid>
    </form>
  );
};
