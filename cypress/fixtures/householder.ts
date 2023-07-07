import { fakerFA } from '@faker-js/faker';
import { getRandom } from '@fullstacksjs/toolbox';

import { cities, genders, nationalities, religions } from '../../libs/domain';

export const householderFixture = () => ({
  name: fakerFA.person.firstName(),
  surname: fakerFA.person.lastName(),
  fatherName: fakerFA.person.firstName(),
  nationalId: fakerFA.string.numeric({ length: 10 }),
  gender: getRandom(genders),
  nationality: getRandom(nationalities),
  religion: getRandom(religions),
  city: getRandom(cities),
  dob: fakerFA.date.past().toString(),
});
