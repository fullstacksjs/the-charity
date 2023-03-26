import type { Meta, StoryObj } from '@storybook/react';

import { MemberList } from './MemberForm';

export default {
  component: MemberList,
} as Meta<typeof MemberList>;

type Story = StoryObj<typeof MemberList>;

export const Default: Story = {};
