import { z } from 'zod';

import { messages } from '../../app/messages';
import { Schema } from './Schema';

export const documentSchema = {
  name: () => Schema.name(),
  date: () => z.date(),
  description: () => z.string().optional(),
  documents: () => z.array(Schema.document()).nonempty(),
};

export const documentFileValidator = z
  .object({
    name: z.string(),
    type: z.enum(
      [
        'image/png',
        'application/pdf',
        'image/jpg',
        'image/jpeg',
        'video/mp4',
        'video/x-matroska',
      ],
      {
        errorMap: () => ({
          message: messages.notification.addDocument.unsupportedType,
        }),
      },
    ),
    size: z
      .number()
      .lt(20000000, messages.notification.addDocument.maxSizeExceeded),
  })
  .passthrough() as any as z.ZodSchema<File>;

export interface Document {
  url: string;
  storageId: string;
  id: string;
}

export type DocumentDetail = Pick<Document, 'url'>;

export type DocumentKeys = Pick<Document, 'id' | 'storageId'>;
