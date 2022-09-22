import { Global } from '@mantine/core';

import Normal from './assets/fonts/IRANSans(FaNum).ttf';
import Black from './assets/fonts/IRANSans(FaNum)_Black.ttf';
import Bold from './assets/fonts/IRANSans(FaNum)_Bold.ttf';
import Light from './assets/fonts/IRANSans(FaNum)_Light.ttf';
import Medium from './assets/fonts/IRANSans(FaNum)_Medium.ttf';
import UltraLight from './assets/fonts/IRANSans(FaNum)_UltraLight.ttf';

export const GlobalStyles: React.FC = () => {
  return (
    <Global
      styles={() => [
        /* eslint-disable @typescript-eslint/naming-convention */
        {
          '*': {
            boxSizing: 'border-box',
          },
        },
        {
          '@font-face': {
            fontFamily: 'IRANSansFaNum',
            src: `url('${Black}') format("truetype")`,
            fontWeight: 900,
          },
        },
        {
          '@font-face': {
            fontFamily: 'IRANSansFaNum',
            src: `url('${Bold}') format("truetype")`,
            fontWeight: 700,
          },
        },
        {
          '@font-face': {
            fontFamily: 'IRANSansFaNum',
            src: `url('${Medium}') format("truetype")`,
            fontWeight: 500,
          },
        },
        {
          '@font-face': {
            fontFamily: 'IRANSansFaNum',
            src: `url('${Normal}') format("truetype")`,
            fontWeight: 400,
          },
        },
        {
          '@font-face': {
            fontFamily: 'IRANSansFaNum',
            src: `url('${Light}') format("truetype")`,
            fontWeight: 300,
          },
        },
        {
          '@font-face': {
            fontFamily: 'IRANSansFaNum',
            src: `url('${UltraLight}') format("truetype")`,
            fontWeight: 200,
          },
        },
      ]}
      /* eslint-enable @typescript-eslint/naming-convention */
    />
  );
};
