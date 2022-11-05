type CookieSameSite = 'lax' | 'none' | 'string';

interface CookieListItem {
  name: string;
  value: string;
  domain?: string;
  path: string;
  expires: number;
  secure: boolean;
  sameSite: CookieSameSite;
}

interface CookieStoreGetOptions {
  name: string;
  url: string;
}

interface CookieInit {
  name: string;
  value: string;
  expires?: number | null;
  domain?: string | null;
  path: string;
  sameSite: CookieSameSite;
}

interface CookieStoreDeleteOptions {
  name: string;
  domain?: string | null;
  path: string;
}

/* eslint-disable @typescript-eslint/method-signature-style, @typescript-eslint/unified-signatures */
interface CookieStore extends EventTarget {
  get(name: string): Promise<CookieListItem | undefined>;
  get(options: CookieStoreGetOptions): Promise<CookieListItem | undefined>;

  getAll(): Promise<CookieListItem[]>;
  getAll(name: string): Promise<CookieListItem[]>;
  getAll(options: CookieStoreGetOptions): Promise<CookieListItem[]>;

  set(name: string, value: string): Promise<undefined>;
  set(options: CookieInit): Promise<undefined>;

  delete(name: string): Promise<undefined>;
  delete(options: CookieStoreDeleteOptions): Promise<undefined>;
}

// eslint-disable-next-line
declare var cookieStore: CookieStore;
