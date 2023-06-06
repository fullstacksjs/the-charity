import { DetailCard, Tabs } from '@camp/design';
import type { Project } from '@camp/domain';
import { messages } from '@camp/messages';
import { Text, Title } from '@mantine/core';

import { ProjectStatusBadge } from '../../../../components';
import { ProjectDetailIds as ids } from './ProjectDetail.ids';

export const ProjectDetail = () => {
  const t = messages.projectDetail;

  const project: Project = {
    description: 'بار چندمه زنگ میزنی امشب؟\nهاشمی نداریم.',
    id: 'null',
    name: 'خرید لوازم',
    startDate: new Date('2022-12-23T13:59:33Z'),
    status: 'inProgress',
  };

  return (
    <>
      <DetailCard title={t.title} px={0}>
        <DetailCard.Section>
          <DetailCard.Field title={t.projectFields.name.title}>
            {project.name}
          </DetailCard.Field>
          <DetailCard.Field title={t.projectFields.projectStatus.title}>
            <ProjectStatusBadge />
          </DetailCard.Field>
          <DetailCard.Field title={t.projectFields.membersCount.title}>
            <Text color="fgSubtle">{t.projectFields.membersCount.empty}</Text>
          </DetailCard.Field>
          <DetailCard.DateField
            title={t.projectFields.startDate.title}
            date={project.startDate}
          />
          <DetailCard.DateField
            title={t.projectFields.endDate.title}
            date={project.endDate}
          />
        </DetailCard.Section>

        <DetailCard.Section>
          <DetailCard.Field title={t.projectFields.description.title}>
            <Text sx={{ whiteSpace: 'pre-wrap' }}>{project.description}</Text>
          </DetailCard.Field>
        </DetailCard.Section>
      </DetailCard>

      <Tabs
        tabs={[
          {
            tab: <Title order={5}>{t.tabs.membersTitle}</Title>,
            panel: <div />,
            id: ids.membersTab,
          },
          {
            tab: <Title order={5}>{t.tabs.albumTitle}</Title>,
            panel: <div />,
            id: ids.albumTab,
          },
        ]}
      />
    </>
  );
};
