import { MockedProvider } from '@apollo/client/testing';
import { projectListMock } from '@camp/fixtures';
import type { Meta, StoryObj } from '@storybook/react';

import { ProjectList } from './ProjectList';

export default {
  component: ProjectList,
  parameters: {
    apolloClient: {
      MockedProvider,
      mocks: [projectListMock],
    },
  },
} as Meta<typeof ProjectList>;

type Story = StoryObj<typeof ProjectList>;

export const Default: Story = {};
