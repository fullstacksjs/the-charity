import type { Tuple } from '@mantine/core';

import type { colors } from '../libs/design/theme/theme';

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

type IndexifyColor<T> = T extends DefaultMantineColors
  ? T | `${T}.${0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9}`
  : T;

type Colors = IndexifyColor<DefaultMantineColors | keyof typeof colors>;

declare module '@mantine/core' {
  export interface MantineThemeColorsOverride {
    colors: Record<Colors, Tuple<string, 10>>;
  }
}
