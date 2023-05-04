import type { FamilyListItemDto } from '@camp/data-layer';
import { useDeleteFamilyMutation } from '@camp/data-layer';
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
  const [DeleteFamilyMutation] = useDeleteFamilyMutation();

  const gotoDetail = () => {
    navigate({ to: `/dashboard/families/${id}` as AppRoute });
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
              openDeleteFamilyModal({
                name,
                onDeleteFamily: async () => {
                  // FIXME: maybe abstract
                  try {
                    const { data } = await DeleteFamilyMutation({
                      variables: { id },
                    });

                    if (isNull(data)) throw new Error('data is null');
                    showNotification({
                      title: t.notification.title,
                      message: t.notification.successfulDeleted(
                        data.family.name,
                      ),
                      type: 'success',
                    });
                  } catch (err) {
                    console.error('error occurred', err);
                    showNotification({
                      title: t.notification.title,
                      message: t.notification.failedDeleted(name),
                      type: 'failure',
                    });
                  }
                },
              });
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
