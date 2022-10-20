import type { ClientCookie } from '@camp/domain';
import { parseClientCookie, RawClientCookie } from '@camp/domain';
import Cookies from 'js-cookie';

const removeClientCookie = () => {
  Object.keys(Cookies.get()).forEach(name => Cookies.remove(name));
};

export const getClientCookie = (): ClientCookie | null => {
  const rawCookie = Cookies.get();
  const isValidCookie = RawClientCookie.guard(rawCookie);
  console.log(rawCookie, isValidCookie);

  if (!isValidCookie) {
    removeClientCookie();
    return null;
  }

  const cookie = parseClientCookie(rawCookie);
  return cookie;
};
