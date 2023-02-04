import { type Meta, type Story } from '@storybook/react';

import { CreateProjectButton } from './CreateProjectButton';

export default {
  component: CreateProjectButton,
} as Meta;

const Template: Story = args => <CreateProjectButton {...args} />;

export const Default: Story = Template.bind({});
