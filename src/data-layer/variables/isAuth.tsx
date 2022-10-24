import { makeVar } from '@apollo/client';

// TODO: use the cookie for knowing if isAuth is true or not
export const isAuthVar = makeVar(false);
