import { Global } from '@mantine/core';

import type { FontFace } from './themeUtils';
import { mkFontFace } from './themeUtils';

const iranSans: FontFace[] = [
  { src: '/fonts/IRANSans(FaNum)_UltraLight.ttf', fontWeight: 200 },
  { src: '/fonts/IRANSans(FaNum)_Light.ttf', fontWeight: 300 },
  { src: '/fonts/IRANSans(FaNum).ttf', fontWeight: 400 },
  { src: '/fonts/IRANSans(FaNum)_Medium.ttf', fontWeight: 500 },
  { src: '/fonts/IRANSans(FaNum)_Bold.ttf', fontWeight: 700 },
  { src: '/fonts/IRANSans(FaNum)_Black.ttf', fontWeight: 900 },
];

export const IranSans = (): JSX.Element => (
  <Global styles={iranSans.map(mkFontFace('IRANSansFaNum'))} />
);
