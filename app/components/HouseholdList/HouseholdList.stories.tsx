import type { Meta, StoryObj } from '@storybook/react';

import { HouseholdList } from './HouseholdList';

export default {
  component: HouseholdList,
} as Meta<typeof HouseholdList>;

type Story = StoryObj<typeof HouseholdList>;

export const Default: Story = {};
