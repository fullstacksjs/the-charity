import { ExitIcon } from '@camp/design';
import { messages } from '@camp/messages';
import { createTestAttr } from '@camp/utils';
import type { CSSObject, Sx } from '@mantine/core';
import { NavLink as MantineNavLink } from '@mantine/core';

import { openLogoutModal } from '../../LogoutModal';
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
  return (
    <MantineNavLink
      sx={rootStyles}
      label={messages.logout.link}
      rightSection={<ExitIcon />}
      {...createTestAttr(id)}
      onClick={() => openLogoutModal()}
    />
  );
};
