import type { ZodOptional } from 'zod';
import { literal, ZodType } from 'zod';

declare module 'zod' {
  interface ZodType {
    optionalString: () => ZodOptional<this>;
  }
}

ZodType.prototype.optionalString = function optionalString<T>(
  this: ZodType<T>,
) {
  return this.nullish()
    .or(literal(''))
    .transform(e =>
      e === '' || e == null ? undefined : e,
    ) as unknown as ZodOptional<ZodType<T>>;
};
