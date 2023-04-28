import { createTestAttr } from '@camp/test';
import { openConfirmModal } from '@mantine/modals';
import type { ConfirmModalProps } from '@mantine/modals/lib/ConfirmModal';
import type { ReactNode } from 'react';

type ModalSize = number | 'lg' | 'md' | 'sm' | 'xl' | 'xs';

interface Props extends ConfirmModalProps {
  id: string;
  children: ReactNode;
  title: string;
  cancelLable: string;
  confirmLabel: string;
  size: ModalSize;
  confirmId?: string;
}

export const showModal = ({
  id,
  children,
  title,
  size,
  cancelLable,
  confirmLabel,
  confirmId,
  ...rest
}: Props) =>
  openConfirmModal({
    modalId: id,
    children,
    title,
    size,
    centered: true,
    confirmProps: {
      variant: 'filled',
      color: 'red',
      ...createTestAttr(confirmId),
    },
    cancelProps: {
      variant: 'filled',
      color: 'gray',
    },
    ...createTestAttr(id),
    labels: { cancel: cancelLable, confirm: confirmLabel },
    ...rest,
  });
