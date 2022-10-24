// FIXME should delete this after backend got integrated

import { isAuthVar } from '@camp/data-layer';

export const setFakeLoggedIn = () => {
  isAuthVar(true);
};

export const setFakeLoggedOut = () => {
  isAuthVar(false);
};
