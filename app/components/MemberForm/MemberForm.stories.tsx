import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import { MemberForm } from './MemberForm';

export default {
  component: MemberForm,
} as ComponentMeta<typeof MemberForm>;

const Template: ComponentStory<typeof MemberForm> = () => <MemberForm />;

export const Default: ComponentStory<typeof MemberForm> = Template.bind({});
