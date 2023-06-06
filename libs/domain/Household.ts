import { messages } from '@camp/messages';
import { z } from 'zod';

export type SeverityStatus = 'critical' | 'normal';
export type InformationStatus = 'completed' | 'draft';

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
  severityStatus: SeverityStatus;
  informationStatus: InformationStatus;
}
