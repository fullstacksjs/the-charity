export const nationalities = ['ir'] as const;
export type Nationality = (typeof nationalities)[number];
