import { showModal } from '@camp/design';
import { messages } from '@camp/messages';

import { deleteVisitModalIds as Ids } from './DeleteVisitModal.ids';

const t = messages.householder.visits.delete.modal;

interface Props {
  name: string;
  onDeleteVisit: () => Promise<void>;
}

export const openDeleteVisitModal = ({ name, onDeleteVisit }: Props) =>
  showModal({
    id: Ids.modal,
    title: t.title,
    children: t.children(name),
    cancelLable: t.cancel,
    confirmLabel: t.confirm,
    size: 'sm',
    onConfirm: () => void onDeleteVisit(),
    destructive: true,
  });
