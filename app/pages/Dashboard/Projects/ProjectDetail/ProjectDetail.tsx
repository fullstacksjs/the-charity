import { DetailCard } from '@camp/design';
import type { Project } from '@camp/domain';
import { messages } from '@camp/messages';
import { Space, Text } from '@mantine/core';

import { ProjectBadge } from '../../../../components';

export const ProjectDetail = () => {
  const t = messages.projectDetail;

  const project: Project = {
    description: 'بار چندمه زنگ میزنی امشب؟\nهاشمی نداریم.',
    id: 'null',
    name: 'خرید لوازم',
    startDate: new Date(),
    status: 'inProgress',
  };

  return (
    // FIXME: fix space between detail items
    <DetailCard title={t.title} px={0}>
      <DetailCard.TextField title={t.projectFields.name.title}>
        {project.name}
      </DetailCard.TextField>
      <DetailCard.BadgeField
        title={t.projectFields.projectStatus.title}
        badge={<ProjectBadge />}
      />
      <DetailCard.TextField title={t.projectFields.membersCount.title}>
        <Text color="fgSubtle">{t.projectFields.membersCount.empty}</Text>
      </DetailCard.TextField>
      <DetailCard.DateField
        title={t.projectFields.startDate.title}
        date={project.startDate}
      />
      <DetailCard.DateField
        title={t.projectFields.endDate.title}
        date={project.endDate}
      />
      <Space />
      <DetailCard.TextField title={t.projectFields.description.title}>
        {project.description}
      </DetailCard.TextField>
    </DetailCard>
  );
};
