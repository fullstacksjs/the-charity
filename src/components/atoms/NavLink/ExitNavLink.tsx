import { ExitIcon } from '@camp/design';
import { messages } from '@camp/messages';
import { NavLink as MantineNavLink } from '@mantine/core';

import { createTestAttr } from '../../../utils/createTestAttr';
import { navLinkRootStyles } from './NavLink';

interface ExitNavLinkProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}
export const exitNavLinkId = 'exit-nav-link';

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
      label={messages.logout.link}
      rightSection={<ExitIcon />}
      onClick={onClick}
      {...createTestAttr(exitNavLinkId)}
    />
  );
};
