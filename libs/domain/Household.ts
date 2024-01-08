import { messages } from '@camp/messages';
import { toZodLiteralList } from '@camp/zod-addons';
import { createColumnHelper } from '@tanstack/react-table';
import { z } from 'zod';

import type { HouseholdStatusEnum } from './ApiSchema';
import { HouseholdSeverityEnum } from './ApiSchema';

export const severities = Object.values(HouseholdSeverityEnum);

export const householdSchema = {
  name: () =>
    z
      .string({ required_error: messages.validation.required })
      .trim()
      .min(1, messages.validation.required)
      .min(3, messages.households.validation.minLength),
  severity: () => z.union(toZodLiteralList(severities)),
};

export interface Household {
  id: string;
  name: string;
  code: string;
  severity: HouseholdSeverityEnum;
  status: HouseholdStatusEnum;
  createdAt: Date;
  updatedAt: Date;
  isCompleted: boolean;
  membersCount: number;
}

export type HouseholdKeys = Pick<Household, 'id'>;

export type HouseholdDetail = Pick<
  Household,
  | 'code'
  | 'createdAt'
  | 'isCompleted'
  | 'membersCount'
  | 'name'
  | 'severity'
  | 'status'
  | 'updatedAt'
>;

export type HouseholdListItem = Pick<
  Household,
  'isCompleted' | 'name' | 'severity' | 'status'
>;

export const householdColumnHelper = createColumnHelper<
  HouseholdKeys & HouseholdListItem
>();
