import { faker } from '@faker-js/faker';

export const householdFixture = {
  name: () => faker.name.fullName(),
};
