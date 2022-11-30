import { messages } from '@camp/messages';
import { openConfirmModal } from '@mantine/modals';

import { logoutLocally } from '../../data-layer';
import { createTestAttr } from '../../utils/createTestAttr';
import { LogoutConfirm } from './LogoutConfirm';
import { logoutModalIds as ids } from './LogoutModal.ids';

const texts = messages.logout.modal;

export const openLogoutModal = () =>
  openConfirmModal({
    modalId: ids.modal,
    children: <LogoutConfirm />,
    title: texts.title,
    size: 'md',
    centered: true,
    ...createTestAttr(ids.modal),
    labels: { cancel: texts.cancel, confirm: texts.accept },
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
    onConfirm: () => logoutLocally(),
  });
