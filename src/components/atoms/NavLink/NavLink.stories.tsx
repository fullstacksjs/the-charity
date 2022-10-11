import { PeopleIcon } from '@camp/design';
import { messages } from '@camp/messages';
import type { Meta, Story } from '@storybook/react';

import type { NavLinkProps } from './NavLink';
import { NavLink } from './NavLink';

export default {
  component: NavLink,
  argTypes: {
    label: { type: 'string' },
    path: { type: 'string' },
    icon: { type: 'boolean' },
  },
} as Meta<NavLinkProps>;

const Template: Story<NavLinkProps> = args => (
  <NavLink
    {...args}
    icon={args.icon ? <PeopleIcon width="24" height="24" /> : undefined}
  />
);

export const Default: Story<NavLinkProps> = Template.bind({});

Default.args = {
  label: messages.families.title,
  path: '/families',
  icon: true,
};
