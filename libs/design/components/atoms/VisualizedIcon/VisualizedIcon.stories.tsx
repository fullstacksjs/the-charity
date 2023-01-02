import type { Meta, Story } from '@storybook/react';

import { PeopleIcon } from '../../../icons';
import { VisualizedIcon } from './VisualizedIcon';

export default {
  component: VisualizedIcon,
  argTypes: {
    icon: PeopleIcon,
  },
} as Meta;

const Template: Story = () => (
  <VisualizedIcon icon={<PeopleIcon width="33" height="33" />} />
);

export const Default: Story = Template.bind({});
