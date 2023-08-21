import type { Household } from '@camp/domain';
import { HouseholdSeverityEnum, HouseholdStatusEnum } from '@camp/domain';

export const HouseholdListFixture: Household[] = [
  {
    id: '1',
    name: 'خانوار اول',
    code: 'F00001',
    createdAt: new Date('2022-12-23'),
    updatedAt: new Date('2022-12-25'),
    severity: HouseholdSeverityEnum.Critical,
    status: HouseholdStatusEnum.Completed,
    isCompleted: true,
  },
  {
    id: '2',
    name: 'خانوار دوم',
    code: 'F00001',
    createdAt: new Date('2022-11-23'),
    updatedAt: new Date('2022-11-25'),
    severity: HouseholdSeverityEnum.Critical,
    status: HouseholdStatusEnum.Draft,
    isCompleted: false,
  },
  {
    id: '3',
    name: 'خانوار سوم',
    code: 'F00001',
    createdAt: new Date('2022-12-22'),
    updatedAt: new Date('2022-12-24'),
    severity: HouseholdSeverityEnum.Normal,
    status: HouseholdStatusEnum.Completed,
    isCompleted: true,
  },
];
