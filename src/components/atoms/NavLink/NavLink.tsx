import { createTestAttr } from '@camp/utils';
import type { CSSObject, MantineTheme } from '@mantine/core';
import { NavLink as MantineNavLink } from '@mantine/core';
import { Link as TanstackLink, useLocation } from '@tanstack/react-location';

export interface NavLinkProps {
  label: string;
  icon: JSX.Element;
  path: AppRoute;
  id: string;
}

export type SxFn = (theme: MantineTheme) => CSSObject;

export const navLinkRootStyles: SxFn = theme => ({
  borderRadius: 4,
  fontWeight: 500,
  padding: 10,
  color: theme.colors.fgMuted[6],
});

export const NavLink = ({ label, icon, path, id }: NavLinkProps) => {
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
      {...createTestAttr(id)}
    />
  );
};
