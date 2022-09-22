import type { Meta } from '@storybook/react';

import MainLogo from '../../../assets/image/main-logo.svg';
import Logo from './Logo';

export default {
  component: Logo,
} as Meta;

const image = {
  src: MainLogo,
  alt: 'Logo',
};

export const Default = () => <Logo logoSrc={image.src} />;
