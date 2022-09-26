import { GetAdminListDocument } from '@camp/data-layer';
import type { Meta, Story } from '@storybook/react';

import { Home } from './Home';

export default {
  component: Home,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

const Template: Story = args => <Home {...args} />;

const defaultParams = {
  apolloClient: {
    mocks: [
      {
        request: {
          query: GetAdminListDocument,
        },
        result: {
          data: {
            admins: [{ id: 1 }, { id: 2 }],
          },
        },
      },
    ],
  },
} as const;

export const Default: Story = Template.bind({});
Default.parameters = defaultParams;

export const Loading: Story = Template.bind({});
Loading.parameters = {
  apolloClient: {
    mocks: [
      {
        ...defaultParams.apolloClient.mocks[0],
        delay: 1e14,
      },
    ],
  },
};

export const Failure: Story = Template.bind({});
Failure.parameters = {
  apolloClient: {
    mocks: [
      {
        ...defaultParams.apolloClient.mocks[0],
        error: new Error('A Network Error Occurred'),
      },
    ],
  },
};
