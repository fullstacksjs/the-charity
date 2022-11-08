import { makeVar } from '@apollo/client';
import { getClientCookie, removeClientCookie } from '@camp/infra';

export type AuthState = 'Authenticated' | 'NotAuthenticated' | 'NotInitialized';
export const AuthState = makeVar<AuthState>('NotInitialized');

export async function initiateAuthState() {
  try {
    const cookie = await getClientCookie();
    AuthState(cookie.isAuth ? 'Authenticated' : 'NotAuthenticated');
  } catch (err) {
    AuthState('NotAuthenticated');
    console.error(err);
  }
}

export const loginLocally = async () => {
  const cookie = await getClientCookie();
  if (cookie.isAuth) AuthState('Authenticated');
};

export const logoutLocally = () => {
  void removeClientCookie();
  AuthState('NotAuthenticated');
};
