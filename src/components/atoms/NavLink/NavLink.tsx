import type { CSSObject, MantineTheme } from '@mantine/core';
import { NavLink as MantineNavLink } from '@mantine/core';
import { Link as TanstackLink, useLocation } from '@tanstack/react-location';

import { createTestAttr } from '../../../utils/createTestAttr';

export interface NavLinkProps {
  label: string;
  icon: JSX.Element;
  path: AppRoute;
}

export type SxFn = (theme: MantineTheme) => CSSObject;

export const navLinkRootStyles: SxFn = theme => ({
  borderRadius: 4,
  fontWeight: 500,
  padding: 10,
  color: theme.colors.fgMuted[6],
});

export const NavlinkId = 'nav-link';

export const NavLink = ({ label, icon, path }: NavLinkProps) => {
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
      sx={navLinkRootStyles}
      {...createTestAttr(NavlinkId)}
    />
  );
};
