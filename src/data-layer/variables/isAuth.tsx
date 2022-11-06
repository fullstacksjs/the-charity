import { makeVar } from '@apollo/client';
import {
  getClientCookie,
  getRawCookies,
  removeClientCookie,
} from '@camp/infra';

export const isAuthVar = makeVar(false);
await getRawCookies().then(res => console.log(res));

export const loginLocally = async () => {
  await getClientCookie()
    .then(cookie => {
      if (cookie.isAuth) {
        isAuthVar(true);
      }
    })
    .catch(err => console.log(err));
};

export const logoutLocally = async () => {
  await removeClientCookie();
  isAuthVar(false);
};
