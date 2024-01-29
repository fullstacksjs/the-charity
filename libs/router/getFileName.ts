export const getFileName = (url: string) => {
  return url.replace(/.+\//g, '');
};
