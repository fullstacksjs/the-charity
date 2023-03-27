import type { Meta, StoryObj } from '@storybook/react';

import { Breadcrumbs } from './Breadcrumbs';

export default {
  component: Breadcrumbs,
} as Meta<typeof Breadcrumbs>;

type Story = StoryObj<typeof Breadcrumbs>;

export const Empty: Story = {
  args: { items: [] },
};

export const Level1: Story = {
  args: { items: [{ name: 'Level 1', path: '/families' }] },
};

export const Level2: Story = {
  args: {
    items: [
      { name: 'Level 1', path: '/families' },
      { name: 'Level 2', path: '/projects' },
    ],
  },
};

export const Level3: Story = {
  args: {
    items: [
      { name: 'Level 1', path: '/families' },
      { name: 'Level 2', path: '/projects' },
      { name: 'Level 3', path: '/projects2' },
    ],
  },
};
