import 'vitest-dom/extend-expect';

import { vitest } from 'vitest';

if (Object.hasOwn(window, 'matchMedia'))
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: vitest.fn().mockImplementation(query => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: vitest.fn(), // @Deprecated
      removeListener: vitest.fn(), // @Deprecated
      addEventListener: vitest.fn(),
      removeEventListener: vitest.fn(),
      dispatchEvent: vitest.fn(),
    })),
  });
