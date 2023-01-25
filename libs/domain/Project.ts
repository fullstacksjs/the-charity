import { messages } from '@camp/messages';
import { z } from 'zod';

export const projectSchema = {
  description: () => z.string().trim(),
  name: () =>
    z
      .string({ required_error: messages.projects.validation.required })
      .trim()
      .min(3, messages.projects.validation.minLength),
};
