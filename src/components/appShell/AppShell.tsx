import { AppShell as Shell, MediaQuery } from '@mantine/core';

import { Header } from '../organisms/Header';
import { SideBar } from '../organisms/SideBar';

interface Props {
  children: React.ReactNode;
}

export const AppShell = ({ children }: Props) => {
  return (
    <Shell
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={
        <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
          <SideBar />
        </MediaQuery>
      }
    >
      <Header />
      {children}
    </Shell>
  );
};
