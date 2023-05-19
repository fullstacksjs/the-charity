import type { Meta, StoryObj } from '@storybook/react';

import { CreateMemberButton } from './CreateMemberButton';

export default {
  component: CreateMemberButton,
} as Meta<typeof CreateMemberButton>;

type Story = StoryObj<typeof CreateMemberButton>;

export const Default: Story = {};
