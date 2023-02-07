import { messages } from '@camp/messages';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { SelectInput } from './SelectInput';

const t = messages.householder.householderIdentityForm;

export default {
  args: {
    data: [
      {
        value: t.cityOfBirthInput.data.value,
        label: t.cityOfBirthInput.data.label,
      },
    ],
    label: t.cityOfBirthInput.label,
  },
  component: SelectInput,
} as ComponentMeta<typeof SelectInput>;

const Template: ComponentStory<typeof SelectInput> = args => (
  <SelectInput {...args} />
);

export const Default: ComponentStory<typeof SelectInput> = Template.bind({});
Default.args = {
  placeholder: t.cityOfBirthInput.placeholder,
  description: 'توضیحات',
};

export const Error: ComponentStory<typeof SelectInput> = Template.bind({});
Error.args = {
  ...Default.args,
  error: messages.validation.required,
};

export const WithAsterisk: ComponentStory<typeof SelectInput> = Template.bind(
  {},
);
WithAsterisk.args = {
  ...Default.args,
  withAsterisk: true,
};
