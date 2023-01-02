import { messages } from '@camp/messages';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { FamilyDetail } from './FamilyDetail';

export default {
  component: FamilyDetail,
  args: {
    router: {
      route: ':familyId',
      meta: {
        breadcrumb: messages.familyDetail.title,
      },
    },
  },
} as ComponentMeta<typeof FamilyDetail>;

const Template: ComponentStory<typeof FamilyDetail> = () => <FamilyDetail />;

export const Default: ComponentStory<typeof FamilyDetail> = Template.bind({});
