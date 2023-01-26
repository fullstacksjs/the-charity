import { messages } from '@camp/messages';
import { z } from 'zod';

export const familySchema = {
  name: () =>
    z
      .string({ required_error: messages.validation.required })
      .trim()
      .min(1, messages.validation.required)
      .min(3, messages.validation.minLength3),
};
