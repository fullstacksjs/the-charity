import { isNull } from '@fullstacksjs/toolbox';

import { getClientCookie } from '../infra';

export const useAuth = () => {
  const cookie = getClientCookie();
  const isAuth = isNull(cookie) ? false : cookie.isAuth;
  return { isAuth };
};
