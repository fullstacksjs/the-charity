import { faker } from '@faker-js/faker';

export const familyFixture = {
  name: () => faker.name.fullName(),
};
