import {
  apiMemberListMock,
  completeHouseholdMock,
  householderMock,
} from '@camp/fixtures';
import type { Meta, StoryObj } from '@storybook/react';

import { HouseholderDetail } from './HouseholderDetail';

export default {
  component: HouseholderDetail,
  args: {
    householdId: '1',
    householdName: 'محمد',
  },
} as Meta<typeof HouseholderDetail>;

type Story = StoryObj<typeof HouseholderDetail>;

export const Default: Story = {
  parameters: {
    apolloClient: {
      mocks: [householderMock, completeHouseholdMock, apiMemberListMock],
    },
  },
};
