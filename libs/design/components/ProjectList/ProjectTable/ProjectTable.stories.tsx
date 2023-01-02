import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { ProjectTable } from './ProjectTable';

export default {
  component: ProjectTable,
} as ComponentMeta<typeof ProjectTable>;

const Template: ComponentStory<typeof ProjectTable> = () => <ProjectTable />;

export const Default: ComponentStory<typeof ProjectTable> = Template.bind({});
