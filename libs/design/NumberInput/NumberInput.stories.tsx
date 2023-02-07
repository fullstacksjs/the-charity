import { messages } from '@camp/messages';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { NumberInput } from './NumberInput';

const t = messages.householder.householderIdentityForm;

export default {
  argTypes: {
    label: {
      defaultValue: t.ssnInput.label,
    },
  },
  component: NumberInput,
} as ComponentMeta<typeof NumberInput>;

const Template: ComponentStory<typeof NumberInput> = args => (
  <NumberInput {...args} />
);

export const Default: ComponentStory<typeof NumberInput> = Template.bind({});
Default.args = {
  placeholder: t.ssnInput.placeholder,
  description: 'توضیحات',
};

export const Error: ComponentStory<typeof NumberInput> = Template.bind({});
Error.args = {
  ...Default.args,
  error: messages.validation.required,
};

export const WithAsterisk: ComponentStory<typeof NumberInput> = Template.bind(
  {},
);
WithAsterisk.args = {
  ...Default.args,
  withAsterisk: true,
};
