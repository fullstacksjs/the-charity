import { type Meta, type Story } from '@storybook/react';

import { SideBar } from './Sidebar';

export default {
  component: SideBar,
} as Meta;

const Template: Story = () => <SideBar />;

export const Default: Story = Template.bind({});
