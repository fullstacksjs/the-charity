import type { Static } from 'runtypes';
import { Boolean, Literal, Record, Union } from 'runtypes';

export const RawClientCookie = Record({
  auth: Union(Literal('true'), Literal('false')),
});

export const ClientCookie = Record({
  auth: Boolean,
});

export type ClientCookie = Static<typeof ClientCookie>;
export type RawClientCookie = Static<typeof RawClientCookie>;

export const parseClientCookie = (c: RawClientCookie): ClientCookie => ({
  auth: c.auth === 'true',
});
