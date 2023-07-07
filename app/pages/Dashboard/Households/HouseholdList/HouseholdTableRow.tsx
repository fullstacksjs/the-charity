import { useDeleteHouseholdMutation } from '@camp/data-layer';
import { debug } from '@camp/debug';
import { showNotification } from '@camp/design';
import type { HouseholderKeys, HouseholdListItem } from '@camp/domain';
import { messages } from '@camp/messages';
import { AppRoute, useNavigate } from '@camp/router';
import { createTestAttr } from '@camp/test';
import { isNull } from '@fullstacksjs/toolbox';
import { Group } from '@mantine/core';

import { InformationBadge } from '../../../../components/InformationBadge';
import { SeverityBadge } from '../../../../components/SeverityBadge';
import { openDeleteHouseholdModal } from '../DeleteHouseholdModal';
import { HouseholdActionButton } from '../HouseholdActionButton';
import { householdRowIds as ids } from './HouseholdTableRow.ids';

interface Props {
  order: number;
  household: HouseholderKeys & HouseholdListItem;
}

const t = messages.notification.household;

export const HouseholdTableRow = ({ order, household }: Props) => {
  const navigate = useNavigate();
  const { id, severity, name, isCompleted } = household;
  const [deleteHousehold] = useDeleteHouseholdMutation();

  const gotoDetail = () => {
    navigate({ to: `/dashboard/households/${id}` as AppRoute });
  };

  const onDeleteHousehold = async () => {
    try {
      const { data } = await deleteHousehold({ variables: { id } });

      if (isNull(data.household)) throw Error('Assert: data is null');
      showNotification({
        title: t.delete.title,
        message: t.delete.success(data.household.name),
        type: 'success',
        ...createTestAttr(ids.notifications.delete.success),
      });
    } catch (err) {
      debug.error(err);
      showNotification({
        title: t.delete.title,
        message: t.delete.failed(name),
        type: 'failure',
        ...createTestAttr(ids.notifications.delete.failure),
      });
    }
  };

  const handleDeleteHousehold = () => {
    openDeleteHouseholdModal({ name, onDeleteHousehold });
  };

  return (
    <tr style={{ cursor: 'pointer' }} onClick={gotoDetail}>
      <td>{order}</td>
      <td>{name}</td>
      <td>
        <InformationBadge information={isCompleted ? 'completed' : 'draft'} />
      </td>
      <td>
        <Group position="apart">
          <SeverityBadge severity={severity} />
          <HouseholdActionButton
            onDelete={e => {
              e.stopPropagation();
              handleDeleteHousehold();
            }}
            menuButtonId={ids.actionButton}
            menuId={ids.actionMenu}
            to={AppRoute.householdDetail}
            params={{ id }}
          />
        </Group>
      </td>
    </tr>
  );
};
