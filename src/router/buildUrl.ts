function validateArgs(keys: string[], path: string) {
  keys.forEach(param => {
    if (!path.includes(param)) throw Error('Wrong param');
    const parts = path.split('/');
    const uniqueParts = [...new Set(parts)];
    if (uniqueParts.length < parts.length) throw Error('Duplicated params');
  });
}

export const buildUrl = (
  path: string,
  params: Record<string, string> = {},
): string => {
  const keys = Object.keys(params);
  const parts = path.split('/');

  validateArgs(keys, path);

  return parts.reduce((acc, part) => {
    const param = part.startsWith(':') ? params[part.slice(1)] : part;
    return `${acc}/${param ?? part}`;
  });
};
