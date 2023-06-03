import {
  useDeleteHouseholdMutation,
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
import { useNavigate, useParams } from '@camp/router';
import { isNull } from '@fullstacksjs/toolbox';
import { Button, Title } from '@mantine/core';

import {
  HouseholderDetail,
  InformationBadge,
  MemberForm,
  openDeleteHouseholdModal,
  SeverityBadge,
} from '../../../../components';
import { householdDetailIds as ids } from './HouseholdDetail.ids';

export const HouseholdDetail = () => {
  const t = messages.householdDetail;
  const tModal = messages.families.list.delete.modal;
  const householdId = useParams();
  const navigate = useNavigate();
  const { data, loading, error } = useHouseholdQuery({
    variables: { id: householdId },
  });
  const [deleteHousehold] = useDeleteHouseholdMutation();

  const household = data?.household;
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
      const { data: householdData } = await deleteHousehold({
        variables: { id: household.id },
      });

      if (isNull(householdData)) throw Error('Assert: Household is null');

      showNotification({
        title: tModal.notification.title,
        message: tModal.notification.success(household.name),
        type: 'success',
      });
      navigate({ to: '/' });
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
          <DetailCard.TextField title={t.householdFields.name.title}>
            {household.name}
          </DetailCard.TextField>
          <DetailCard.BadgeField
            title={t.householdFields.severityStatus.title}
            badge={<SeverityBadge severity={household.severityStatus} />}
          />
          <DetailCard.BadgeField
            badge={
              <InformationBadge information={household.informationStatus} />
            }
            title={t.householdFields.informationStatus.title}
          />
        </DetailCard.Section>
      </DetailCard>
      <Tabs
        tabs={[
          {
            tab: <Title order={5}>{t.tabs.householderTitle}</Title>,
            panel: <HouseholderDetail householdId={household.id} />,
            id: ids.householderTab,
            isBusy: true,
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
