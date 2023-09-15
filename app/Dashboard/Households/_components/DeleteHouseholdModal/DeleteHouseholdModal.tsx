import { showModal } from '@camp/design';
import { messages } from '@camp/messages';

import { deleteHouseholdModalIds as Ids } from './DeleteHouseholdModal.ids';

const t = messages.households.list.delete.modal;

interface Props {
  name: string;
  onDeleteHousehold: () => Promise<void>;
}

export const openDeleteHouseholdModal = ({ name, onDeleteHousehold }: Props) =>
  showModal({
    id: Ids.modal,
    title: t.title,
    children: t.children(name),
    cancelLable: t.cancel,
    confirmLabel: t.confirm,
    size: 'sm',
    onConfirm: () => void onDeleteHousehold(),
    destructive: true,
  });
