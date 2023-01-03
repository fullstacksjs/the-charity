import { ActionButton, Badge } from '@camp/design';
import { AppRoute, useNavigate } from '@camp/router';
import { Group } from '@mantine/core';

import type { ShortFamilyInfoTableRow } from './toShortFamilyInfoTableRows';

interface Props {
  shortFamilyInfoTableRow: ShortFamilyInfoTableRow;
}

export const familyTableMenuButtonId = 'family-table-menu-button';
export const familyTableMenuId = 'family-table-menu';

export const FamilyTableRow = ({
  shortFamilyInfoTableRow: {
    name,
    informationStatus,
    severityStatus,
    id,
    order,
  },
}: Props) => {
  const navigate = useNavigate();

  const gotoDetail = () => {
    navigate({ to: `/dashboard/families/${id}` as AppRoute });
  };

  return (
    <tr style={{ cursor: 'pointer' }} onClick={gotoDetail}>
      <td>{order}</td>
      <td>{name}</td>
      <td>
        <Badge status={informationStatus.state}>{informationStatus.text}</Badge>
      </td>
      <td>
        <Group position="apart">
          <Badge status={severityStatus.state}>{severityStatus.text}</Badge>
          <ActionButton
            menuButtonId={familyTableMenuButtonId}
            menuId={familyTableMenuId}
            to={AppRoute.familyDetail}
            params={{ id }}
          />
        </Group>
      </td>
    </tr>
  );
};
