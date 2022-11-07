import { PackageIcon } from '@camp/design';
import { messages } from '@camp/messages';
import { useMantineTheme } from '@mantine/core';

import { EmptyState } from '../molecules';

export const ProjectEmptyState = () => {
  const theme = useMantineTheme();

  return (
    <EmptyState
      icon={
        <PackageIcon
          width="33"
          height="33"
          color={theme.colors.primaryEmphasized[6]}
        />
      }
      title={messages.projects.empty.title}
      message={messages.projects.empty.description}
    />
  );
};
