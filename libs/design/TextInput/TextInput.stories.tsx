import { messages } from '@camp/messages';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { TextInput } from './TextInput';

const t = messages.householder.householderIdentityForm;

export default {
  argTypes: {
    label: {
      defaultValue: t.nameInput.label,
    },
  },
  component: TextInput,
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = args => (
  <TextInput {...args} />
);

export const Default: ComponentStory<typeof TextInput> = Template.bind({});
Default.args = {
  placeholder: t.nameInput.placeholder,
  description: 'توضیحات',
};

export const Error: ComponentStory<typeof TextInput> = Template.bind({});
Error.args = {
  ...Default.args,
  error: messages.validation.required,
};

export const WithAsterisk: ComponentStory<typeof TextInput> = Template.bind({});
WithAsterisk.args = {
  ...Default.args,
  withAsterisk: true,
};
