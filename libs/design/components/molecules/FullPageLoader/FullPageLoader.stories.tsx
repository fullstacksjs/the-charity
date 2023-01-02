import type { ComponentMeta, ComponentStory, Story } from '@storybook/react';

import { FullPageLoader } from './FullPageLoader';

export default {
  component: FullPageLoader,
} as ComponentMeta<typeof FullPageLoader>;

const Template: ComponentStory<typeof FullPageLoader> = () => (
  <FullPageLoader />
);
export const Default: Story = Template.bind({});
