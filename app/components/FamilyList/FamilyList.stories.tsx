import type { Meta, StoryObj } from '@storybook/react';

import { FamilyList } from './FamilyList';

export default {
  component: FamilyList,
} as Meta<typeof FamilyList>;

type Story = StoryObj<typeof FamilyList>;

export const Default: Story = {};
