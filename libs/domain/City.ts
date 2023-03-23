export const cities = ['tehran'] as const;

export type City = (typeof cities)[number];
