import type { Meta, Story } from '@storybook/react';

import NavList from './NavList';

export default {
  component: NavList,
} as Meta;

const Template: Story = () => <NavList />;

export const Default: Story = Template.bind({});
