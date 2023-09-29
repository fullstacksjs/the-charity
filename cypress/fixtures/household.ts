import { fakerFA } from '@faker-js/faker';

export const householdFixture = {
  name: () => fakerFA.person.fullName(),
};
