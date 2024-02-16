import { PlusIcon } from '@camp/icons';
import { messages } from '@camp/messages';
import { tid } from '@camp/test';
import { Button } from '@mantine/core';

import { openAddHouseholderVisitModal } from '../AddHouseholderVisitModal';
import { addHouseholderVisitButtonId as id } from './AddHouseholderVisitButton.ids';

interface Props {
  householdId: string;
}

export const AddHouseholderVisitButton = ({ householdId }: Props) => {
  const t = messages.householder.visits;

  return (
    <Button
      variant="outline"
      size="sm"
      {...tid(id)}
      onClick={() => openAddHouseholderVisitModal({ householdId })}
      leftIcon={<PlusIcon size={16} />}
    >
      {t.addVisit}
    </Button>
  );
};
