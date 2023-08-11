import type { Meta, StoryObj } from '@storybook/react';

import { DestructiveButton } from './DestructiveButton';

export default {
  component: DestructiveButton,
} as Meta<typeof DestructiveButton>;

type Story = StoryObj<typeof DestructiveButton>;

export const Default: Story = {
  args: {
    children: 'پاک کردن',
  },
};
