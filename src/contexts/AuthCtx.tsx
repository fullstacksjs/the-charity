import { getClientCookie } from '@camp/infra';
import { isNull } from '@fullstacksjs/toolbox';
import React, { createContext, useMemo } from 'react';

interface AuthCtx {
  isAuth: boolean;
}

export const AuthCtx = createContext<AuthCtx | null>(
  null,
) as React.Context<AuthCtx>;

interface Props {
  children: React.ReactNode;
}

export const AuthCtxProvider = ({ children }: Props) => {
  const cookie = getClientCookie();
  const isAuth = isNull(cookie) ? false : cookie.isAuth;

  const ctx: AuthCtx = useMemo(
    () => ({
      isAuth,
    }),
    [isAuth],
  );
  return <AuthCtx.Provider value={ctx}>{children}</AuthCtx.Provider>;
};
