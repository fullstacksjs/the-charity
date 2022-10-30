import { ExitIcon } from '@camp/design';
import { NavLink as MantineNavLink } from '@mantine/core';

import { navLinkRootStyles } from './NavLink';

interface ExitNavLinkProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const ExitNavLink = ({ onClick }: ExitNavLinkProps) => {
  return (
    <MantineNavLink
      sx={theme => ({
        ...navLinkRootStyles(theme),
        '&:hover': {
          backgroundColor: theme.colors.red[0],
          color: theme.colors.red[6],
        },
      })}
      label="خروج"
      rightSection={<ExitIcon />}
      onClick={onClick}
    />
  );
};
