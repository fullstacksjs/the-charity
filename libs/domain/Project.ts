import { messages } from '@camp/messages';
import { z } from 'zod';

import type { ProjectStatusEnum } from './ApiSchema';

export const projectSchema = {
  description: () => z.string().trim(),
  name: () =>
    z
      .string({ required_error: messages.validation.required })
      .trim()
      .min(3, messages.projects.validation.minLength),
};

export interface Project {
  id: string;
  name: string;
  description?: string;
  status: ProjectStatusEnum;
  startDate?: Date;
  endDate?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export type ProjectKeys = Pick<Project, 'id'>;

export type ProjectDetail = Pick<
  Project,
  | 'createdAt'
  | 'description'
  | 'endDate'
  | 'name'
  | 'startDate'
  | 'status'
  | 'updatedAt'
>;

export type ProjectListItem = Pick<Project, 'name' | 'status'>;
