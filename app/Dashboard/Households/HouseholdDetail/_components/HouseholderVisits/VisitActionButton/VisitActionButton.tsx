import { useDeleteVisitMutation } from '@camp/data-layer';
import { debug } from '@camp/debug';
import { formatToPersian, showNotification } from '@camp/design';
import { MenuIcon } from '@camp/icons';
import { messages } from '@camp/messages';
import { tid } from '@camp/test';
import { isNull } from '@fullstacksjs/toolbox';
import { ActionIcon, Menu } from '@mantine/core';

import { openDeleteVisitModal } from '../../DeleteVisitModal';
import { visitActionIds as ids } from './VisitActionButton.ids';

interface Props {
  open: VoidFunction;
  menuId?: string;
  menuButtonId?: string;
  visitDate: Date;
  visitId: string;
}

export const VisitActionButton = ({
  menuId,
  open,
  menuButtonId,
  visitDate,
  visitId: id,
}: Props) => {
  const [deleteVisit] = useDeleteVisitMutation();
  const t = messages.notification.visits.delete;
  const date = formatToPersian(visitDate);

  const onDeleteVisit = async () => {
    try {
      const { data } = await deleteVisit({
        variables: { id },
      });

      if (isNull(data)) throw Error('Assert: data is null');
      showNotification({
        title: t.title,
        message: t.success(data.visit!.name),
        type: 'success',
        ...tid(ids.notifications.delete.success),
      });
    } catch (err) {
      debug.error(err);
      showNotification({
        title: t.title,
        message: t.failed(date),
        type: 'failure',
        ...tid(ids.notifications.delete.failure),
      });
    }
  };

  const handleDeleteVisit = () => {
    openDeleteVisitModal({ name: date, onDeleteVisit });
  };

  return (
    <Menu width={100} shadow="md" withArrow>
      <Menu.Target {...tid(menuButtonId)}>
        <ActionIcon size="sm" onClick={e => e.stopPropagation()}>
          <MenuIcon />
        </ActionIcon>
      </Menu.Target>
      <Menu.Dropdown {...tid(menuId)}>
        <Menu.Item onClick={() => open()}>{messages.actions.open}</Menu.Item>
        <Menu.Item
          color="error"
          onClick={e => {
            e.stopPropagation();
            handleDeleteVisit();
          }}
        >
          {messages.actions.delete}
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};
