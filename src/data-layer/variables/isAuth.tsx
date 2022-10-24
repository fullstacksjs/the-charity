import { makeVar } from '@apollo/client';
import { getClientCookie } from '@camp/infra';

const clientCookie = getClientCookie();
export const isAuthVar = makeVar(clientCookie.isAuth);
