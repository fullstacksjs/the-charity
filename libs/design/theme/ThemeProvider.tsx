import { createEmotionCache, MantineProvider } from '@mantine/core';
import stylisRTLPlugin from 'stylis-plugin-rtl';

import { IranSans } from './IranSans';
import { theme } from './theme';

const rtlCache = createEmotionCache({
  key: 'mantine-rtl',
  stylisPlugins: [stylisRTLPlugin],
});

interface Props {
  children: React.ReactNode;
}

export const ThemeProvider = (props: Props) => (
  <>
    <IranSans />
    <MantineProvider
      withGlobalStyles
      emotionCache={rtlCache}
      theme={theme}
      {...props}
    />
  </>
);
