import { faker } from '@faker-js/faker';

export const genFakeFamilyName = () => faker.name.fullName();

export const genFakeProjectName = () => faker.lorem.word(5);
export const genFakeProjectDescription = () => faker.lorem.lines(1);
