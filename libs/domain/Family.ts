import { messages } from '@camp/messages';
import { z } from 'zod';

export const familySchema = {
  name: () =>
    z
      .string({ required_error: messages.families.validation.required })
      .trim()
      .min(1, messages.families.validation.required)
      .min(3, messages.families.validation.minLength),
};
