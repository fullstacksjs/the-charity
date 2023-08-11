import {
  GenderEnum,
  MemberStatus,
  NationalityEnum,
  ReligionEnum,
} from '@camp/domain';
import type { Meta, StoryObj } from '@storybook/react';

import { MemberForm } from './MemberForm';

export default {
  component: MemberForm,
} as Meta<typeof MemberForm>;

type Story = StoryObj<typeof MemberForm>;

export const Default: Story = {};

export const WithData: Story = {
  args: {
    initialMember: {
      isCompleted: true,
      name: 'محمد',
      surname: 'محمد علیان',
      status: MemberStatus.Completed,
      dob: new Date('2000/01/01'),
      fatherName: 'علی',
      gender: GenderEnum.Male,
      nationalId: '1234567890',
      nationality: NationalityEnum.Ir,
      religion: ReligionEnum.Islam,
    },
  },
};
