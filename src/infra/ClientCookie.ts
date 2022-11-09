import type { ClientCookie } from '@camp/domain';
import {
  defaultClientCookie,
  parseClientCookie,
  RawClientCookie,
} from '@camp/domain';

export const getRawCookies = async (): Promise<Record<string, string>> => {
  const cookies = await cookieStore.getAll();
  return cookies.reduce(
    (acc, cookie) => ({ ...acc, [cookie.name]: cookie.value }),
    {},
  );
};

export const getClientCookie = async (): Promise<ClientCookie> => {
  const rawCookie = await getRawCookies();
  const isValidCookie = RawClientCookie.guard(rawCookie);
  return isValidCookie ? parseClientCookie(rawCookie) : defaultClientCookie;
};

export const removeClientCookie = async () => {
  await cookieStore.delete('is-logged-in');
};
