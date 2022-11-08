import { createStyles, NavLink as MantineNavLink } from '@mantine/core';
import { Link as TanstackLink, useLocation } from '@tanstack/react-location';

import { createTestAttr } from '../../../utils/createTestAttr';

export interface NavLinkProps {
  label: string;
  path: AppRoute;
  icon?: React.ReactNode;
}
const useStyles = createStyles(theme => ({
  root: {
    borderRadius: 4,
    fontWeight: 500,
    padding: 10,
    color: theme.colors.fgMuted[6],
  },
}));

export const NavlinkId = 'nav-link';

export const NavLink = ({ label, icon, path }: NavLinkProps) => {
  const { classes } = useStyles();
  const {
    current: { pathname },
  } = useLocation();

  return (
    <MantineNavLink
      to={path}
      component={TanstackLink}
      key={label}
      label={label}
      rightSection={icon}
      active={pathname === path}
      className={classes.root}
      {...createTestAttr(NavlinkId)}
    />
  );
};
