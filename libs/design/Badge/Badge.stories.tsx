import type { Meta, StoryObj } from '@storybook/react';

import { Badge } from './Badge';

export default {
  component: Badge,
} as Meta<typeof Badge>;

type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    children: 'پیش‌فرض',
  },
};

export const Success: Story = {
  args: {
    status: 'success',
    children: 'تکمیل شده',
  },
};

export const Warning: Story = {
  args: {
    status: 'warning',
    children: 'خطا',
  },
};

export const Error: Story = {
  args: {
    status: 'error',
    children: 'اضطراری',
  },
};

export const Info: Story = {
  args: {
    status: 'info',
    children: 'اطلاعات',
  },
};
