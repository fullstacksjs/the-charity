import type { Meta, StoryObj } from '@storybook/react';

import { MemberForm } from './MemberForm';

export default {
  component: MemberForm,
} as Meta<typeof MemberForm>;

type Story = StoryObj<typeof MemberForm>;

export const Default: Story = {};
