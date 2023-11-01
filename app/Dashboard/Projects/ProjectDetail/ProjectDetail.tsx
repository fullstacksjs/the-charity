import { useProjectQuery } from '@camp/data-layer';
import {
  DetailCard,
  FullPageLoader,
  showNotification,
  Tabs,
} from '@camp/design';
import { errorMessages, messages } from '@camp/messages';
import { useParams } from '@camp/router';
import { isEmpty, isNull } from '@fullstacksjs/toolbox';
import { Text, Title } from '@mantine/core';

import { ProjectAlbum } from '../_components/ProjectAlbum';
import { ProjectStatusBadge } from '../_components/ProjectStatusBadge';
import { ProjectDetailIds as ids } from './ProjectDetail.ids';

export const ProjectDetail = () => {
  const t = messages.projectDetail;
  const { id } = useParams();

  const { data, loading, error } = useProjectQuery({
    variables: { id },
  });
  const project = data?.project;
  const households = data?.households ?? [];

  if (loading) return <FullPageLoader />;

  if (error) {
    showNotification({
      type: 'failure',
      title: t.title,
      message: errorMessages.UNKNOWN_ERROR,
    });
    return null;
  }
  if (isNull(project)) return <p>{t.notFound}</p>;

  return (
    <>
      <DetailCard title={t.title}>
        <DetailCard.Section>
          <DetailCard.Field title={t.projectFields.name.title}>
            {project.name}
          </DetailCard.Field>
          <DetailCard.Field title={t.projectFields.projectStatus.title}>
            <ProjectStatusBadge status={project.status} />
          </DetailCard.Field>
          <DetailCard.Field title={t.projectFields.membersCount.title}>
            {isEmpty(households) ? (
              <Text color="fg.4">{t.projectFields.membersCount.empty}</Text>
            ) : (
              households.length
            )}
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
            panel: <ProjectAlbum />,
            id: ids.albumTab,
          },
        ]}
      />
    </>
  );
};
