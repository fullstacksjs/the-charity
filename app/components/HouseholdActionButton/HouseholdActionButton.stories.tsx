import type { Meta, StoryObj } from '@storybook/react';

import { HouseholdActionButton } from './HouseholdActionButton';

export default {
  component: HouseholdActionButton,
} as Meta<typeof HouseholdActionButton>;

type Story = StoryObj<typeof HouseholdActionButton>;

export const Default: Story = {
  args: { to: '/' },
};
