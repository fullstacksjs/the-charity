import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { Breadcrumbs } from './Breadcrumbs';

export default {
  component: Breadcrumbs,
} as ComponentMeta<typeof Breadcrumbs>;

const Template: ComponentStory<typeof Breadcrumbs> = args => (
  <Breadcrumbs {...args} />
);

export const Empty = Template.bind({});
Empty.args = { items: [] };

export const Level1 = Template.bind({});
Level1.args = { items: [{ name: 'Level 1', path: '/families' }] };

export const Level2 = Template.bind({});
Level2.args = {
  items: [
    { name: 'Level 1', path: '/families' },
    { name: 'Level 2', path: '/projects' },
  ],
};

export const Level3 = Template.bind({});
Level3.args = {
  items: [
    { name: 'Level 1', path: '/families' },
    { name: 'Level 2', path: '/projects' },
    { name: 'Level 3', path: '/projects2' },
  ],
};
