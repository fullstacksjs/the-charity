import { useAuth0 } from '@camp/auth';
import { ExitIcon } from '@camp/icons';
import { messages } from '@camp/messages';
import { createTestAttr } from '@camp/test';
import type { CSSObject, Sx } from '@mantine/core';
import { NavLink as MantineNavLink } from '@mantine/core';

import { openLogoutModal } from '../LogoutModal';
import { exitNavLinkId as id } from './ExitNavLink.ids';
import { navLinkRootStyles } from './NavLink';

const rootStyles: Exclude<Sx, CSSObject> = theme => ({
  ...navLinkRootStyles(theme),
  '&:hover': {
    backgroundColor: theme.colors.red[0],
    color: theme.colors.red[6],
  },
});

export const ExitNavLink = () => {
  const { logout } = useAuth0();

  const handleLogout = () => {
    openLogoutModal(returnTo => {
      logout({ returnTo });
    });
  };

  return (
    <MantineNavLink
      sx={rootStyles}
      label={messages.logout.link}
      rightSection={<ExitIcon />}
      {...createTestAttr(id)}
      onClick={handleLogout}
    />
  );
};
