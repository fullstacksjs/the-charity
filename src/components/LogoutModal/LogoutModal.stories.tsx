import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { LogoutModal } from './LogoutModal';

export default {
  argTypes: {
    opened: {
      defaultValue: true,
      type: 'boolean',
      description: 'Mounts modal if true',
    },
  },
  component: LogoutModal,
} as ComponentMeta<typeof LogoutModal>;

const Template: ComponentStory<typeof LogoutModal> = args => {
  return <LogoutModal {...args} />;
};

export const Default = Template.bind({});
