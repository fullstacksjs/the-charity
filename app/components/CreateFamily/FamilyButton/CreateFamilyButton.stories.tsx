import { type Meta, type Story } from '@storybook/react';

import { CreateFamilyButton } from './CreateFamilyButton';

export default {
  component: CreateFamilyButton,
} as Meta;

const Template: Story = args => <CreateFamilyButton {...args} />;

export const Default: Story = Template.bind({});
