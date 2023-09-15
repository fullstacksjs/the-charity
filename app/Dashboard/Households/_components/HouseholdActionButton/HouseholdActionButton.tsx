import { useDeleteHouseholdMutation } from '@camp/data-layer';
import { debug } from '@camp/debug';
import { showNotification } from '@camp/design';
import { MenuIcon } from '@camp/icons';
import { messages } from '@camp/messages';
import type { AppRoute, PathParams } from '@camp/router';
import { Link } from '@camp/router';
import { tid } from '@camp/test';
import { isNull } from '@fullstacksjs/toolbox';
import { ActionIcon, Menu } from '@mantine/core';

import { openDeleteHouseholdModal } from '../DeleteHouseholdModal';
import { householdActionIds as ids } from './HouseholdActionButton.ids';

interface Props {
  to: AppRoute;
  householdName: string;
  householdId: string;
  params?: PathParams<AppRoute>;
  menuId?: string;
  menuButtonId?: string;
}

export const HouseholdActionButton = ({
  menuId,
  menuButtonId,
  to,
  params,
  householdId: id,
  householdName: name,
}: Props) => {
  const [deleteHousehold] = useDeleteHouseholdMutation();
  const t = messages.notification.household.delete;

  const onDeleteHousehold = async () => {
    try {
      const { data } = await deleteHousehold({
        variables: { id },
      });

      if (isNull(data)) throw Error('Assert: data is null');
      showNotification({
        title: t.title,
        message: t.success(data.household!.name),
        type: 'success',
        ...tid(ids.notifications.delete.success),
      });
    } catch (err) {
      debug.error(err);
      showNotification({
        title: t.title,
        message: t.failed(name),
        type: 'failure',
        ...tid(ids.notifications.delete.failure),
      });
    }
  };

  const handleDeleteHousehold = () => {
    openDeleteHouseholdModal({ name, onDeleteHousehold });
  };

  return (
    <Menu width={100} shadow="md" withArrow>
      <Menu.Target {...tid(menuButtonId)}>
        <ActionIcon size="sm" onClick={e => e.stopPropagation()}>
          <MenuIcon />
        </ActionIcon>
      </Menu.Target>
      <Menu.Dropdown {...tid(menuId)}>
        <Menu.Item to={to} params={params} component={Link}>
          {messages.actions.open}
        </Menu.Item>
        <Menu.Item
          color="error"
          onClick={e => {
            e.stopPropagation();
            handleDeleteHousehold();
          }}
        >
          {messages.actions.delete}
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};
