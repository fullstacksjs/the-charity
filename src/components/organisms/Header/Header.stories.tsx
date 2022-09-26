import type { Meta, Story } from '@storybook/react';

import { Header } from './Header';

export default {
  component: Header,
} as Meta;

const Template: Story = () => <Header />;

export const Default: Story = Template.bind({});
