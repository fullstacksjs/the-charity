import { zodResolver } from '@hookform/resolvers/zod';
import { type ZodTypeAny } from 'zod';
import { z } from 'zod';

export const createResolver = <T extends object>(
  t: Record<keyof T, ZodTypeAny>,
) => zodResolver(z.object(t));
