import { tid } from '@camp/test';
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
  destructive?: boolean;
}

export const showModal = ({
  id,
  children,
  title,
  size,
  cancelLable,
  confirmLabel,
  confirmId,
  destructive,
  ...rest
}: Props) =>
  openConfirmModal({
    modalId: id,
    children,
    title,
    size,
    centered: true,
    groupProps: { spacing: 10 },
    confirmProps: {
      variant: 'filled',
      color: destructive ? 'error' : 'primary',
      ...tid(confirmId),
    },
    cancelProps: {
      color: 'secondary',
    },
    ...tid(id),
    labels: { cancel: cancelLable, confirm: confirmLabel },
    ...rest,
  });
