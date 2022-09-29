import { NavLink as Link } from '@mantine/core';
import { Link as TanstackLink, useLocation } from '@tanstack/react-location';
import type { ReactNode } from 'react';

export interface NavLinkProps {
  label: string;
  path: string;
  icon?: ReactNode;
}

export const NavLink = ({ label, icon, path }: NavLinkProps) => {
  const {
    current: { pathname },
  } = useLocation();

  return (
    <Link
      to={path}
      component={TanstackLink}
      data-test-id="nav-link"
      color="indigo"
      key={label}
      sx={{
        borderRadius: '4px',
        fontWeight: 500,
        padding: 10,
        margin: '15px 0',
        width: 240,
        height: 44,
      }}
      label={label}
      rightSection={icon}
      active={pathname === path}
    />
  );
};
