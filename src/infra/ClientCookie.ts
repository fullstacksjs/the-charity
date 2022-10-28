import type { ClientCookie } from '@camp/domain';
import {
  defaultClientCookie,
  parseClientCookie,
  RawClientCookie,
} from '@camp/domain';
import Cookies from 'js-cookie';

export const getClientCookie = (): ClientCookie => {
  const rawCookie = Cookies.get();
  const isValidCookie = RawClientCookie.guard(rawCookie);
  return isValidCookie ? parseClientCookie(rawCookie) : defaultClientCookie;
};
