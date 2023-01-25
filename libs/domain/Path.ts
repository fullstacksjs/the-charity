import { z } from 'zod';

export const Path = z.string().regex(/^\/.*$/);
