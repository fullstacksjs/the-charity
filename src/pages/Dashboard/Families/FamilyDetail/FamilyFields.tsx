import { messages } from '@camp/messages';

import { BadgeField, TextField } from '../../../../components';
import { DashboardCardField } from '../../Card';

export const FamilyFields = () => {
  return (
    <>
      <DashboardCardField
        title={messages.familyDetail.familyFields.name.title}
        value={
          <TextField value={messages.familyDetail.familyFields.name.value} />
        }
      />
      <DashboardCardField
        title={messages.familyDetail.familyFields.householder.title}
        value={
          <TextField
            value={messages.familyDetail.familyFields.householder.value}
          />
        }
      />{' '}
      <DashboardCardField
        title={messages.familyDetail.familyFields.members.title}
        value={
          <TextField value={messages.familyDetail.familyFields.members.value} />
        }
      />
      <DashboardCardField
        title={messages.familyDetail.familyFields.severityStatus.title}
        value={
          <BadgeField
            value={messages.familyDetail.familyFields.severityStatus.value}
            status="red"
          />
        }
      />
      <DashboardCardField
        title={messages.familyDetail.familyFields.informationStatus.title}
        value={
          <BadgeField
            value={messages.familyDetail.familyFields.informationStatus.value}
            status="yellow"
          />
        }
      />
    </>
  );
};
