import { DashboardTitle, DestructiveButton } from '@camp/design';
import { CheckIcon, EditIcon } from '@camp/icons';
import { messages } from '@camp/messages';
import { tid } from '@camp/test';
import { Button, Group } from '@mantine/core';

import { householderFormActionsIds as ids } from './HouseholderFormActions.ids';

interface Props {
  isEditMode?: boolean;
  canUndo?: boolean;
  canSubmit?: boolean;
  title: string;
  onUndo: VoidFunction;
  onEdit: VoidFunction;
  idPrefix: string;
}

export const HouseholderFormActions = ({
  canSubmit,
  canUndo,
  title,
  isEditMode,
  onUndo,
  onEdit,
  idPrefix,
}: Props) => {
  return (
    <Group position="apart" mih="100%">
      <DashboardTitle>{title}</DashboardTitle>
      <Group spacing={20}>
        {isEditMode ? (
          <>
            <DestructiveButton
              disabled={!canUndo}
              onClick={onUndo}
              {...tid(`${idPrefix}-${ids.cancel}`)}
            >
              {messages.actions.undoBtn}
            </DestructiveButton>
            <Button
              {...tid(`${idPrefix}-${ids.submitBtn}`)}
              type="submit"
              leftIcon={<CheckIcon size={16} />}
              disabled={!canSubmit}
            >
              {messages.actions.submitBtn}
            </Button>
          </>
        ) : (
          <Button
            key={1}
            {...tid(`${idPrefix}-${ids.editBtn}`)}
            variant="outline"
            onClick={onEdit}
            leftIcon={<EditIcon size={16} />}
          >
            {messages.actions.editBtn}
          </Button>
        )}
      </Group>
    </Group>
  );
};
