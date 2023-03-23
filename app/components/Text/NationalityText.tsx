import { type Nationality } from '@camp/domain';

import { messages } from '../../messages';

interface Props {
  text: Nationality;
}

export const NationalityText = ({ text }: Props) => {
  return messages.nationalities[text];
};
