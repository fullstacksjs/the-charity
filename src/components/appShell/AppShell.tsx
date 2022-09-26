import { AppShell as Shell, MediaQuery } from '@mantine/core';

import { Header, SideBar } from '../organisms';

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
