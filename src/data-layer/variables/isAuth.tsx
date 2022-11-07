import { makeVar } from '@apollo/client';
import { getClientCookie, removeClientCookie } from '@camp/infra';

export const isAuthVar = makeVar(false);

export const loginLocally = async () => {
  await getClientCookie()
    .then(cookie => {
      if (cookie.isAuth) {
        isAuthVar(true);
      }
    })
    .catch(err => console.log(err));
};

export const logoutLocally = () => {
  void removeClientCookie();
  isAuthVar(false);
};
