import { messages } from '@camp/messages';
import { z } from 'zod';

export const projectSchema = {
  description: () => z.string().trim(),
  name: () =>
    z
      .string({ required_error: messages.validation.required })
      .trim()
      .min(3, messages.projects.validation.minLength),
};

export type ProjectStatus = 'done' | 'inProgress' | 'planning' | 'suspended';

export interface Project {
  id: string;
  name: string;
  description?: string | null;
  status: ProjectStatus;
}
