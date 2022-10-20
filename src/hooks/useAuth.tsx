import { isNull } from '@fullstacksjs/toolbox';
import { useContext } from 'react';

import { AuthCtx } from '../contexts/AuthCtx';

export const useAuth = () => {
  const ctx = useContext(AuthCtx);
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  if (isNull(ctx)) throw new Error('Auth Context Provider Not Found');
  return ctx;
};
