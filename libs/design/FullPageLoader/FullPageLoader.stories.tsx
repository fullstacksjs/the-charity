import type { Meta, StoryObj } from '@storybook/react';

import { FullPageLoader } from './FullPageLoader';

export default {
  component: FullPageLoader,
} as Meta<typeof FullPageLoader>;

type Story = StoryObj<typeof FullPageLoader>;

export const Default: Story = {};
