import type { Meta, StoryObj } from '@storybook/react';

import { HouseholderForm } from './HouseholderForm';

export default {
  component: HouseholderForm,
} as Meta<typeof HouseholderForm>;

type Story = StoryObj<typeof HouseholderForm>;

export const Default: Story = {
  args: { householdId: 'null' },
};
