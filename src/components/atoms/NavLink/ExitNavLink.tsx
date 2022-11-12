import { ExitIcon } from '@camp/design';
import { messages } from '@camp/messages';
import { createTestAttr } from '@camp/utils';
import type { CSSObject, Sx } from '@mantine/core';
import { NavLink as MantineNavLink } from '@mantine/core';

import { exitNavLinkId as id } from './ExitNavLink.ids';
import { navLinkRootStyles } from './NavLink';

interface ExitNavLinkProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const rootStyles: Exclude<Sx, CSSObject> = theme => ({
  ...navLinkRootStyles(theme),
  '&:hover': {
    backgroundColor: theme.colors.red[0],
    color: theme.colors.red[6],
  },
});

export const ExitNavLink = ({ onClick }: ExitNavLinkProps) => {
  return (
    <MantineNavLink
      sx={rootStyles}
      label={messages.logout.link}
      rightSection={<ExitIcon />}
      onClick={onClick}
      {...createTestAttr(id)}
    />
  );
};
