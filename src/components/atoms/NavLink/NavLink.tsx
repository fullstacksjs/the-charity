import { NavLink as Link } from '@mantine/core';
import { Link as TanstackLink } from '@tanstack/react-location';
import type { ReactNode } from 'react';
import { useState } from 'react';

interface NavLinkProps {
  label: string;
  icon: ReactNode;
  path: string;
}

export const NavLink = ({ links }: { links: NavLinkProps[] }) => {
  const [isActive, setIsActive] = useState(-1);
  const navLink = links.map((link, index) => (
    <Link
      to={`/${link.path}`}
      component={TanstackLink}
      data-test-id="nav-link"
      color="indigo"
      key={link.label}
      sx={{
        borderRadius: '4px',
        fontWeight: 500,
        padding: 10,
        // textAlign: 'right',
        margin: '15px 0',
        width: 240,
        height: 44,
      }}
      label={link.label}
      rightSection={link.icon}
      active={index === isActive}
      onClick={() => setIsActive(index)}
    />
  ));
  return <>{navLink}</>;
};
