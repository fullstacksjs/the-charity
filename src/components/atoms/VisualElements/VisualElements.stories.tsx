import { PeopleIcon } from '@camp/design';
import type { Meta, Story } from '@storybook/react';

import { VisualElements } from './VisualElements';

export default {
  component: VisualElements,
  argTypes: {
    icon: PeopleIcon,
  },
} as Meta;

const Template: Story = () => (
  <VisualElements icon={<PeopleIcon w="33" h="33" />} />
);

export const Default: Story = Template.bind({});
