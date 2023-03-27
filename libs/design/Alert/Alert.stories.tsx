import { errorMessages } from '@camp/messages';
import type { Meta, StoryObj } from '@storybook/react';

import { Alert } from './Alert';

export default {
  component: Alert,
} as Meta<typeof Alert>;

type Story = StoryObj<typeof Alert>;
export const Error: Story = {
  render: args => <Alert {...args} />,
  args: {
    message: errorMessages.UNKNOWN_ERROR,
    type: 'error',
  },
};
