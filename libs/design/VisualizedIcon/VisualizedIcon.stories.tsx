import { PeopleIcon } from '@camp/icons';
import type { Meta, StoryObj } from '@storybook/react';

import { VisualizedIcon } from './VisualizedIcon';

export default {
  component: VisualizedIcon,
} as Meta<typeof VisualizedIcon>;

type Story = StoryObj<typeof VisualizedIcon>;

export const Default: Story = {
  args: {
    Icon: PeopleIcon,
  },
};
