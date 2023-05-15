import { range } from '@fullstacksjs/toolbox';
import { describe, expect, it } from 'vitest';

import { Schema } from './Schema';

const forbiddenLetters = (
  [
    [1536, 1568],
    [1595, 1600],
    [1611, 1791],
  ] as const
)
  .flatMap(([a, b]) => range(b - a, { offset: a, step: 1 }))
  .map(x => String.fromCharCode(x))
  .join('')
  .replace(/[\u067E\u0686\u0698\u06AF\u06A9\u06CC]/g, '')
  .split('');

describe('name', () => {
  it('should pass if name is only persian letters', () => {
    expect(() => Schema.name().parse('نام')).not.toThrow();
  });

  it.each(forbiddenLetters)(
    'should throw if name has persian letters nad the symbol "%s"',
    s => {
      expect(() => Schema.name().parse(`نام${s}`)).toThrow();
    },
  );
});
