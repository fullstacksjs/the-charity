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
  DetailCard,
  FullPageLoader,
  showNotification,
  Tabs,
  TextInput,
} from '@camp/design';
import type { HouseholdSeverityEnum } from '@camp/domain';
import { createResolver, householdSchema, severities } from '@camp/domain';
import { ArrowUpIcon, CheckIcon, EditIcon, TrashIcon } from '@camp/icons';
import { errorMessages, messages } from '@camp/messages';
import { AppRoute, useNavigate, useParams } from '@camp/router';
import { createTestAttr } from '@camp/test';
import { isNull } from '@fullstacksjs/toolbox';
import { Button, createStyles, Flex, Title } from '@mantine/core';
import { useBoolean } from 'ahooks';
import { useForm } from 'react-hook-form';

import {
  HouseholderDetail,
  InformationBadge,
  MemberList,
  SeverityBadge,
  UndoButton,
} from '../../../../components';
import { openDeleteHouseholdModal } from '../DeleteHouseholdModal';
import { householdDetailIds as ids } from './HouseholdDetail.ids';

interface FormSchema {
  name: string;
  severity: HouseholdSeverityEnum;
}

const resolver = createResolver<FormSchema>({
  name: householdSchema.name(),
  severity: householdSchema.severity(),
});

const useStyles = createStyles(theme => ({
  input: {
    label: {
      color: theme.colors.fgSubtle[6],
    },
  },
}));

// eslint-disable-next-line max-lines-per-function
export const HouseholdDetail = () => {
  const t = messages.householdDetail;
  const tNotification = messages.notification.household;
  const householdId = useParams();
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
    variables: { id: householdId },
    onCompleted: d => {
      reset(d.household ?? {});
    },
  });
  const [deleteHousehold] = useDeleteHouseholdMutation();
  const [completeHousehold] = useCompleteHouseholdMutation();
  const [updateHousehold] = useEditHouseholdMutation();

  const household = householdData?.household;
  const { data: householderData } = useHouseholderQuery({
    variables: { id: householdId },
  });

  const onUpdateHousehold = handleSubmit(async formData => {
    try {
      await updateHousehold({
        variables: {
          id: householdId,
          update: { name: formData.name, severity: formData.severity },
        },
      });

      showNotification({
        title: t.title,
        message: messages.householder.form.notification.successfulUpdate(
          household!.name,
        ),
        type: 'success',
        ...createTestAttr(ids.notification.success),
      });
    } catch (err) {
      debug.error(err);

      showNotification({
        title: t.title,
        message: messages.householder.form.notification.failedUpdate(
          household!.name,
        ),
        type: 'failure',
        ...createTestAttr(ids.notification.failure),
      });
    }
  });

  const householder = householderData?.householder;
  const { classes } = useStyles();
  const [isEditing, { set: setIsEditing }] = useBoolean(false);

  const isReadOnly = !isEditing;

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
    <form onSubmit={onUpdateHousehold} {...createTestAttr(ids.form)}>
      <DetailCard
        title={t.title}
        id={household.code}
        px={0}
        left={
          <Flex gap={20}>
            {isEditing ? (
              <>
                <UndoButton
                  onClick={() => {
                    reset();
                    setIsEditing(false);
                  }}
                />
                <Button
                  {...createTestAttr(ids.submitBtn)}
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
                <Button
                  key={1}
                  {...createTestAttr(ids.editBtn)}
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
            className={classes.input}
            wrapperProps={createTestAttr(ids.nameInput)}
            {...register('name')}
            label={`${t.householdFields.name.title}:`}
            error={errors.name?.message}
          />

          <ControlledSelect
            readOnly={isReadOnly}
            presentation={v => (
              <DetailCard.Field title={t.householdFields.severityStatus.title}>
                <SeverityBadge severity={v as HouseholdSeverityEnum} />
              </DetailCard.Field>
            )}
            name="severity"
            control={control}
            wrapperProps={createTestAttr(ids.severityInput)}
            data={severities.map(v => ({
              value: v,
              label: messages.households.severityStatus[v],
            }))}
            label={`${t.householdFields.severityStatus.title}:`}
          />
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
            panel: <HouseholderDetail household={household} />,
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
    </form>
  );
};
