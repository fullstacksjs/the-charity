import { noop } from '@fullstacksjs/toolbox';
import type { Meta, StoryObj } from '@storybook/react';

import { ExitNavLink } from './ExitNavLink';

export default {
  argTypes: {
    onClick: {
      defaultValue: noop,
      type: 'function',
      description: 'onClick logic',
    },
  },
  component: ExitNavLink,
} as Meta<typeof ExitNavLink>;

type Story = StoryObj<typeof ExitNavLink>;

export const Default: Story = {
  render: () => <ExitNavLink />,
};
