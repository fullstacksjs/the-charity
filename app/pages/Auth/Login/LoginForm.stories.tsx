import type { Meta, StoryObj } from '@storybook/react';

import { LoginForm } from './LoginForm';

export default {
  component: LoginForm,
} as Meta<typeof LoginForm>;

type Story = StoryObj<typeof LoginForm>;

export const Default: Story = {};
