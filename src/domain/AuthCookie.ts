import type { Static } from 'runtypes';
import { Boolean, Record } from 'runtypes';

export const AuthCookie = Record({
  isAuth: Boolean,
});

export type AuthCookie = Static<typeof AuthCookie>;
