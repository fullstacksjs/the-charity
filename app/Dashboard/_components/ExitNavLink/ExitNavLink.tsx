import { useAuth0 } from '@camp/auth';
import { debug } from '@camp/debug';
import { NavLink } from '@camp/design';
import { ExitIcon } from '@camp/icons';
import { messages } from '@camp/messages';
import { createTestAttr } from '@camp/test';

import { openLogoutModal } from '../LogoutModal';
import { exitNavLinkId as id } from './ExitNavLink.ids';

export const ExitNavLink = () => {
  const { logout } = useAuth0();

  const handleLogout = () => {
    openLogoutModal(returnTo => {
      logout({ logoutParams: { returnTo } }).catch(e => {
        debug.error(e);
      });
    });
  };

  return (
    <NavLink
      id="logout"
      variant="destructive"
      label={messages.logout.link}
      icon={<ExitIcon />}
      onClick={handleLogout}
      {...createTestAttr(id)}
    />
  );
};
