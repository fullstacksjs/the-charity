import { z } from 'zod';

export const Url = z.string().url();
