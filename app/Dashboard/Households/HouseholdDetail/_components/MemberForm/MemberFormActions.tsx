import { DestructiveButton } from '@camp/design';
import { CheckIcon, EditIcon, TrashIcon } from '@camp/icons';
import { messages } from '@camp/messages';
import { tid } from '@camp/test';
import { Button, Group } from '@mantine/core';

import { memberFormIds as ids } from './MemberForm.ids';

interface Props {
  isEditMode: boolean;
  isDeleting: boolean;
  onDelete: VoidFunction;
  toggleEditMode: VoidFunction;
  onUndo: VoidFunction;
  isCreating: boolean;
  canSubmit: boolean;
}

export const MemberFormActions = ({
  isEditMode,
  isDeleting,
  onDelete,
  toggleEditMode,
  onUndo,
  canSubmit,
  isCreating,
}: Props) => {
  return !isEditMode ? (
    <Group>
      <DestructiveButton
        {...tid(ids.deleteBtn)}
        loading={isDeleting}
        variant="outline"
        leftIcon={<TrashIcon size={16} />}
        onClick={onDelete}
      >
        {messages.actions.delete}
      </DestructiveButton>
      <Button
        {...tid(ids.editBtn)}
        key={1}
        size="sm"
        variant="outline"
        onClick={() => toggleEditMode()}
        leftIcon={<EditIcon size={16} />}
      >
        {messages.actions.editBtn}
      </Button>
    </Group>
  ) : (
    <Group>
      <DestructiveButton {...tid(ids.cancelBtn)} onClick={onUndo}>
        {messages.actions.undoBtn}
      </DestructiveButton>
      <Button
        key={2}
        {...tid(ids.submitBtn)}
        loading={isCreating}
        type="submit"
        variant="filled"
        leftIcon={<CheckIcon size={16} />}
        disabled={!canSubmit}
      >
        {messages.actions.submitBtn}
      </Button>
    </Group>
  );
};
