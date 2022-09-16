import { String } from 'runtypes';

export const Path = String.withBrand('Path').withConstraint(str =>
  /^\/.*$/.test(str),
);
