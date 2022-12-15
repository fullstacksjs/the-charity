import type { Static } from 'runtypes';
import { Record } from 'runtypes';

export const RawClientCookie = Record({});
export type RawClientCookie = Static<typeof RawClientCookie>;

export const ClientCookie = Record({});
export type ClientCookie = Static<typeof ClientCookie>;

export const defaultClientCookie: ClientCookie = {};
export const parseClientCookie = (c: RawClientCookie): ClientCookie => c;
