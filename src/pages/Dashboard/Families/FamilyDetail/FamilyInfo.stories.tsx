import { messages } from '@camp/messages';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { FamilyInfo } from './FamilyInfo';

export default {
  component: FamilyInfo,
  args: {
    router: {
      route: '/family-detail',
    },
    title: messages.familyDetail.familyInfo.title('نام'),
    value: messages.familyDetail.familyInfo.title('فول استک زاده'),
    isBadge: false,
  },
} as ComponentMeta<typeof FamilyInfo>;

const Template: ComponentStory<typeof FamilyInfo> = args => (
  <FamilyInfo {...args} />
);

export const Default: ComponentStory<typeof FamilyInfo> = Template.bind({});

export const WithBadge: ComponentStory<typeof FamilyInfo> = Template.bind({});
WithBadge.args = {
  ...Default.args,
  isBadge: true,
};

export const Error: ComponentStory<typeof FamilyInfo> = Template.bind({});
Error.args = {
  ...WithBadge.args,
  badgeStatus: 'red',
};

export const Warning: ComponentStory<typeof FamilyInfo> = Template.bind({});
Warning.args = {
  ...WithBadge.args,
  badgeStatus: 'yellow',
};

export const Success: ComponentStory<typeof FamilyInfo> = Template.bind({});
Success.args = {
  ...WithBadge.args,
  badgeStatus: 'green',
};
