import { DashboardTitle, DestructiveButton } from '@camp/design';
import { CheckIcon, EditIcon } from '@camp/icons';
import { messages } from '@camp/messages';
import { tid } from '@camp/test';
import { Button, Group } from '@mantine/core';

import { householderFormIds as ids } from './_components/HouseholderIdentityForm/HouseholderIdentityForm.ids';

interface Props {
  isEditMode?: boolean;
  canUndo?: boolean;
  canSubmit?: boolean;
  title: string;
  onUndo: VoidFunction;
  onEdit: VoidFunction;
}

export const HouseholderFormActions = ({
  canSubmit,
  canUndo,
  title,
  isEditMode,
  onUndo,
  onEdit,
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
              {...tid(ids.cancel)}
            >
              {messages.actions.undoBtn}
            </DestructiveButton>
            <Button
              {...tid(ids.submitBtn)}
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
            {...tid(ids.editBtn)}
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
