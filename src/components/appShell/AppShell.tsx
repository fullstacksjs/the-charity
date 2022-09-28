import { AppShell as Shell, MediaQuery } from '@mantine/core';
import { Outlet, useMatchRoute } from '@tanstack/react-location';

import { CreateProjectButton } from '../CreateProjectButton';
import { Header, SideBar } from '../organisms';

export const AppShell = () => {
  const matchRoute = useMatchRoute();
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
      <Header
        leftButton={
          // NOTE: Im not sure about this way, it's seems a bad way
          matchRoute({ to: '/projects' }) ? (
            <CreateProjectButton />
          ) : matchRoute({ to: '/families' }) ? (
            'family button'
          ) : null
        }
      />
      <Outlet />
    </Shell>
  );
};
