import { messages } from '@camp/messages';
import type { PathParams } from '@camp/router';
import { Link } from '@camp/router';
import { createTestAttr } from '@camp/utils';
import { ActionIcon, Menu } from '@mantine/core';

import { MenuIcon } from '../../../icons';

interface Props {
  MenuId: string;
  MenuButtonId: string;
  to: AppRoute;
  params?: PathParams<AppRoute>;
}

export const ActionButton = ({ MenuId, MenuButtonId, to, params }: Props) => {
  return (
    <Menu width={100} shadow="md" withArrow>
      <Menu.Dropdown {...createTestAttr(MenuId)}>
        <Menu.Item to={to} params={params} component={Link}>
          {messages.actions.open}
        </Menu.Item>
      </Menu.Dropdown>
      <Menu.Target {...createTestAttr(MenuButtonId)}>
        <ActionIcon
          size="sm"
          onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
            e.stopPropagation()
          }
        >
          <MenuIcon />
        </ActionIcon>
      </Menu.Target>
    </Menu>
  );
};
