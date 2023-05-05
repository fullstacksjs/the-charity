import type { Meta } from '@storybook/react';
import { useEffect } from 'react';

import { showNotification } from './showNotification';

export default {
  component: () => <></>,
  chromatic: { delay: 500 },
} as Meta;

export const Success = {
  render() {
    useEffect(() => {
      showNotification({
        type: 'success',
        title: 'با موفقیت انجام شد',
        message: 'لورم ایپسوم',
      });
    }, []);
    return <></>;
  },
};

export const Failure = {
  render() {
    useEffect(() => {
      showNotification({
        type: 'failure',
        title: 'با موفقیت شکست خورد',
        message: 'لورم ایپسوم',
      });
    }, []);
    return <></>;
  },
};
