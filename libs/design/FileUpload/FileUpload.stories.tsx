import type { Meta, StoryObj } from '@storybook/react';

import type { FileUploadProps } from './FileUpload';
import { FileUpload } from './FileUpload';

export default {
  argTypes: {
    onDrop: { control: false },
    defaultFiles: { control: false },
  },
  component: FileUpload,
  args: {
    helper: 'فایل باید کمتر از ۲۰ مگابایت باشد',
    label: 'اسناد',
  },
} as Meta<FileUploadProps>;

type Story = StoryObj<FileUploadProps>;

export const Default: Story = {};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const WithFiles: Story = {
  args: {
    defaultFiles: [
      { name: 'Some Random Name' } as File,
      { name: 'Some Random Name Which is long' } as File,
      { name: 'Some Random Name Which is very very long' } as File,
      {
        name: 'Some Random Name Which is even longer than what we had before',
      } as File,
    ],
  },
};

export const Error: Story = {
  args: {
    variant: 'error',
    required: true,
    defaultFiles: [
      { name: 'Some Random Name' } as File,
      { name: 'Some Random Name Which is long' } as File,
      { name: 'Some Random Name Which is long' } as File,
      { name: 'Some Random Name Which is long' } as File,
    ],
  },
};
