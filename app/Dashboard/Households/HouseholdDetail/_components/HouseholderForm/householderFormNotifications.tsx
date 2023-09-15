import { showNotification } from '@camp/design';
import { messages } from '@camp/messages';
import { tid } from '@camp/test';

import { householderFormIds as ids } from './HouseholderForm.ids';

const t = messages.notification.householder;

export const householderFormNotifications = {
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
};
