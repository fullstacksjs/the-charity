import type { Meta, StoryObj } from '@storybook/react';

import { FamilyActionButton } from './FamilyActionButton';

export default {
  component: FamilyActionButton,
} as Meta<typeof FamilyActionButton>;

type Story = StoryObj<typeof FamilyActionButton>;

export const Default: Story = {
  args: { to: '/' },
};
