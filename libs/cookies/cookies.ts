import { noop } from '@fullstacksjs/toolbox';
import type { Static } from 'runtypes';
import { Record as RTRecord } from 'runtypes';

const BrowserCookies = RTRecord({});

type BrowserCookies = Static<typeof BrowserCookies>;

const parseBrowserCookies = (c: BrowserCookies): Cookies => c;

const getBrowserCookies = async (): Promise<BrowserCookies> => {
  const cookieList = await cookieStore.getAll();

  const cookies: Record<string, string> = cookieList.reduce(
    (acc, cookie) => ({ ...acc, [cookie.name]: cookie.value }),
    {},
  );

  return BrowserCookies.check(cookies);
};

export const Cookies = RTRecord({});
export type Cookies = Static<typeof Cookies>;

export const getCookies = async (): Promise<Cookies> => {
  const rawCookie = await getBrowserCookies();
  return parseBrowserCookies(rawCookie);
};

export const removeCookies = noop;
