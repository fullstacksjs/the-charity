import { Global } from '@mantine/core';

import type { FontFace } from './themeUtils';
import { mkFontFace } from './themeUtils';

const iranSansFaNumber: FontFace[] = [
  { src: '/fonts/IRANSans(FaNum)_UltraLight.ttf', fontWeight: 200 },
  { src: '/fonts/IRANSans(FaNum)_Light.ttf', fontWeight: 300 },
  { src: '/fonts/IRANSans(FaNum).ttf', fontWeight: 400 },
  { src: '/fonts/IRANSans(FaNum)_Medium.ttf', fontWeight: 500 },
  { src: '/fonts/IRANSans(FaNum)_Bold.ttf', fontWeight: 700 },
  { src: '/fonts/IRANSans(FaNum)_Black.ttf', fontWeight: 900 },
];

const iranSans: FontFace[] = [
  { src: '/fonts/IRANSans_Light.ttf', fontWeight: 300 },
  { src: '/fonts/IRANSans.ttf', fontWeight: 400 },
  { src: '/fonts/IRANSans_Medium.ttf', fontWeight: 500 },
  { src: '/fonts/IRANSans_Bold.ttf', fontWeight: 700 },
  { src: '/fonts/IRANSans_Black.ttf', fontWeight: 900 },
];

export const IranSans = (): JSX.Element => (
  <Global
    styles={[
      ...iranSansFaNumber.map(mkFontFace('IRANSansFaNum')),
      ...iranSans.map(mkFontFace('IRANSans')),
    ]}
  />
);
