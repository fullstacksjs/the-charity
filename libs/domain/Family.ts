import { messages } from '@camp/messages';
import { z } from 'zod';

export type SeverityStatus = 'critical' | 'normal';
export type InformationStatus = 'completed' | 'draft';

export const familySchema = {
  name: () =>
    z
      .string({ required_error: messages.validation.required })
      .trim()
      .min(1, messages.validation.required)
      .min(3, messages.families.validation.minLength),
};

export interface Family {
  id: string;
  name: string;
  code: string;
  severityStatus: SeverityStatus;
  informationStatus: InformationStatus;
}
