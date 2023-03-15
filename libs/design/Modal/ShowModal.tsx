import { createTestAttr } from '@camp/test';
import { openConfirmModal } from '@mantine/modals';
import { type ConfirmModalProps } from '@mantine/modals/lib/ConfirmModal';
import { type ReactNode } from 'react';

interface Props extends ConfirmModalProps {
  id: string;
  children: ReactNode;
  title: string;
  cancelLable: string;
  confirmLabel: string;
}

export const showModal = ({
  id,
  children,
  title,
  cancelLable,
  confirmLabel,
  ...rest
}: Props) =>
  openConfirmModal({
    modalId: id,
    children,
    title,
    size: 'md',
    centered: true,
    ...createTestAttr(id),
    labels: { cancel: cancelLable, confirm: confirmLabel },
    ...rest,
  });
