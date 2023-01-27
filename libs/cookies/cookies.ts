import { noop } from '@fullstacksjs/toolbox';
import { z } from 'zod';

const BrowserCookies = z.object({});

type BrowserCookies = z.infer<typeof BrowserCookies>;

const parseBrowserCookies = (c: BrowserCookies): Cookies => c;

const getBrowserCookies = async (): Promise<BrowserCookies> => {
  const cookieList = await cookieStore.getAll();

  const cookies: Record<string, string> = cookieList.reduce(
    (acc, cookie) => ({ ...acc, [cookie.name]: cookie.value }),
    {},
  );

  return BrowserCookies.parse(cookies);
};

export const Cookies = z.object({});
export type Cookies = z.infer<typeof Cookies>;

export const getCookies = async (): Promise<Cookies> => {
  const rawCookie = await getBrowserCookies();
  return parseBrowserCookies(rawCookie);
};

export const removeCookies = noop;
