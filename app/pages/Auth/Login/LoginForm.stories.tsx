import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { LoginForm } from './LoginForm';

export default {
  component: LoginForm,
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = () => <LoginForm />;

export const Default: ComponentStory<typeof LoginForm> = Template.bind({});
