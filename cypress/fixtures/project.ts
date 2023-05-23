import { faker } from '@faker-js/faker';

export const projectFixture = {
  name: () => faker.lorem.word(100),
  description: () => faker.lorem.lines(1),
};
