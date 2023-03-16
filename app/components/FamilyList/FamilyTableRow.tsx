import { type FamilyListItemDto } from '@camp/data-layer';
import { AppRoute, useNavigate } from '@camp/router';
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

export const FamilyTableRow = ({ order, family }: Props) => {
  const navigate = useNavigate();
  const { id, informationStatus, name, severityStatus } = family;

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
              openDeleteFamilyModal(name);
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
