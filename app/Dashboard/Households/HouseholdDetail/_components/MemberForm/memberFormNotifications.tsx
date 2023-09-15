import { showNotification } from '@camp/design';
import { messages } from '@camp/messages';
import { tid } from '@camp/test';

import { memberFormIds as ids } from './MemberForm.ids';

const t = messages.notification.member;

export const memberFormNotifications = {
  delete: {
    success: (name: string) =>
      showNotification({
        type: 'success',
        title: t.delete.title,
        message: t.delete.success(name),
        ...tid(ids.notification.delete.success),
      }),
    failure: (name: string) =>
      showNotification({
        type: 'failure',
        title: t.delete.title,
        message: t.delete.failed(name),
        ...tid(ids.notification.delete.failure),
      }),
  },
  edit: {
    success: (name: string) =>
      showNotification({
        type: 'success',
        title: t.edit.title,
        message: t.edit.success(name),
        ...tid(ids.notification.edit.success),
      }),

    failure: (name: string) =>
      showNotification({
        type: 'failure',
        title: t.edit.title,
        message: t.edit.failed(name),
        ...tid(ids.notification.edit.failure),
      }),
  },
  create: {
    success: (name: string) =>
      showNotification({
        type: 'success',
        title: t.create.title,
        message: t.create.success(name),
        ...tid(ids.notification.create.success),
      }),

    failure: (name: string) =>
      showNotification({
        type: 'failure',
        title: t.create.title,
        message: t.create.failed(name),
        ...tid(ids.notification.create.failure),
      }),
  },
};
