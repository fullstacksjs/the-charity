import { z } from 'zod';

export const toZodLiteralList = <T extends z.Primitive>(x: T[]) => {
  if (x.length < 2)
    throw new Error(
      'the passed zod literal list must have at least two elements inside.',
    );
  return x.map(a => z.literal(a)) as [
    z.ZodLiteral<T>,
    z.ZodLiteral<T>,
    ...z.ZodLiteral<T>[],
  ];
};
