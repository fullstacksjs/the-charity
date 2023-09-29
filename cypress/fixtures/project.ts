import { fakerFA } from '@faker-js/faker';

export const projectFixture = {
  name: () => fakerFA.lorem.word(100),
  description: () => fakerFA.lorem.lines(1),
};
