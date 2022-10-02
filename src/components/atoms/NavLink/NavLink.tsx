import { createStyles, NavLink as MantineNavLink } from '@mantine/core';
import { Link as TanstackLink, useLocation } from '@tanstack/react-location';
import type { ReactNode } from 'react';
import React from 'react';

export interface NavLinkProps {
  label: string;
  path: string;
  icon?: ReactNode;
}
const useStyles = createStyles(theme => ({
  root: {
    borderRadius: 4,
    fontWeight: 500,
    padding: 10,
    color: theme.colors.fgMuted[6],
  },
}));

export const NavLink = ({ label, icon, path }: NavLinkProps) => {
  const { classes } = useStyles();
  const {
    current: { pathname },
  } = useLocation();

  return (
    <MantineNavLink
      to={path}
      component={TanstackLink}
      data-test-id="nav-link"
      key={label}
      label={label}
      rightSection={icon}
      active={pathname === path}
      color="indigo"
      className={classes.root}
    />
  );
};
