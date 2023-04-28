import { messages } from '@camp/messages';
import type { Meta, StoryObj } from '@storybook/react';

import { FamilyDetail } from './FamilyDetail';

export default {
  component: FamilyDetail,
  args: {
    router: {
      route: ':familyId',
      meta: {
        breadcrumb: messages.familyDetail.title,
      },
    },
  },
} as Meta<typeof FamilyDetail>;

type Story = StoryObj<typeof FamilyDetail>;

export const Default: Story = {};
