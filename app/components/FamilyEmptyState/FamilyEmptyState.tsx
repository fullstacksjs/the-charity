import { EmptyState } from '@camp/design';
import { PeopleIcon } from '@camp/icons';
import { messages } from '@camp/messages';
import { useMantineTheme } from '@mantine/core';

import { CreateFamilyButton } from '../CreateFamily';

export const FamilyEmptyState = () => {
  const theme = useMantineTheme();
  return (
    <EmptyState
      icon={
        <PeopleIcon
          width="33"
          height="33"
          color={theme.colors.primaryEmphasized[6]}
        />
      }
      title={messages.families.empty.title}
      message={messages.families.empty.description}
    >
      <CreateFamilyButton variant="filled" />
    </EmptyState>
  );
};
