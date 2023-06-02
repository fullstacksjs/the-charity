import { DetailCard } from '@camp/design';
import { messages } from '@camp/messages';
import { Space, Text } from '@mantine/core';

import { ProjectBadge } from '../../../../components';

export const ProjectDetail = () => {
  const t = messages.projectDetail;

  const project = {
    description: 'بار چندمه زنگ میزنی امشب؟\nهاشمی نداریم.',
    due_date: 'تعیین نشده',
    id: 'null',
    name: 'خرید لوازم',
    start_date: '۱۴۰۲/۱۰/۰۱',
    status: 'inProgress',
    households: [],
  } as const;

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
        {/* FIXME: abstract this inside the textField as empty */}
        <Text color="fgSubtle">{t.projectFields.membersCount.empty}</Text>
      </DetailCard.TextField>
      <DetailCard.TextField title={t.projectFields.startDate.title}>
        {project.start_date}
      </DetailCard.TextField>
      <DetailCard.TextField title={t.projectFields.endDate.title}>
        <Text color="fgSubtle">{project.due_date}</Text>
      </DetailCard.TextField>
      <Space />
      <DetailCard.TextField title={t.projectFields.description.title}>
        {project.description}
      </DetailCard.TextField>
    </DetailCard>
  );
};
