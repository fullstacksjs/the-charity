import { messages } from '@camp/messages';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { DateInput } from './DateInput';

export default {
  component: DateInput,
  argTypes: {
    label: {
      defaultValue: 'تاریخ',
    },
    withAsterisk: {
      defaultValue: false,
    },
  },
} as ComponentMeta<typeof DateInput>;

const Template: ComponentStory<typeof DateInput> = args => (
  <DateInput {...args} />
);

export const Default: ComponentStory<typeof DateInput> = Template.bind({});
export const Error: ComponentStory<typeof DateInput> = Template.bind({});
Error.argTypes = {
  error: {
    defaultValue: messages.validation.required,
  },
};
export const WithAsterisk: ComponentStory<typeof DateInput> = Template.bind({});
WithAsterisk.argTypes = {
  withAsterisk: {
    type: 'boolean',
    defaultValue: true,
  },
};
