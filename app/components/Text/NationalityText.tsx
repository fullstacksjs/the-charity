import type { NationalityEnum } from '@camp/domain';

import { messages } from '../../messages';

interface Props {
  text: NationalityEnum;
}

export const NationalityText = ({ text }: Props) => {
  return messages.nationalities[text];
};
