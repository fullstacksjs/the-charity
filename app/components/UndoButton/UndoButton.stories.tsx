import type { Meta, StoryObj } from '@storybook/react';

import { UndoButton } from './UndoButton';

export default {
  component: UndoButton,
} as Meta<typeof UndoButton>;

type Story = StoryObj<typeof UndoButton>;

export const Default: Story = {};
