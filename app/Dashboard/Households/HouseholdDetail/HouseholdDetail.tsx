import {
  useCompleteHouseholdMutation,
  useDeleteHouseholdMutation,
  useHouseholderQuery,
  useHouseholdQuery,
} from '@camp/data-layer';
import { debug } from '@camp/debug';
import {
  DetailCard,
  FullPageLoader,
  showNotification,
  Tabs,
} from '@camp/design';
import { ArrowUpIcon, TrashIcon } from '@camp/icons';
import { errorMessages, messages } from '@camp/messages';
import { AppRoute, useNavigate, useParams } from '@camp/router';
import { isNull } from '@fullstacksjs/toolbox';
import { Button, Flex, Title } from '@mantine/core';

import { InformationBadge } from '../../_components/InformationBadge';
import { SeverityBadge } from '../../_components/SeverityBadge';
import { openDeleteHouseholdModal } from '../_components/DeleteHouseholdModal';
import { HouseholderDetail } from './_components/HouseholderDetail';
import { MemberList } from './_components/MemberList';
import { householdDetailIds as ids } from './HouseholdDetail.ids';

export const HouseholdDetail = () => {
  const t = messages.householdDetail;
  const tNotification = messages.notification.household;
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    data: householdData,
    loading,
    error,
  } = useHouseholdQuery({
    variables: { id },
  });
  const [deleteHousehold] = useDeleteHouseholdMutation();
  const [completeHousehold] = useCompleteHouseholdMutation();

  const household = householdData?.household;
  const { data: householderData } = useHouseholderQuery({
    variables: { id },
  });

  const householder = householderData?.householder;

  if (loading) return <FullPageLoader />;

  if (error) {
    showNotification({
      type: 'failure',
      title: t.title,
      message: errorMessages.UNKNOWN_ERROR,
    });
    return null;
  }
  if (isNull(household)) return <p>{t.notFound}</p>;

  const onDeleteHousehold = async () => {
    try {
      const { data } = await deleteHousehold({
        variables: { id: household.id },
      });

      if (isNull(data.household)) throw Error('Assert: data is null');
      showNotification({
        title: tNotification.delete.title,
        message: tNotification.delete.success(household.name),
        type: 'success',
      });
      navigate({ to: AppRoute.dashboard });
    } catch (err) {
      debug.error(err);
      showNotification({
        title: tNotification.delete.title,
        message: tNotification.delete.failed(household.name),
        type: 'failure',
      });
    }
  };

  const handleDeleteHousehold = () => {
    openDeleteHouseholdModal({ name: household.name, onDeleteHousehold });
  };

  const handleCompleteHousehold = async () => {
    try {
      await completeHousehold({ variables: { id: household.id } });
      showNotification({
        title: tNotification.complete.title,
        message: tNotification.complete.success(household.name),
        type: 'success',
      });
    } catch (err) {
      debug.error(err);
      showNotification({
        title: tNotification.complete.title,
        message: tNotification.complete.failed(household.name),
        type: 'failure',
      });
    }
  };

  return (
    <>
      <DetailCard
        title={t.title}
        id={household.code}
        px={0}
        left={
          <Flex gap={20}>
            <Button
              variant="outline"
              color="red"
              leftIcon={<TrashIcon />}
              onClick={handleDeleteHousehold}
            >
              {t.delete}
            </Button>
            {!household.isCompleted && (
              <Button
                leftIcon={<ArrowUpIcon />}
                onClick={handleCompleteHousehold}
                disabled={!householder?.isCompleted}
              >
                {t.complete}
              </Button>
            )}
          </Flex>
        }
      >
        <DetailCard.Section>
          <DetailCard.Field title={t.householdFields.name.title}>
            {household.name}
          </DetailCard.Field>
          <DetailCard.Field title={t.householdFields.severityStatus.title}>
            <SeverityBadge severity={household.severity} />
          </DetailCard.Field>

          <DetailCard.Field title={t.householdFields.informationStatus.title}>
            <InformationBadge
              status={household.isCompleted ? 'completed' : 'draft'}
            />
          </DetailCard.Field>
        </DetailCard.Section>
      </DetailCard>
      <Tabs
        tabs={[
          {
            tab: <Title order={5}>{t.tabs.householderTitle}</Title>,
            panel: (
              <HouseholderDetail
                householdId={household.id}
                householdName={household.name}
              />
            ),
            id: ids.householderTab,
            isBusy: !householder?.isCompleted,
            isDefault: true,
          },
          {
            tab: <Title order={5}>{t.tabs.membersTitle}</Title>,
            panel: <MemberList householdId={household.id} />,
            id: ids.memberFormTab,
          },
        ]}
      />
    </>
  );
};
