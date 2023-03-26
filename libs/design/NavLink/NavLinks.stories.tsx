import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { links } from '../Sidebar';
import { NavLinks } from './NavLinks';

export default {
  component: NavLinks,
} as ComponentMeta<typeof NavLinks>;

const Template: ComponentStory<typeof NavLinks> = args => (
  <NavLinks {...args} />
);

export const Default = Template.bind({});
Default.args = {
  links,
};
