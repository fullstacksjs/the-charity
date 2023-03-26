import { PeopleIcon } from '@camp/icons';
import { messages } from '@camp/messages';
import type { Meta, Story } from '@storybook/react';

import type { NavLinkProps } from './NavLink';
import { NavLink } from './NavLink';

export default {
  component: NavLink,
  argTypes: {
    label: { type: 'string' },
    to: { type: 'string' },
  },
} as Meta<NavLinkProps>;

const Template: Story<NavLinkProps> = args => <NavLink {...args} />;

export const Default: Story<NavLinkProps> = Template.bind({});
Default.args = {
  label: messages.families.title,
  to: '/dashboard/families',
  icon: <PeopleIcon width="24" height="24" />,
};
