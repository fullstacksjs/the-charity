import type { Tuple } from '@mantine/core';

import type { Palette } from '../libs/design/theme/palette';

type DefaultMantineColors =
  | 'blue'
  | 'cyan'
  | 'dark'
  | 'grape'
  | 'gray'
  | 'green'
  | 'indigo'
  | 'lime'
  | 'orange'
  | 'pink'
  | 'red'
  | 'teal'
  | 'transparent'
  | 'violet'
  | 'yellow';

type IndexifyColor<T> = T | `${T}.${0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9}`;

type Colors = IndexifyColor<Palette | 'transparent'>;

declare module '@mantine/core' {
  export interface MantineThemeColorsOverride {
    colors: Record<Colors, Tuple<string, 10>>;
  }
}
