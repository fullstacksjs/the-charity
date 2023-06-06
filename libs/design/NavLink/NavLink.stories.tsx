import { PeopleIcon } from '@camp/icons';
import { messages } from '@camp/messages';
import type { Meta, StoryObj } from '@storybook/react';

import { NavLink } from './NavLink';

export default {
  component: NavLink,
  argTypes: {
    label: { type: 'string' },
    to: { type: 'string' },
  },
} as Meta<typeof NavLink>;

type Story = StoryObj<typeof NavLink>;

export const Default: Story = {
  args: {
    label: messages.households.title,
    to: '/dashboard/households',
    icon: <PeopleIcon width="24" height="24" />,
  },
};
