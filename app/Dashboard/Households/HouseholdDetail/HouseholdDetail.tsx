import {
  useCompleteHouseholdMutation,
  useDeleteHouseholdMutation,
  useEditHouseholdMutation,
  useHouseholderQuery,
  useHouseholdQuery,
} from '@camp/data-layer';
import { debug } from '@camp/debug';
import {
  ControlledSelect,
  DestructiveButton,
  DetailCard,
  FullPageLoader,
  showNotification,
  Tabs,
  TextInput,
} from '@camp/design';
import type { HouseholdSeverityEnum } from '@camp/domain';
import {
  createResolver,
  householderSchema,
  householdSchema,
  severities,
} from '@camp/domain';
import { ArrowUpIcon, CheckIcon, EditIcon, TrashIcon } from '@camp/icons';
import { errorMessages, messages } from '@camp/messages';
import { AppRoute, useNavigate, useParams } from '@camp/router';
import { tid } from '@camp/test';
import { isNull } from '@fullstacksjs/toolbox';
import { Button, Flex, Title } from '@mantine/core';
import { useBoolean } from 'ahooks';
import { useForm } from 'react-hook-form';

import { InformationBadge } from '../../_components/InformationBadge';
import { SeverityBadge } from '../../_components/SeverityBadge';
import { openDeleteHouseholdModal } from '../_components/DeleteHouseholdModal';
import { HouseholderDetail } from './_components/HouseholderDetail';
import { HouseholderVisits } from './_components/HouseholderVisits';
import { MemberList } from './_components/MemberList';
import { householdDetailIds as ids } from './HouseholdDetail.ids';
import { householdNotifications } from './householdNotifications';

interface FormSchema {
  name: string;
  severity: HouseholdSeverityEnum;
  membersCount: number;
}

const resolver = createResolver<FormSchema>({
  name: householdSchema.name(),
  severity: householdSchema.severity(),
  membersCount: householderSchema.membersCount(),
});

// eslint-disable-next-line max-lines-per-function
export const HouseholdDetail = () => {
  const t = messages.householdDetail;
  const tNotification = messages.notification.household;
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isValid, isDirty },
    control,
  } = useForm<FormSchema>({
    resolver,
    mode: 'onChange',
  });

  const {
    data: householdData,
    loading,
    error,
  } = useHouseholdQuery({
    variables: { id },
    onCompleted: d => {
      reset(d.household ?? {});
    },
  });

  const [isEditing, { set: setIsEditing }] = useBoolean(false);

  const isReadOnly = !isEditing;

  const [deleteHousehold, { loading: isDeleting }] =
    useDeleteHouseholdMutation();
  const [completeHousehold] = useCompleteHouseholdMutation();
  const [updateHousehold] = useEditHouseholdMutation();

  const household = householdData?.household;
  const { data: householderData } = useHouseholderQuery({
    variables: { id },
  });

  const onUpdateHousehold = handleSubmit(async values => {
    try {
      await updateHousehold({
        variables: {
          id,
          update: { name: values.name, severity: values.severity },
        },
      });
      setIsEditing(false);
      householdNotifications.edit.success(values.name);
    } catch (err) {
      debug.error(err);
      householdNotifications.edit.failure(values.name);
    }
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

  const undo = () => {
    reset();
    setIsEditing(false);
  };

  return (
    <>
      <form onSubmit={onUpdateHousehold} {...tid(ids.form)}>
        <DetailCard
          title={t.title}
          id={household.code}
          left={
            <Flex gap={20}>
              {isEditing ? (
                <>
                  <DestructiveButton onClick={undo}>
                    {messages.actions.undoBtn}
                  </DestructiveButton>
                  <Button
                    {...tid(ids.submitBtn)}
                    type="submit"
                    size="sm"
                    leftIcon={<CheckIcon size={16} />}
                    disabled={!isValid || !isDirty}
                  >
                    {messages.actions.submitBtn}
                  </Button>
                </>
              ) : (
                <>
                  <DestructiveButton
                    loading={isDeleting}
                    leftIcon={<TrashIcon />}
                    onClick={handleDeleteHousehold}
                  >
                    {t.delete}
                  </DestructiveButton>
                  {!household.isCompleted && (
                    <Button
                      leftIcon={<ArrowUpIcon />}
                      onClick={handleCompleteHousehold}
                      disabled={!householder?.isCompleted}
                    >
                      {t.complete}
                    </Button>
                  )}
                  <Button
                    key={1}
                    {...tid(ids.editBtn)}
                    type="button"
                    size="sm"
                    variant="outline"
                    onClick={() => setIsEditing(true)}
                    leftIcon={<EditIcon size={16} />}
                  >
                    {messages.actions.editBtn}
                  </Button>
                </>
              )}
            </Flex>
          }
        >
          <DetailCard.Section>
            <TextInput
              readOnly={isReadOnly}
              wrapperProps={tid(ids.nameField)}
              {...register('name')}
              label={`${t.householdFields.name.title}:`}
              error={errors.name?.message}
            />

            <ControlledSelect
              readOnly={isReadOnly}
              presentation={v => (
                <DetailCard.Field
                  {...tid(ids.severityField)}
                  title={t.householdFields.severityStatus.title}
                >
                  <SeverityBadge severity={v as HouseholdSeverityEnum} />
                </DetailCard.Field>
              )}
              name="severity"
              control={control}
              wrapperProps={tid(ids.severityField)}
              data={severities.map(v => ({
                value: v,
                label: messages.households.severityStatus[v],
              }))}
              label={`${t.householdFields.severityStatus.title}:`}
            />

            <DetailCard.Field
              {...tid(ids.memberCountField)}
              title={t.householdFields.membersCount.title}
            >
              {t.householdFields.membersCount.present(household.membersCount)}
            </DetailCard.Field>

            <DetailCard.Field
              {...tid(ids.statusField)}
              title={t.householdFields.informationStatus.title}
            >
              <InformationBadge
                status={household.isCompleted ? 'completed' : 'draft'}
              />
            </DetailCard.Field>
          </DetailCard.Section>
        </DetailCard>
      </form>
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
          {
            tab: <Title order={5}>{t.tabs.visitsTitle}</Title>,
            panel: <HouseholderVisits householdId={household.id} />,
            id: ids.visitsTab,
          },
        ]}
      />
    </>
  );
};
