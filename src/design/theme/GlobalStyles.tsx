import { Global } from '@mantine/core';

export const GlobalStyles = () => {
  return (
    <Global
      styles={[
        /* eslint-disable @typescript-eslint/naming-convention */
        {
          /* 1.Use a more-intuitive box-sizing model. */
          '*, *::before, *::after': {
            boxSizing: 'border-box',
          },
          /* 2.Remove default margin */
          '*': {
            margin: 0,
          },
          /* 3.Allow percentage-based heights in the application */
          'html, body': {
            height: '100%',
          },
          /* 4.Improve media defaults */
          'img, picture, video, canvas': {
            display: 'block',
            maxWidth: '100%',
          },
        },
        /* eslint-enable @typescript-eslint/naming-convention */
      ]}
    />
  );
};
