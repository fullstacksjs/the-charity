import type { Meta, StoryObj } from '@storybook/react';

import { HouseholderIdentityForm } from './HouseholderIdentityForm';

export default {
  component: HouseholderIdentityForm,
} as Meta<typeof HouseholderIdentityForm>;

type Story = StoryObj<typeof HouseholderIdentityForm>;

export const Default: Story = {
  args: { householdId: 'null' },
};
