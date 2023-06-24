import { HouseholdSeverityEnum } from '@camp/domain';
import type { Meta, StoryObj } from '@storybook/react';

import { SeverityBadge } from './SeverityBadge';

export default {
  component: SeverityBadge,
} as Meta<typeof SeverityBadge>;

type Story = StoryObj<typeof SeverityBadge>;

export const Default: Story = {};
export const Normal: Story = {
  args: {
    severity: HouseholdSeverityEnum.Normal,
  },
};
export const Critical: Story = {
  args: {
    severity: HouseholdSeverityEnum.Critical,
  },
};
