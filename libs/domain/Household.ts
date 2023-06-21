import { messages } from '@camp/messages';
import { z } from 'zod';

import type { HouseholdSeverityEnum, HouseholdStatusEnum } from './ApiSchema';

export const householdSchema = {
  name: () =>
    z
      .string({ required_error: messages.validation.required })
      .trim()
      .min(1, messages.validation.required)
      .min(3, messages.households.validation.minLength),
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
}

export type HouseholdKeys = Pick<Household, 'id'>;

export type HouseholdDetail = Pick<
  Household,
  | 'code'
  | 'createdAt'
  | 'isCompleted'
  | 'name'
  | 'severity'
  | 'status'
  | 'updatedAt'
>;

export type HouseholdListItem = Pick<
  Household,
  'isCompleted' | 'name' | 'severity' | 'status'
>;
