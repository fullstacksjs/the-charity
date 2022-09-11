import type { Meta, Story } from '@storybook/react';

import { GetAdminsIdQuery } from '../operations/queries';
import { App } from './App';

export default {
  component: App,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

const Template: Story = args => <App {...args} />;

// TODO: maybe replace built-in mocks with msw after adding it
const defaultParams = {
  apolloClient: {
    mocks: [
      {
        request: {
          query: GetAdminsIdQuery,
        },
        result: {
          data: {
            admin: [{ id: 1 }, { id: 2 }],
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
        result: { data: {} },
        delay: 1e21,
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
