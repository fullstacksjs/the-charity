import { messages } from '@camp/messages';
import { createTestAttr } from '@camp/test';

import { showModal } from '../Modal/ShowModal';
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
    groupProps: {
      spacing: 20,
      sx: {
        flexDirection: 'row-reverse',
      },
    },
    confirmProps: {
      variant: 'filled',
      color: 'red',
      ...createTestAttr(ids.acceptBtn),
    },
    cancelProps: {
      variant: 'filled',
      color: 'gray',
    },
    onConfirm: () => logout(window.location.origin),
  });
