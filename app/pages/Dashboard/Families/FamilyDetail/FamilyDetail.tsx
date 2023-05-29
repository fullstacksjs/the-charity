import { useDeleteFamilyMutation, useFamilyQuery } from '@camp/data-layer';
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
  openDeleteFamilyModal,
  SeverityBadge,
} from '../../../../components';
import { familyDetailIds as ids } from './FamilyDetail.ids';

export const FamilyDetail = () => {
  const t = messages.familyDetail;
  const tModal = messages.families.list.delete.modal;
  const familyId = useParams();
  const navigate = useNavigate();
  const { data, loading, error } = useFamilyQuery({
    variables: { id: familyId },
  });
  const [deleteFamily] = useDeleteFamilyMutation();

  const family = data?.family;
  if (loading) return <FullPageLoader />;

  if (error) {
    showNotification({
      type: 'failure',
      title: t.title,
      message: errorMessages.UNKNOWN_ERROR,
    });
    return null;
  }
  if (isNull(family)) return <p>{t.notFound}</p>;

  const onDeleteFamily = async () => {
    try {
      const { data: familyData } = await deleteFamily({
        variables: { id: family.id },
      });

      if (isNull(familyData)) throw Error('Assert: Family is null');

      showNotification({
        title: tModal.notification.title,
        message: tModal.notification.success(family.name),
        type: 'success',
      });
      navigate({ to: '/' });
    } catch (err) {
      debug.error(err);
      showNotification({
        title: tModal.notification.title,
        message: tModal.notification.failed(family.name),
        type: 'failure',
      });
    }
  };

  const handleDeleteFamily = () => {
    openDeleteFamilyModal({ name: family.name, onDeleteFamily });
  };

  return (
    <>
      <DetailCard
        title={t.title}
        id={family.code}
        px={0}
        left={
          <Button
            variant="outline"
            color="red"
            leftIcon={<TrashIcon width="18" height="18" />}
            px="lg"
            py="8px"
            onClick={handleDeleteFamily}
          >
            {t.delete}
          </Button>
        }
      >
        <DetailCard.TextField title={t.familyFields.name.title}>
          {family.name}
        </DetailCard.TextField>
        <DetailCard.BadgeField
          title={t.familyFields.severityStatus.title}
          badge={<SeverityBadge severity={family.severityStatus} />}
        />
        <DetailCard.BadgeField
          badge={<InformationBadge information={family.informationStatus} />}
          title={t.familyFields.informationStatus.title}
        />
      </DetailCard>
      <Tabs
        tabs={[
          {
            tab: <Title order={5}>{t.tabs.householderTitle}</Title>,
            panel: <HouseholderDetail familyId={family.id} />,
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
