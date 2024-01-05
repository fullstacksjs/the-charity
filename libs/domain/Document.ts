import { z } from 'zod';

import { Schema } from './Schema';

export const documentSchema = {
  date: () => z.date().optional(),
  description: () => z.string(),
  documents: () => z.array(Schema.document()),
};

export interface Document {
  date: Date;
  description: string;
  documents: File[];
}
