import { config } from '@camp/config';

import { Debug } from './Debug';

export * from './Debug';
export const debug = new Debug(
  console,
  config.debug.level,
  config.debug.scopes,
  'background-color: #4c6ef5; padding: 4px 8px; color: white;',
);
