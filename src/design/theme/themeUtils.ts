import type { MantineThemeColors, Tuple } from '@mantine/core';

export type MantineColor = [
  ...Tuple<undefined, 6>,
  string,
  ...Tuple<undefined, 3>,
];

export interface FontFace {
  src: string;
  fontWeight: number;
}

const toMantineColor = (color: string): MantineColor => [
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  color,
  undefined,
  undefined,
  undefined,
];

export const toMantineColors = (
  tokens: Record<string, string>,
): MantineThemeColors =>
  Object.entries(tokens).reduce(
    (acc, [key, value]) => ({
      ...acc,
      [key]: toMantineColor(value),
    }),
    {},
  );

export const mkFontFace =
  (name: string) =>
  ({ fontWeight, src }: FontFace) => ({
    // eslint-disable-next-line @typescript-eslint/naming-convention
    '@font-face': {
      fontFamily: name,
      src: `url('${src}') format("truetype")`,
      fontWeight,
    },
  });