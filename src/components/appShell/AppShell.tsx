/* eslint-disable @typescript-eslint/naming-convention */
import { HomeIcon } from '@camp/design';
import {
  AppShell as MantineAppShell,
  createStyles,
  MediaQuery,
} from '@mantine/core';
import {
  Outlet,
  useMatches,
  useMatchRoute,
  useNavigate,
} from '@tanstack/react-location';
import React, { useEffect, useState } from 'react';

import { CreateFamilyButton, CreateFamilyModal } from '../CreateFamily';
import { CreateProjectButton, CreateProjectModal } from '../CreateProject';
import { Header, SideBar } from '../organisms';
import { Breadcrumbs } from './Breadcrumbs';

const useStyles = createStyles(theme => ({
  main: {
    paddingTop: 30,
    paddingBottom: 0,
    paddingInline: 40,
    backgroundColor: theme.colors.bgCanvas[6],
  },
}));

export const AppShell = () => {
  const [isCreateProjectModalOpen, setIsCreateProjectModalOpen] =
    React.useState(false);
  const matchRoute = useMatchRoute();
  const matches = useMatches();
  const { classes } = useStyles();
  const [path, setPath] = useState('');
  const [isCreateFamilyModalOpen, setIsCreateFamilyModalOpen] = useState(false);
  const navigate = useNavigate();
  useEffect(
    () => setPath(matches[1]?.route?.meta?.['breadcrumb'] as string),
    [matches, path],
  );

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
      <Header
        leftButton={
          // NOTE: Im not sure about this way, it's seems a bad way
          matchRoute({ to: '/projects' }) ? (
            <CreateProjectButton
              onClick={() => setIsCreateProjectModalOpen(true)}
            />
          ) : matchRoute({ to: '/families' }) ? (
            <CreateFamilyButton
              onClick={() => setIsCreateFamilyModalOpen(true)}
            />
          ) : null
        }
        breadcrumbs={
          <Breadcrumbs
            breadcrumbItems={[
              {
                icon: <HomeIcon width="25" height="25" />,
              },
              {
                pathname: path,
              },
            ]}
          />
        }
      />
      <Outlet />
      <CreateProjectModal
        opened={isCreateProjectModalOpen}
        onClose={() => {
          setIsCreateProjectModalOpen(false);
          navigate({ to: '/projects', replace: true });
        }}
      />
      <CreateFamilyModal
        opened={isCreateFamilyModalOpen}
        onClose={() => {
          setIsCreateFamilyModalOpen(false);
          navigate({ to: '/families', replace: true });
        }}
      />
    </MantineAppShell>
  );
};
