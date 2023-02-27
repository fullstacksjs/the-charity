export const countries = ['ir'] as const;
export const cities = ['tehran'] as const;

export type City = (typeof cities)[number];
