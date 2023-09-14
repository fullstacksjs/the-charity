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
    backgroundColor: theme.colors.error[4],
    color: theme.colors.error[6],
  },
  '&[data-active]:hover': {
    backgroundColor: theme.colors.error[5],
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
        color: theme.colors.fg[6],
        ...(variant === 'destructive' ? destructiveMixin(theme) : undefined),
        // NOTE: Seems to be a Mantine bug
        span: { fontSize: theme.fontSizes.md },
      })}
      to={to}
      // @ts-expect-error polymorphic behavior
      component={to ? Link : undefined}
      key={label}
      label={label}
      rightSection={icon}
      active={to ? pathname.startsWith(to) : false}
      onClick={onClick}
      {...createTestAttr(id)}
    />
  );
};
