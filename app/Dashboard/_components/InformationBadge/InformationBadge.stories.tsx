import type { Meta, StoryObj } from '@storybook/react';

import { InformationBadge } from './InformationBadge';

export default {
  component: InformationBadge,
} as Meta<typeof InformationBadge>;

type Story = StoryObj<typeof InformationBadge>;

export const Default: Story = {};
export const Completed: Story = {
  args: {
    status: 'completed',
  },
};
export const Draft: Story = {
  args: {
    status: 'draft',
  },
};
