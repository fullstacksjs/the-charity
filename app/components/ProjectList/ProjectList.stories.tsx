import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { ProjectList } from './ProjectList';

export default {
  component: ProjectList,
} as ComponentMeta<typeof ProjectList>;

const Template: ComponentStory<typeof ProjectList> = () => <ProjectList />;

export const Default: ComponentStory<typeof ProjectList> = Template.bind({});
