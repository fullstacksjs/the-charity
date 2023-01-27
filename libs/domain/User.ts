import { messages } from '@camp/messages';
import { z } from 'zod';

export const userSchema = {
  email: () =>
    z
      .string({ required_error: messages.validation.email.required })
      .trim()
      .min(1, messages.validation.email.required)
      .email(messages.validation.email.wrong),

  password: () =>
    z
      .string({ required_error: messages.validation.password.required })
      .min(1, messages.validation.password.required),
};
