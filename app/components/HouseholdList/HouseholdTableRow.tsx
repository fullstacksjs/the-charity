import type { HouseholdListItemDto } from '@camp/data-layer';
import { useDeleteHouseholdMutation } from '@camp/data-layer';
import { debug } from '@camp/debug';
import { showNotification } from '@camp/design';
import { messages } from '@camp/messages';
import { AppRoute, useNavigate } from '@camp/router';
import { isNull } from '@fullstacksjs/toolbox';
import { Group } from '@mantine/core';

import { openDeleteHouseholdModal } from '../DeleteHouseholdModal';
import { HouseholdActionButton } from '../HouseholdActionButton';
import { InformationBadge } from '../InformationBadge';
import { SeverityBadge } from '../SeverityBadge';
import * as ids from './HouseholdTableRow.ids';

interface Props {
  order: number;
  household: HouseholdListItemDto;
}

const t = messages.families.list.delete.modal;

export const HouseholdTableRow = ({ order, household }: Props) => {
  const navigate = useNavigate();
  const { id, informationStatus, name, severityStatus } = household;
  const [deleteHousehold] = useDeleteHouseholdMutation();

  const gotoDetail = () => {
    navigate({ to: `/dashboard/families/${id}` as AppRoute });
  };

  const onDeleteHousehold = async () => {
    try {
      const { data } = await deleteHousehold({ variables: { id } });

      if (isNull(data)) throw Error('Assert: data is null');
      showNotification({
        title: t.notification.title,
        message: t.notification.success(data.household.name),
        type: 'success',
      });
    } catch (err) {
      debug.error(err);
      showNotification({
        title: t.notification.title,
        message: t.notification.failed(name),
        type: 'failure',
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
        <InformationBadge information={informationStatus} />
      </td>
      <td>
        <Group position="apart">
          <SeverityBadge severity={severityStatus} />
          <HouseholdActionButton
            onDelete={e => {
              e.stopPropagation();
              handleDeleteHousehold();
            }}
            menuButtonId={ids.householdTableMenuButtonId}
            menuId={ids.householdTableMenuId}
            to={AppRoute.householdDetail}
            params={{ id }}
          />
        </Group>
      </td>
    </tr>
  );
};
