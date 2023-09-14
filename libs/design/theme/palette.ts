import type { Tuple } from '@mantine/core';

export type MantineColor = Tuple<string | undefined, 10>;

export type Palette =
  | 'bg'
  | 'error'
  | 'fg'
  | 'help'
  | 'info'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning';

interface SemanticColor {
  first?: Tuple<string, 4> | Tuple<undefined, 4>;
  default: string;
  muted: string;
  subtle: string;
  emphasized?: string;
}

export const palette: Record<Palette, SemanticColor> = {
  fg: {
    default: '#212529',
    muted: '#8E959E',
    subtle: '#ADB5BD',
  },
  bg: {
    default: '#FCFCFC',
    emphasized: '#FFFFFF',
    muted: '#C4C8CC',
    subtle: '#DEE2E6',
  },
  secondary: {
    default: '#495057',
    emphasized: '#495057',
    muted: '#ADB5BD',
    subtle: '#F8F9FA',
  },
  primary: {
    first: ['#EDF2FF', '#DBE4FF', '#BAC8FF', '#91A7FF'],
    default: '#4C6EF5',
    emphasized: '#364FC7',
    muted: '#748FFC',
    subtle: '#EDF2FF',
  },
  info: {
    default: '#4DABF7',
    emphasized: '#339AF0',
    muted: '#74C0FC',
    subtle: '#DDFBFF',
  },
  help: {
    default: '#9775FA',
    emphasized: '#845EF7',
    muted: '#B197FC',
    subtle: '#E5DBFF',
  },
  success: {
    default: '#37B24D',
    emphasized: '#2B8A3E',
    muted: '#40C057',
    subtle: '#EBFBEE',
  },
  error: {
    first: ['#FFE3E3', '#FFE3E3', '#FFE3E3', '#FFE3E3'],
    default: '#F03E3E',
    emphasized: '#C92A2A',
    muted: '#FA5252',
    subtle: '#FFE3E3',
  },
  warning: {
    default: '#FD7E14',
    emphasized: '#E67700',
    muted: '#FAB005',
    subtle: '#FFF4E6',
  },
};

export const toMantineColor = ({
  first = [undefined, undefined, undefined, undefined],
  default: defaultColor,
  muted,
  subtle,
  emphasized,
}: SemanticColor): MantineColor => [
  ...first,
  subtle,
  muted,
  defaultColor,
  emphasized,
  undefined,
  undefined,
];

export const toMantineColors = (
  tokens: Record<string, SemanticColor>,
): Record<string, MantineColor> =>
  Object.entries(tokens).reduce(
    (acc, [key, value]) => ({ ...acc, [key]: toMantineColor(value) }),
    {},
  );
