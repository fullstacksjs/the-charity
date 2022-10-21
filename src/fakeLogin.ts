export const setFakeLoggedIn = () => {
  const date = new Date();
  date.setTime(date.getTime() + 100 * 60 * 60 * 1000);
  document.cookie = `is-logged-in=true; expires=${date.toUTCString()}`;
};

export const setFakeLoggedOut = () => {
  document.cookie = 'is-logged-in=false;';
};
