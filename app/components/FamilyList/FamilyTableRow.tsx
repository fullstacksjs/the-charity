import type { FamilyListItem } from '@camp/data-layer';
import { ActionButton } from '@camp/design';
import { AppRoute, useNavigate } from '@camp/router';
import { Group } from '@mantine/core';

import { InformationBadge } from '../InformationBadge';
import { SeverityBadge } from '../SeverityBadge';
import * as ids from './FamilyTableRow.ids';

interface Props {
  order: number;
  family: FamilyListItem;
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
          <ActionButton
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
