import { showModal } from '@camp/design';
import { messages } from '@camp/messages';

import { LogoutConfirm } from './LogoutConfirm';
import { logoutModalIds as ids } from './LogoutModal.ids';

const texts = messages.logout.modal;

export const openLogoutModal = (logout: (returnTo: string) => void) =>
  showModal({
    id: ids.modal,
    children: <LogoutConfirm />,
    title: texts.title,
    cancelLable: texts.cancel,
    confirmLabel: texts.accept,
    size: 'md',
    groupProps: {
      spacing: 20,
      sx: {
        flexDirection: 'row-reverse',
      },
    },
    confirmId: ids.acceptBtn,
    onConfirm: () => logout(window.location.origin),
  });
