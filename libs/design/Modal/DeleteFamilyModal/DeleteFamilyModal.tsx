import { messages } from '@camp/messages';

import { showModal } from '../ShowModal';
import { deleteFamilyModalIds as Ids } from './DeleteFamilyModal.ids';

const t = messages.families.list.delete.modal;

export const openDeleteFamilyModal = (name: string) =>
  showModal({
    id: Ids.modal,
    title: t.title,
    children: t.children(name),
    cancelLable: t.cancel,
    confirmLabel: t.confirm,
    size: 'sm',
  });
