import { noop } from '@fullstacksjs/toolbox';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { ExitNavLink } from './ExitNavLink';

export default {
  argTypes: {
    onClick: {
      defaultValue: noop,
      type: 'function',
      description: 'onClick logic',
    },
  },
  component: ExitNavLink,
} as ComponentMeta<typeof ExitNavLink>;

const Template: ComponentStory<typeof ExitNavLink> = () => {
  return <ExitNavLink />;
};

export const Default = Template.bind({});
