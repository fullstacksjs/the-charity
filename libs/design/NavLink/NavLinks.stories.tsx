import type { Meta, StoryObj } from '@storybook/react';

import { links } from '../Sidebar';
import { NavLinks } from './NavLinks';

export default {
  component: NavLinks,
} as Meta<typeof NavLinks>;

type Story = StoryObj<typeof NavLinks>;

export const Default: Story = {
  render: args => <NavLinks {...args} />,

  args: {
    links,
  },
};
