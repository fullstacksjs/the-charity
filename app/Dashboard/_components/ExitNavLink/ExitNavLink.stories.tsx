import type { Meta, StoryObj } from '@storybook/react';

import { ExitNavLink } from './ExitNavLink';

export default {
  component: ExitNavLink,
} as Meta<typeof ExitNavLink>;

type Story = StoryObj<typeof ExitNavLink>;

export const Default: Story = {
  render: () => <ExitNavLink />,
};
