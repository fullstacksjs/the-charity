import { DashboardCard } from '@camp/design';
import { messages } from '@camp/messages';
import { Title } from '@mantine/core';

import { CreateProjectButton } from '../CreateProject';
import { ProjectTable } from './ProjectTable';

export const ProjectList = () => {
  const t = messages.projects.list;

  return (
    <DashboardCard
      left={<CreateProjectButton />}
      right={
        <Title order={4} color="fgMuted" weight="bold">
          {t.title}
        </Title>
      }
    >
      <ProjectTable />
    </DashboardCard>
  );
};
