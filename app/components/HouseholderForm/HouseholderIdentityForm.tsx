import { DateInput, NumberInput, SelectInput, TextInput } from '@camp/design';
import { CheckMark } from '@camp/icons';
import { messages } from '@camp/messages';
import { Button, Group, SimpleGrid, Stack, Title } from '@mantine/core';

export const HouseholderIdentityForm = () => {
  const t = messages.householder.householderIdentityForm;

  return (
    <form>
      <Stack spacing={25}>
        <Group position="apart">
          <Title order={4} color="fgMuted" weight="bold">
            {t.title}
          </Title>
          <Button type="submit" size="sm" leftIcon={<CheckMark />}>
            {t.submitBtn}
          </Button>
        </Group>
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
            data={[
              {
                value: t.nationalityInput.data.value,
                label: t.nationalityInput.data.label,
              },
            ]}
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
            data={[
              {
                value: t.issuedAtInput.data.value,
                label: t.issuedAtInput.data.label,
              },
            ]}
            placeholder={t.issuedAtInput.placeholder}
            withAsterisk={false}
            label={t.issuedAtInput.label}
          />
          <SelectInput
            data={[
              {
                value: t.religionInput.data.value,
                label: t.religionInput.data.label,
              },
            ]}
            placeholder={t.religionInput.placeholder}
            withAsterisk={false}
            label={t.religionInput.label}
          />
          <SelectInput
            data={[
              {
                value: t.genderInput.data.value,
                label: t.genderInput.data.label,
              },
              {
                value: t.genderInput.data.secondValue,
                label: t.genderInput.data.secondLabel,
              },
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
            data={[
              {
                value: t.cityOfBirthInput.data.value,
                label: t.cityOfBirthInput.data.label,
              },
            ]}
            placeholder={t.cityOfBirthInput.placeholder}
            withAsterisk={false}
            label={t.cityOfBirthInput.label}
          />
        </SimpleGrid>
      </Stack>
    </form>
  );
};
