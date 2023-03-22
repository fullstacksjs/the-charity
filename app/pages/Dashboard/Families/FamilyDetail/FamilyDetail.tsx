import { useFamilyQuery } from '@camp/data-layer';
import {
  DetailCard,
  FullPageLoader,
  showNotification,
  Tabs,
} from '@camp/design';
import { TrashIcon } from '@camp/icons';
import { errorMessages, messages } from '@camp/messages';
import { useParams } from '@camp/router';
import { isNull } from '@fullstacksjs/toolbox';
import { Button, Title } from '@mantine/core';

import {
  HouseholderForm,
  InformationBadge,
  MemberForm,
  openDeleteFamilyModal,
  SeverityBadge,
} from '../../../../components';
import { familyDetailIds as ids } from './FamilyDetail.ids';

export const FamilyDetail = () => {
  const t = messages.familyDetail;
  const familyId = useParams();
  const { data, loading, error } = useFamilyQuery({
    variables: { id: familyId },
  });
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

  return (
    <>
      <DetailCard
        title={t.title}
        id={family.code}
        left={
          <Button
            variant="outline"
            color="red"
            leftIcon={<TrashIcon width="18" height="18" />}
            px="lg"
            py="8px"
            onClick={() => openDeleteFamilyModal(family.name)}
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
            panel: <HouseholderForm familyId={family.id} />,
            id: ids.householderIdentityTab,
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
