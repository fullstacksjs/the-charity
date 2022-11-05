import { makeVar } from '@apollo/client';
import { getClientCookie, removeClientCookie } from '@camp/infra';

export const isAuthVar = makeVar(false);

export const loginLocally = () => {
  const getCookie = getClientCookie();

  if (getCookie.isAuth) {
    isAuthVar(true);
  }
};

export const logoutLocally = () => {
  removeClientCookie();
  isAuthVar(false);
};
