import { createColumnHelper } from '@tanstack/react-table';
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
  householdId: string;
  name: string;
  id: string;
  status: VisitStatusEnum;
  date: Date;
  documents: Document[];
}

export type VisitDetail = Pick<
  Visit,
  'date' | 'description' | 'documents' | 'name' | 'status'
>;
export type VisitKeys = Pick<Visit, 'householdId' | 'id'>;

export type VisitListItem = Pick<Visit, 'date' | 'description' | 'documents'>;

export type VisitName = Pick<Visit, 'name'>;

export const visitColumnHelper = createColumnHelper<
  VisitKeys & VisitListItem
>();
