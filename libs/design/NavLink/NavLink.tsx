import type { AppRoute } from '@camp/router';
import { Link, useLocation } from '@camp/router';
import { createTestAttr } from '@camp/test';
import type { MantineTheme } from '@mantine/core';
import { NavLink as MantineNavLink } from '@mantine/core';

export interface NavLinkProps {
  label: string;
  icon: JSX.Element;
  to?: AppRoute;
  id: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
  variant?: 'destructive' | 'normal';
}
const destructiveMixin = (theme: MantineTheme) => ({
  '&:hover, &:active, &[data-active]': {
    backgroundColor: theme.colors.red[0],
    color: theme.colors.red[6],
  },
  '&[data-active]:hover': {
    backgroundColor: theme.colors.red[1],
  },
});

export const NavLink = ({
  label,
  icon,
  to,
  id,
  variant,
  onClick,
}: NavLinkProps) => {
  const {
    current: { pathname },
  } = useLocation();

  return (
    <MantineNavLink
      sx={theme => ({
        borderRadius: 4,
        fontWeight: 500,
        padding: 10,
        color: theme.colors.fgMuted[6],
        ...(variant === 'destructive' ? destructiveMixin(theme) : undefined),
      })}
      to={to}
      // @ts-expect-error polymorphic behavior
      component={to ? Link : undefined}
      key={label}
      label={label}
      rightSection={icon}
      active={pathname === to}
      onClick={onClick}
      {...createTestAttr(id)}
    />
  );
};
