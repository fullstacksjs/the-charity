import { faker } from '@faker-js/faker';

export const projectFixture = {
  name: () => faker.lorem.word(5),
  description: () => faker.lorem.lines(1),
};
