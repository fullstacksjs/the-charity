import { AppShell as Shell, MediaQuery } from '@mantine/core';
import { Outlet } from '@tanstack/react-location';

import { Header, SideBar } from '../organisms';

export const AppShell = () => {
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
      <Outlet />
    </Shell>
  );
};
