import { SideBar } from '@camp/design';
import { Outlet } from '@camp/router';
import {
  AppShell as MantineAppShell,
  createStyles,
  MediaQuery,
  Stack,
} from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import { Notifications } from '@mantine/notifications';

const useStyles = createStyles(theme => ({
  main: {
    paddingTop: 30,
    paddingBottom: 0,
    paddingInline: 40,
    backgroundColor: theme.colors.bgCanvas[6],
  },
}));

export const DashboardLayout = () => {
  const { classes } = useStyles();

  return (
    <ModalsProvider>
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
        <Stack sx={{ gap: '40px' }} h="100%">
          <Outlet />
        </Stack>
        <Notifications limit={3} />
      </MantineAppShell>
    </ModalsProvider>
  );
};
