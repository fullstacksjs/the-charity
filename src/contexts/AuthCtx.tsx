import { AuthCookie } from '@camp/domain';
import Cookies from 'js-cookie';
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

const getAuthCookie = (): AuthCookie | null => {
  const cookie = Cookies.get();
  return AuthCookie.guard(cookie) ? cookie : null;
};

export const AuthCtxProvider = ({ children }: Props) => {
  const cookie = getAuthCookie();
  const isAuth = !!cookie?.isAuth;

  const ctx: AuthCtx = useMemo(
    () => ({
      isAuth,
    }),
    [isAuth],
  );
  return <AuthCtx.Provider value={ctx}>{children}</AuthCtx.Provider>;
};
