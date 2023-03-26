import { MenuIcon } from '@camp/icons';
import { messages } from '@camp/messages';
import type { AppRoute, PathParams } from '@camp/router';
import { Link } from '@camp/router';
import { createTestAttr } from '@camp/test';
import { ActionIcon, Menu } from '@mantine/core';

interface Props {
  to: AppRoute;
  params?: PathParams<AppRoute>;
  menuId?: string;
  menuButtonId?: string;
  onDelete?: React.MouseEventHandler<HTMLButtonElement>;
}

export const FamilyActionButton = ({
  menuId,
  menuButtonId,
  to,
  params,
  onDelete,
}: Props) => {
  return (
    <Menu width={100} shadow="md" withArrow>
      <Menu.Target {...createTestAttr(menuButtonId)}>
        <ActionIcon size="sm" onClick={e => e.stopPropagation()}>
          <MenuIcon />
        </ActionIcon>
      </Menu.Target>
      <Menu.Dropdown {...createTestAttr(menuId)}>
        <Menu.Item to={to} params={params} component={Link}>
          {messages.actions.open}
        </Menu.Item>
        <Menu.Item color="red" onClick={onDelete}>
          {messages.actions.delete}
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};
