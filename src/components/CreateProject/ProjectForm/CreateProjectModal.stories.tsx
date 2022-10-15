import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { createSbApolloMock } from '../../utils/createSbApolloMock';
import { CreateProjectModal } from './CreateProjectModal';

export default {
  argTypes: {
    opened: {
      defaultValue: true,
      type: 'boolean',
      description: 'Mounts modal if true',
    },
  },
  component: CreateProjectModal,
  parameters: createSbApolloMock(),
} as ComponentMeta<typeof CreateProjectModal>;

const Template: ComponentStory<typeof CreateProjectModal> = args => {
  return <CreateProjectModal {...args} />;
};

export const Default = Template.bind({});
