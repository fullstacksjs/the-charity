import type { Tuple } from '@mantine/core';

import type { colors } from '../libs/design/theme/theme';

// NOTE: MANTINE SUCKS
type MantineColors =
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
  | 'violet'
  | 'yellow';
type Colors = MantineColors | keyof typeof colors;

declare module '@mantine/core' {
  export interface MantineThemeColorsOverride {
    colors: Record<Colors, Tuple<string, 10>>;
  }
}
