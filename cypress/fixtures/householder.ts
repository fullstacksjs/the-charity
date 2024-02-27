import { fakerFA } from '@faker-js/faker';
import { getRandom } from '@fullstacksjs/toolbox';

import { genders, religions } from '../../libs/domain';

export const householderFixture = () => ({
  name: fakerFA.person.firstName(),
  surname: fakerFA.person.lastName(),
  fatherName: fakerFA.person.firstName(),
  nationalId: fakerFA.string.numeric({ length: 10 }),
  gender: getRandom(genders),
  religion: getRandom(religions),
  dob: fakerFA.date.past().toString(),
});
