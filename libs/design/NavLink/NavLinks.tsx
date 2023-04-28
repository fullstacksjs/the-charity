import { Stack } from '@mantine/core';

import type { NavLinkProps } from './NavLink';
import { NavLink } from './NavLink';

interface NavLinksProps {
  links: NavLinkProps[];
}

export const NavLinks = ({ links }: NavLinksProps) => {
  return (
    <Stack spacing={20}>
      {links.map(link => (
        <NavLink {...link} key={link.id} />
      ))}
    </Stack>
  );
};
