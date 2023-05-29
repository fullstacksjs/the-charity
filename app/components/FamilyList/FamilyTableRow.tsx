import type { FamilyListItemDto } from '@camp/data-layer';
import { useDeleteFamilyMutation } from '@camp/data-layer';
import { debug } from '@camp/debug';
import { showNotification } from '@camp/design';
import { messages } from '@camp/messages';
import { AppRoute, useNavigate } from '@camp/router';
import { isNull } from '@fullstacksjs/toolbox';
import { Group } from '@mantine/core';

import { openDeleteFamilyModal } from '../DeleteFamilyModal';
import { FamilyActionButton } from '../FamilyActionButton';
import { InformationBadge } from '../InformationBadge';
import { SeverityBadge } from '../SeverityBadge';
import * as ids from './FamilyTableRow.ids';

interface Props {
  order: number;
  family: FamilyListItemDto;
}

const t = messages.families.list.delete.modal;

export const FamilyTableRow = ({ order, family }: Props) => {
  const navigate = useNavigate();
  const { id, informationStatus, name, severityStatus } = family;
  const [deleteFamily] = useDeleteFamilyMutation();

  const gotoDetail = () => {
    navigate({ to: `/dashboard/families/${id}` as AppRoute });
  };

  const onDeleteFamily = async () => {
    try {
      const { data } = await deleteFamily({ variables: { id } });

      if (isNull(data)) throw Error('Assert: data is null');
      showNotification({
        title: t.notification.title,
        message: t.notification.success(data.family.name),
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

  const handleDeleteFamily = () => {
    openDeleteFamilyModal({ name, onDeleteFamily });
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
          <FamilyActionButton
            onDelete={e => {
              e.stopPropagation();
              handleDeleteFamily();
            }}
            menuButtonId={ids.familyTableMenuButtonId}
            menuId={ids.familyTableMenuId}
            to={AppRoute.familyDetail}
            params={{ id }}
          />
        </Group>
      </td>
    </tr>
  );
};
