import {
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
import { TrashIcon } from '@camp/icons';
import { errorMessages, messages } from '@camp/messages';
import { AppRoute, useNavigate, useParams } from '@camp/router';
import { isNull } from '@fullstacksjs/toolbox';
import { Button, Title } from '@mantine/core';

import {
  HouseholderDetail,
  InformationBadge,
  MemberForm,
  SeverityBadge,
} from '../../../../components';
import { openDeleteHouseholdModal } from '../DeleteHouseholdModal';
import { householdDetailIds as ids } from './HouseholdDetail.ids';

export const HouseholdDetail = () => {
  const t = messages.householdDetail;
  const tModal = messages.households.list.delete.modal;
  const householdId = useParams();
  const navigate = useNavigate();
  const {
    data: householdData,
    loading,
    error,
  } = useHouseholdQuery({
    variables: { id: householdId },
  });
  const [deleteHousehold] = useDeleteHouseholdMutation();

  const household = householdData?.household;
  const { data: householderData } = useHouseholderQuery({
    variables: { id: householdId },
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
      await deleteHousehold({ variables: { id: household.id } });

      showNotification({
        title: tModal.notification.title,
        message: tModal.notification.success(household.name),
        type: 'success',
      });
      navigate({ to: AppRoute.dashboard });
    } catch (err) {
      debug.error(err);
      showNotification({
        title: tModal.notification.title,
        message: tModal.notification.failed(household.name),
        type: 'failure',
      });
    }
  };

  const handleDeleteHousehold = () => {
    openDeleteHouseholdModal({ name: household.name, onDeleteHousehold });
  };

  return (
    <>
      <DetailCard
        title={t.title}
        id={household.code}
        px={0}
        left={
          <Button
            variant="outline"
            color="red"
            leftIcon={<TrashIcon width="18" height="18" />}
            px="lg"
            py="8px"
            onClick={handleDeleteHousehold}
          >
            {t.delete}
          </Button>
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
              information={household.isCompleted ? 'completed' : 'draft'}
            />
          </DetailCard.Field>
        </DetailCard.Section>
      </DetailCard>
      <Tabs
        tabs={[
          {
            tab: <Title order={5}>{t.tabs.householderTitle}</Title>,
            panel: <HouseholderDetail householdId={household.id} />,
            id: ids.householderTab,
            isBusy: !householder?.isCompleted,
            isDefault: true,
          },
          {
            tab: <Title order={5}>{t.tabs.membersTitle}</Title>,
            panel: <MemberForm />,
            id: ids.memberFormTab,
          },
        ]}
      />
    </>
  );
};
