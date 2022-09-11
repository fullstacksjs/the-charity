import type { Meta, Story } from '@storybook/react';

import { GetSchemaDescriptionQuery } from '../operations/queries';
import { App } from './App';

export default {
  component: App,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

const Template: Story = args => <App {...args} />;

export const Default: Story = Template.bind({});

Default.parameters = {
  apolloClient: {
    mocks: [
      {
        request: {
          query: GetSchemaDescriptionQuery,
        },
        result: {
          data: {
            __schema: { description: 'schema description' },
          },
        },
        error: new Error('This is a mock network error'),
      },
    ],
  },
};
