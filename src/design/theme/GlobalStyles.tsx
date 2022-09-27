import { Global } from '@mantine/core';

export const GlobalStyles = () => {
  return (
    <Global
      styles={[
        /* eslint-disable @typescript-eslint/naming-convention */
        {
          '*': {
            margin: 0,
            padding: 0,
            boxSizing: 'border-box',
          },
        },
        /* eslint-enable @typescript-eslint/naming-convention */
      ]}
    />
  );
};
