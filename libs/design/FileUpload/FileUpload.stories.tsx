import type { FailedFile, SuccessFile } from '@camp/domain';
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
      {
        name: 'Some Random Name',
        remote: { id: 'x', url: 'https://nowhere.com' },
        status: 'Success',
        id: 123,
        file: new File([], 'random'),
      } as SuccessFile,
      {
        name: 'Some Random Name Which is long',
        remote: { id: 'x', url: 'https://nowhere.com' },
        status: 'Success',
        id: 123,
        file: new File([], 'random'),
      } as SuccessFile,
      {
        name: 'Some Random Name Which is very very long',
        remote: { id: 'x', url: 'https://nowhere.com' },
        status: 'Success',
        id: 123,
        file: new File([], 'random'),
      } as SuccessFile,
      {
        name: 'Some Random Name Which is even longer than what we had before',
        remote: { id: 'x', url: 'https://nowhere.com' },
        status: 'Success',
        id: 123,
        file: new File([], 'random'),
      } as SuccessFile,
    ],
  },
};

export const Error: Story = {
  args: {
    variant: 'error',
    required: true,
    defaultFiles: [
      {
        name: 'Some Random Name',
        status: 'Failed',
        id: 123,
        file: new File([], 'random'),
      } as FailedFile,
      {
        name: 'Some Random Name Which is long',
        status: 'Failed',
        id: 123,
        file: new File([], 'random'),
      } as FailedFile,
      {
        name: 'Some Random Name Which is long',
        status: 'Failed',
        id: 123,
        file: new File([], 'random'),
      } as FailedFile,
      {
        name: 'Some Random Name Which is long',
        status: 'Failed',
        id: 123,
        file: new File([], 'random'),
      } as FailedFile,
    ],
  },
};
