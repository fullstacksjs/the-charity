import { householdListMock } from '@camp/fixtures';
import type { Meta, StoryObj } from '@storybook/react';

import { HouseholdList } from './HouseholdList';

export default {
  component: HouseholdList,
  parameters: {
    apolloClient: {
      mocks: [householdListMock],
    },
  },
} as Meta<typeof HouseholdList>;

type Story = StoryObj<typeof HouseholdList>;

export const Default: Story = {};
