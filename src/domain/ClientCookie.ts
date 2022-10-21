import type { Static } from 'runtypes';
import { Boolean, Literal, Record, Union } from 'runtypes';

export const RawClientCookie = Record({
  'is-logged-in': Union(Literal('true'), Literal('false')),
});

export const ClientCookie = Record({
  isAuth: Boolean,
});

export type ClientCookie = Static<typeof ClientCookie>;
export type RawClientCookie = Static<typeof RawClientCookie>;

export const parseClientCookie = (c: RawClientCookie): ClientCookie => ({
  isAuth: c['is-logged-in'] === 'true',
});
