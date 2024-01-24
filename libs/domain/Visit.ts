import { z } from 'zod';

import type { VisitStatusEnum } from './ApiSchema';
import type { Document } from './Document';
import { Schema } from './Schema';

export const visitSchema = {
  date: () => z.date(),
  description: () => z.string(),
  name: () => Schema.name(),
};

export interface Visit {
  description?: string;
  name: string;
  id: string;
  status: VisitStatusEnum;
  date: Date;
  documents: Document[];
}

export type VisitKeys = Pick<Visit, 'id'>;

export type VisitListItem = Pick<Visit, 'date' | 'description' | 'documents'>;
