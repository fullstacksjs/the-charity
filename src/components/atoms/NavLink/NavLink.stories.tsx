import { PackageIcon, PeopleIcon } from '@camp/design';
import { messages } from '@camp/messages';
import type { Meta, Story } from '@storybook/react';

import type { NavLinkProps } from './NavLink';
import { NavLink } from './NavLink';

export default {
  component: NavLink,
  argTypes: {
    label: { type: 'string' },
    path: { type: 'string' },
  },
} as Meta<NavLinkProps>;

const Template: Story<NavLinkProps> = args => <NavLink {...args} />;

export const Families: Story<NavLinkProps> = Template.bind({});
Families.args = {
  label: messages.families.title,
  path: '/dashboard/families',
  icon: <PeopleIcon width="24" height="24" />,
};

export const Projects: Story<NavLinkProps> = Template.bind({});
Projects.args = {
  label: messages.projects.title,
  path: '/dashboard/projects',
  icon: <PackageIcon width="24" height="24" />,
};
