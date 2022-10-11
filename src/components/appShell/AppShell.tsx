import {
  AppShell as MantineAppShell,
  createStyles,
  MediaQuery,
} from '@mantine/core';
import { Outlet, useMatches } from '@tanstack/react-location';

import type { LocationGenerics } from '../../Routes';
import { SideBar } from '../organisms';

const useStyles = createStyles(theme => ({
  main: {
    paddingTop: 30,
    paddingBottom: 0,
    paddingInline: 40,
    backgroundColor: theme.colors.bgCanvas[6],
  },
}));

export const AppShell = () => {
  const { classes } = useStyles();
  const matches = useMatches<LocationGenerics>();
  const path = matches[1]?.route.meta?.breadcrumb;
  console.log(path);

  return (
    <MantineAppShell
      classNames={{ main: classes.main }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={
        <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
          <SideBar />
        </MediaQuery>
      }
    >
      <Outlet />
    </MantineAppShell>
  );
};
